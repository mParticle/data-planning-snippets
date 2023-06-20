const globalAny: any = global;
import { MPSnippets } from '../../src/mpSnippets';
import * as fixtures from '../fixtures/sample_datapoints.json'
import { Language } from '../../src/language';
const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;
const window = new JSDOM().window;
globalAny.window = window;
const mParticle = require('@mparticle/web-sdk');

// mParticle must be initialized before each test's eval is run.
// To initialize mparticle, we must first mock XHR requests.
const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn()
})

window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
mParticle.init('fakeAPIKey', { workspaceToken: 'abcd' });

describe('JavaScript Generation ', () => {

    it('Creates a session start', () => {
        var result = MPSnippets.createSnippet(fixtures.session_start, Language.JavaScript);
        expect(result).toBe(`mParticle.startNewSession()`);

        eval(result);
    });

    it('Creates a session end', () => {
        var result = MPSnippets.createSnippet(fixtures.session_end, Language.JavaScript);
        expect(result).toBe(`mParticle.endSession()`);

        eval(result);
    });

    it('Custom Event should be validated', () => {
        const locationResult = MPSnippets.createSnippet(fixtures.custom_event.location, Language.JavaScript);

        expect(locationResult).toBe(`mParticle.logEvent('loca', mParticle.EventType.Location)`);
        eval(locationResult);

        const transactionResult = MPSnippets.createSnippet(fixtures.custom_event.transaction, Language.JavaScript);
        expect(transactionResult).toBe(`mParticle.logEvent('transa', mParticle.EventType.Transaction)`);
        eval(transactionResult);

        const userContentResult = MPSnippets.createSnippet(fixtures.custom_event.user_content, Language.JavaScript);
        expect(userContentResult).toBe(`mParticle.logEvent('userCont', mParticle.EventType.Other)`);
        eval(userContentResult);

        const userPreferenceResult = MPSnippets.createSnippet(fixtures.custom_event.user_preference, Language.JavaScript);
        expect(userPreferenceResult).toBe(`mParticle.logEvent('userPref', mParticle.EventType.Other)`);
        eval(userPreferenceResult);

        const socialResult = MPSnippets.createSnippet(fixtures.custom_event.social, Language.JavaScript);
        expect(socialResult).toBe(`mParticle.logEvent('soc', mParticle.EventType.Social)`);
        eval(socialResult);

        const otherResult = MPSnippets.createSnippet(fixtures.custom_event.other, Language.JavaScript);
        expect(otherResult).toBe(`mParticle.logEvent('other', mParticle.EventType.Other)`);
        eval(otherResult);

        const unknownResult = MPSnippets.createSnippet(fixtures.custom_event.unknown, Language.JavaScript);
        expect(unknownResult).toBe(`mParticle.logEvent('unk', mParticle.EventType.Unknown)`);
        eval(unknownResult);

        const mediaResult = MPSnippets.createSnippet(fixtures.custom_event.media, Language.JavaScript);
        expect(mediaResult).toBe(`mParticle.logEvent('media', mParticle.EventType.Media)`);
        eval(unknownResult);

        const navigationResult = MPSnippets.createSnippet(fixtures.custom_event.navigation, Language.JavaScript);
        let expected = `let customAttributes = {\n    viewName: "main menu",\n};\nmParticle.logEvent('navi', mParticle.EventType.Navigation, customAttributes)`
        expect(navigationResult).toBe(expected);
        eval(navigationResult);
    });

    it('User Attribute Events should be validated', () => {
        const firstResult = MPSnippets.createSnippet(fixtures.user_attribute, Language.JavaScript);
        var expected = `mParticle.Identity.getCurrentUser().setUserAttribute("name", "Sarah Conner")
mParticle.Identity.getCurrentUser().setUserAttribute("age", 34)
mParticle.Identity.getCurrentUser().setUserAttribute("deceased", true)
mParticle.Identity.getCurrentUser().setUserAttribute("deathDate", "1996-02-24T17:32:31.082Z")
mParticle.Identity.getCurrentUser().setUserAttribute("birthDate", "1984-05-15")
mParticle.Identity.getCurrentUser().setUserAttribute("xFactor", null)
`
        expect(firstResult).toBe(expected);
        mParticle.Identity = {
            getCurrentUser: () => {
                return {
                    setUserAttribute: () => { }
                }
            }
        }
        eval(firstResult);
    });

    it('ScreenView Events should be validated', () => {
        const firstResult = MPSnippets.createSnippet(fixtures.screen_view, Language.JavaScript);
        expect(firstResult).toBe(`mParticle.logPageView('screen')`)
        eval(firstResult);
    });
});