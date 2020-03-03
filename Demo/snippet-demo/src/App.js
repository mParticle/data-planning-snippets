import React, { Component } from 'react';
import { Form, Container } from 'semantic-ui-react'
import './App.css';
import { JsonEditor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import Highlight from 'react-highlight.js';
import * as initialPlan from './initial-plan'

import { MPSnippets } from '@mparticle/data-planning-snippets'
import { DataPlanValidatorType, DataPlanMatchType } from '@mparticle/data-planning-models';

function App() {
  return (
    <div className="wrapper">
      <DemoForm />
    </div>
  );
}

class DemoForm extends Component {
  json = initialPlan.custom_event.navigation
  validator = { definition: this.json, type: DataPlanValidatorType.JSONSchema }
  match = { type: DataPlanMatchType.CustomEvent }
  dataPlanPoint = { validator: this.validator, match: this.match }

  resultString = MPSnippets.createSnippet(this.dataPlanPoint, 2)

  state = {
    json: this.json,
    eventType: DataPlanMatchType.CustomEvent,
    language: 'swift',
    content: this.resultString
  }

  handleClick = () => {
    const localVal = { definition: this.state.json, type: DataPlanValidatorType.JSONSchema }
    const localMatch = { type: this.state.eventType }
    const localDataPlanPoint = { validator: localVal, match: localMatch }
    var currentLanguage = 1
    if (this.state.language === 'swift') {
      currentLanguage = 2
    } else if (this.state.language === 'objC') {
      currentLanguage = 3
    }

    this.setState(state => ({
      content: MPSnippets.createSnippet(localDataPlanPoint, currentLanguage)
    }));
  }

  handleLanguageChange = (event) => {
    this.setState({
      ...this.state,
      language: event.target.value,
    })
  }

  handleTypeChange = (event) => {
    this.setState({
      ...this.state,
      eventType: event.target.value,
    })
  }

  handleJSONChange = (event) => {
    this.setState(state => ({
      json: event
    }));
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Field label='Please select a language' control='select' value={this.state.language} onChange={(e) => this.handleLanguageChange(e)}>
            <option value='json'>JSON</option>
            <option value='swift'>Swift</option>
            <option value='objC'>Objective C</option>
          </Form.Field>
          <Form.Field label='and the event type' control='select' value={this.state.language} onChange={(e) => this.handleTypeChange(e)}>
            <option value={DataPlanMatchType.CustomEvent}>Custom Event</option>
            <option value={DataPlanMatchType.ScreenView}>Screen View Event</option>
            <option value={DataPlanMatchType.UserAttributes}>User Attribute Event</option>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Container className="jsonEditorForm">
            <JsonEditor
              className="results"
              value={this.state.json}
              onChange={(e) => this.handleJSONChange(e)}
              mode="code"
            //maxRows="100"
            />
          </Container>
          <Highlight className="results" language='bash'>
            {this.state.content}
          </Highlight>
        </Form.Group>
        <Form.Button onClick={this.handleClick}>Translate</Form.Button>
      </Form >
    )
  }
}

export default App;

