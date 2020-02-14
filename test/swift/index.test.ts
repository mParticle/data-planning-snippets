//generate some code
import { MPSnippets } from '../../src/mpSnippets';
import * as fixtures from '../fixtures/sample_datapoints.json'
import { Language } from '../../src/language';
import { DataPlanPoint, DataPlanValidator, DataPlanValidatorType, DataPlanMatch, DataPlanMatchType } from '@mparticle/data-planning-models';
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


describe('Swift Generation ', () => {
    it('Pods should update successfully', async () => {
        await execShellCommand('pod update --project-directory=./test/swift/Swift_App/');
    }, 30 * 1000);

    it('Custom Event should be validated', async () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const locationSchema = fixtures.custom_event.location;
        const locationValidator: DataPlanValidator = { definition: locationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = locationValidator;
        const locationResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const transactionSchema = fixtures.custom_event.transaction;
        const transactionValidator: DataPlanValidator = { definition: transactionSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = transactionValidator;
        const transactionResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const userContentSchema = fixtures.custom_event.user_content;
        const userContentValidator: DataPlanValidator = { definition: userContentSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = userContentValidator;
        const userContentResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const userPreferenceSchema = fixtures.custom_event.user_preference;
        const userPreferenceValidator: DataPlanValidator = { definition: userPreferenceSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = userPreferenceValidator;
        const userPreferenceResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const socialSchema = fixtures.custom_event.social;
        const socialValidator: DataPlanValidator = { definition: socialSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = socialValidator;
        const socialResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const otherSchema = fixtures.custom_event.other;
        const otherValidator: DataPlanValidator = { definition: otherSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = otherValidator;
        const otherResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const unknownSchema = fixtures.custom_event.unknown;
        const unknownValidator: DataPlanValidator = { definition: unknownSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = unknownValidator;
        const unknownResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const navigationSchema = fixtures.custom_event.navigation;
        const navigationValidator: DataPlanValidator = { definition: navigationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = navigationValidator;
        const navigationResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const searchSchema = fixtures.custom_event.search;
        const searchValidator: DataPlanValidator = { definition: searchSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = searchValidator;
        const searchResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testLocation() {\n ${locationResult} \n}\n\n
            func testTransaction() {\n ${transactionResult} \n}\n\n
            func testUserContent() {\n ${userContentResult} \n}\n\n
            func testUserPreference() {\n ${userPreferenceResult} \n}\n\n
            func testSocial() {\n ${socialResult} \n}\n\n
            func testOther() {\n ${otherResult} \n}\n\n
            func testUnknown() {\n ${unknownResult} \n}\n\n
            func testNaviation() {\n ${navigationResult} \n}\n\n
            func testSearch() {\n ${searchResult} \n}\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
        await execShellCommand(command);
    }, 30 * 1000);

    it('User Attribute Events should be validated', async () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.UserAttributes };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const firstSchema = fixtures.user_attribute;
        const firstValidator: DataPlanValidator = { definition: firstSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = firstValidator;
        const firstResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testFirst() { \n ${firstResult} \n }\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
    }, 30 * 1000);

    it('ScreenView Events should be validated', async () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.ScreenView };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const firstSchema = fixtures.screen_view.first;
        const firstValidator: DataPlanValidator = { definition: firstSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = firstValidator;
        const firstResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const secondSchema = fixtures.screen_view.second;
        const secondValidator: DataPlanValidator = { definition: secondSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = secondValidator;
        const secondResult = MPSnippets.createSnippet(dataPlanPoint, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testFirst() { \n ${firstResult} \n}\n\n
            func testSecond() { \n ${secondResult} \n}\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
        await execShellCommand(command);
    }, 30 * 1000);
});