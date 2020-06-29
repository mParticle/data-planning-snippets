import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import 'jsoneditor-react/es/editor.min.css';

import { MPSnippets } from '@mparticle/data-planning-snippets';
import { DataPlanMatchType } from '@mparticle/data-planning-models';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-monokai';

function App() {
    return (
        <div className="wrapper">
            <DemoForm />
        </div>
    );
}

class DemoForm extends Component {
    state = {
        json: '',
        eventType: DataPlanMatchType.CustomEvent,
        language: 'swift',
        content: '',
    };

    handleClick = () => {
        const { language, json } = this.state;
        var currentLanguage = 1;
        if (language === 'swift') {
            currentLanguage = 2;
        } else if (language === 'objC') {
            currentLanguage = 3;
        } else if (language === 'kotlin') {
            currentLanguage = 4;
        } else if (language === 'java') {
            currentLanguage = 5;
        } else if (language === 'javascript') {
            currentLanguage = 6;
        }

        var content;
        try {
            content = MPSnippets.translateDataPlanJSON(
                JSON.parse(json),
                currentLanguage
            );
        } catch (e) {
            content = 'There is something wrong with your JSON';
            console.log(e);
        }
        console.log(content);

        this.setState(state => ({
            content,
        }));
    };

    handleLanguageChange = event => {
        this.setState({ language: event.target.value }, () => {
            this.handleClick();
        });
    };

    handleJSONChange = (value, event) => {
        this.setState({ json: value }, () => {
            this.handleClick();
        });
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <img
                            src="https://static.mparticle.com/sdk/mp_logo_black.svg"
                            width={280}
                            alt="mParticle"
                        />
                        <a
                            className="github"
                            href="https://github.com/mParticle/data-planning-snippets"
                            target="_blank"
                        >
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                                width={150}
                                alt="Checkout our repository on Github"
                            />
                        </a>
                        <p />
                        mParticle Snippets combines your data plan with example
                        data generators, allowing users to generate mParticle
                        events that conforms to your data plan.
                    </div>
                    <div>
                        <a
                            className="icons"
                            href="https://www.npmjs.com/package/@mparticle/data-planning-snippets"
                            target="_blank"
                        >
                            <img
                                className="mr"
                                src="https://img.shields.io/npm/v/@mparticle/data-planning-snippets.svg?maxAge=2592000"
                            />
                        </a>
                        <a
                            className="icons"
                            href="https://travis-ci.com/mParticle/data-planning-snippets"
                            target="_blank"
                        >
                            <img
                                className="mr"
                                src="https://travis-ci.com/mParticle/data-planning-snippets.svg?branch=master"
                            />
                        </a>
                    </div>
                </div>
                <Form className="form">
                    <Form.Group>
                        <Form.Field
                            label="Please select a language"
                            control="select"
                            value={this.state.language}
                            onChange={e => this.handleLanguageChange(e)}
                        >
                            <option value="json">JSON</option>
                            <option value="swift">Apple SDK (Swift)</option>
                            <option value="objC">Apple SDK (Obj-C)</option>
                            <option value="kotlin">Android SDK (Kotlin)</option>
                            <option value="java">Android SDK (Java)</option>
                            <option value="javascript">Web SDK</option>
                        </Form.Field>
                    </Form.Group>
                    <Form.Group widths="equal">
                        <AceEditor
                            className="jsonEditor"
                            width="50%"
                            height="800px"
                            placeholder="Paste your Data Plan JSON here"
                            mode="json"
                            theme="monokai"
                            name="blah1"
                            onLoad={this.onLoad}
                            onChange={(value, event) =>
                                this.handleJSONChange(value, event)
                            }
                            fontSize={14}
                            showPrintMargin={false}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={this.state.json}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                        <AceEditor
                            className="jsonEditor"
                            width="50%"
                            height="800px"
                            placeholder="Example code will appear here"
                            mode="json"
                            theme="monokai"
                            name="blah2"
                            readOnly={true}
                            onLoad={this.onLoad}
                            onChange={this.onChange}
                            fontSize={14}
                            showPrintMargin={false}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={this.state.content}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default App;
