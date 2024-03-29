import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import './App.css';
import 'jsoneditor-react/es/editor.min.css';

import { MPSnippets } from '@mparticle/data-planning-snippets';
import { DataPlanMatchType } from '@mparticle/data-planning-models';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/ext-language_tools';
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
            console.error(e);
        }

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
                            rel="noopener noreferrer"
                        />
                        <a
                            className="github"
                            href="https://github.com/mParticle/data-planning-snippets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                                width={150}
                                alt="Checkout our repository on Github"
                            />
                        </a>
                        <p />
                        <p>The mParticle Snippets tool generates working code blocks that log events using the mParticle SDKs in a way that conforms to a data plan.</p>
                        <p>To use the Snippets tool:</p>
                        <ol>
                          <li>Copy the raw JSON from your data plan and paste it in the left column.</li>
                          <li>Select the appropriate language for your app and the mParticle SDK you are using with the language dropdown menu.</li>
                          <li>Use the generated code blocks that appear in the right column to correctly log events from your app.</li>
                        </ol>
                        <p>For an example with detailed instructions, visit mParticle Snippets Tool in mParticle\’s developer documentation.</p>
                    </div>
                    <div>
                        <a
                            className="icons"
                            href="https://www.npmjs.com/package/@mparticle/data-planning-snippets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="mr"
                                alt="shields.io badge"
                                src="https://img.shields.io/npm/v/@mparticle/data-planning-snippets.svg?maxAge=2592000"
                            />
                        </a>
                        <a
                            className="icons"
                            href="https://travis-ci.com/mParticle/data-planning-snippets"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className="mr"
                                alt="travis ci badge"
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
