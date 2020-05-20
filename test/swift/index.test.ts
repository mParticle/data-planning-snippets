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


describe('Swift Generation ', () => {
    it('Pods should update successfully', async () => {
        await execShellCommand('pod update --project-directory=./test/swift/Swift_App/');
    }, 30 * 1000);

    it('Custom Event should be validated', async () => {
        const locationResult = MPSnippets.createSnippet(fixtures.custom_event.location, Language.Swift);

        const transactionResult = MPSnippets.createSnippet(fixtures.custom_event.transaction, Language.Swift);

        const userContentResult = MPSnippets.createSnippet(fixtures.custom_event.user_content, Language.Swift);

        const userPreferenceResult = MPSnippets.createSnippet(fixtures.custom_event.user_preference, Language.Swift);

        const socialResult = MPSnippets.createSnippet(fixtures.custom_event.social, Language.Swift);

        const otherResult = MPSnippets.createSnippet(fixtures.custom_event.other, Language.Swift);

        const unknownResult = MPSnippets.createSnippet(fixtures.custom_event.unknown, Language.Swift);

        const navigationResult = MPSnippets.createSnippet(fixtures.custom_event.navigation, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testLocation() {\n ${locationResult} \n}\n\n
            func testTransaction() {\n ${transactionResult} \n}\n\n
            func testUserContent() {\n ${userContentResult} \n}\n\n
            func testUserPreference() {\n ${userPreferenceResult} \n}\n\n
            func testSocial() {\n ${socialResult} \n}\n\n
            func testOther() {\n ${otherResult} \n}\n\n
            func testUnknown() {\n ${unknownResult} \n}\n\n
            func testNaviation() {\n ${navigationResult} \n}\n\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
        await execShellCommand(command);
    }, 30 * 1000);

    it('User Attribute Events should be validated', async () => {
        const firstResult = MPSnippets.createSnippet(fixtures.user_attribute, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testFirst() { \n ${firstResult} \n }\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
    }, 30 * 1000);

    it('ScreenView Events should be validated', async () => {
        const firstResult = MPSnippets.createSnippet(fixtures.screen_view, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
            func testFirst() { \n ${firstResult} \n}\n\n
        }`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
        await execShellCommand(command);
    }, 30 * 1000);

    it('Commerce Events should be validated', async () => {
        const productActionResult = MPSnippets.createSnippet(fixtures.commerce_events.product_action, Language.Swift);

        const promotionActionResult = MPSnippets.createSnippet(fixtures.commerce_events.promotion_action, Language.Swift);

        const productImpressionResult = MPSnippets.createSnippet(fixtures.commerce_events.product_impression, Language.Swift);

        const fixtureClass = `import UIKit\nimport mParticle_Apple_SDK\n\nclass Snippets: NSObject {\n
func testProductAction() {\n ${productActionResult} \n}\n\n
func testPromotion() {\n ${promotionActionResult} \n}\n\n
func testProductImpression() {\n ${productImpressionResult} \n}\n\n
}`;

        fs.writeFileSync('./test/swift/Swift_App/Swift_App/Snippets.swift', fixtureClass);
        const workspaceFile = './test/swift/Swift_App/Swift_App.xcworkspace';
        const command = `xcodebuild -workspace ${workspaceFile} -scheme Swift_App`;
        await execShellCommand(command);
    }, 30 * 1000);
});