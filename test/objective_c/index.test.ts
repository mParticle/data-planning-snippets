//generate some code
import { MPSnippets } from '../../src/mpSnippets';
import * as fixtures from '../fixtures/sample_datapoints.json'
import { Language } from '../../src/language';
import * as fs from 'fs';

function execShellCommand(cmd: any) {
    const exec = require('child_process').exec;
    return new Promise((resolve, reject) => {
        exec(cmd, (error: any, stdout: unknown, stderr: unknown) => {

            if (!error) {
                resolve(stdout);
            } else {
                reject(stderr);
            }
        });
    });
}


describe('Objective C Generation ', () => {
    it('Pods should update successfully', async () => {
        await execShellCommand('pod update --project-directory=./test/objective_c/Objective_C_App/');
    }, 30 * 1000);

    it('Custom Events should be validated', async () => {
        const locationResult = MPSnippets.createSnippet(fixtures.custom_event.location, Language.ObjectiveC);

        const transactionResult = MPSnippets.createSnippet(fixtures.custom_event.transaction, Language.ObjectiveC);

        const userContentResult = MPSnippets.createSnippet(fixtures.custom_event.user_content, Language.ObjectiveC);

        const userPreferenceResult = MPSnippets.createSnippet(fixtures.custom_event.user_preference, Language.ObjectiveC);

        const socialResult = MPSnippets.createSnippet(fixtures.custom_event.social, Language.ObjectiveC);

        const otherResult = MPSnippets.createSnippet(fixtures.custom_event.other, Language.ObjectiveC);

        const unknownResult = MPSnippets.createSnippet(fixtures.custom_event.unknown, Language.ObjectiveC);

        const navigationResult = MPSnippets.createSnippet(fixtures.custom_event.navigation, Language.ObjectiveC);

        const fixtureClass = `#import "Snippets.h"\n@import mParticle_Apple_SDK;\n@implementation Snippets \n
        - (void)testLocation { \n ${locationResult} \n }\n\n
        - (void)testTransaction { \n ${transactionResult} \n }\n\n
        - (void)testUserContent { \n ${userContentResult} \n }\n\n
        - (void)testUserPreference { \n ${userPreferenceResult} \n }\n\n
        - (void)testSocial { \n ${socialResult} \n }\n\n
        - (void)testOther { \n ${otherResult} \n }\n\n
        - (void)testUnknown { \n ${unknownResult} \n }\n\n
        - (void)testNavigation { \n ${navigationResult} \n }\n\n
        @end`;
        fs.writeFileSync('./test/objective_c/Objective_C_App/Objective_C_App/Snippets.m', fixtureClass);


        const workspaceFile = './test/objective_c/Objective_C_App/Objective_C_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Objective_C_App`;
        await execShellCommand(command);
    }, 30 * 1000);

    it('User Attribute Events should be validated', async () => {
        const firstResult = MPSnippets.createSnippet(fixtures.user_attribute, Language.ObjectiveC);

        const fixtureClass = `#import "Snippets.h"\n@import mParticle_Apple_SDK;\n@implementation Snippets \n
        - (void)testFirst { \n ${firstResult} \n }\n\n
        @end`;
        fs.writeFileSync('./test/objective_c/Objective_C_App/Objective_C_App/Snippets.m', fixtureClass);

        const workspaceFile = './test/objective_c/Objective_C_App/Objective_C_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Objective_C_App`;
        await execShellCommand(command);
    }, 30 * 1000);

    it('ScreenView Events should be validated', async () => {
        const firstResult = MPSnippets.createSnippet(fixtures.screen_view, Language.ObjectiveC);

        const fixtureClass = `#import "Snippets.h"\n@import mParticle_Apple_SDK;\n@implementation Snippets \n
        - (void)testFirst { \n ${firstResult} \n }\n\n
        @end`;
        fs.writeFileSync('./test/objective_c/Objective_C_App/Objective_C_App/Snippets.m', fixtureClass);

        const workspaceFile = './test/objective_c/Objective_C_App/Objective_C_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Objective_C_App`;
        await execShellCommand(command);
    }, 30 * 1000);
});