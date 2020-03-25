const globalAny:any = global;
import { MPSnippets } from '../../src/mpSnippets';
import * as fixtures from '../fixtures/sample_datapoints.json'
import { Language } from '../../src/language';
import { DataPlanPoint, DataPlanValidator, DataPlanValidatorType, DataPlanMatch, DataPlanMatchType } from '@mparticle/data-planning-models';
const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;
const window = new JSDOM().window;
globalAny.window = window;
const mParticle = require('@mparticle/web-sdk');

// mParticle must be initialized before each test's eval is run.
// To initialize mparticle, we must first mock XHR requests.
const xhrMockClass = () => ({
    open            : jest.fn(),
    send            : jest.fn(),
    setRequestHeader: jest.fn()
  })
  
window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
mParticle.init('fakeAPIKey', {workspaceToken: 'abcd'});

describe('JavaScript Generation ', () => {
    it('Creates a session start', () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.SessionStart };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;
        const locationSchema = fixtures.custom_event.location;
        const locationValidator: DataPlanValidator = { definition: locationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = locationValidator;
        
        var result = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(result).toBe(`mParticle.startNewSession()`);
        
        eval(result);
    });

    it('Creates a session end', () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.SessionEnd };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;
        const locationSchema = fixtures.custom_event.location;
        const locationValidator: DataPlanValidator = { definition: locationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = locationValidator;
        
        var result = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(result).toBe(`mParticle.endSession()`);

        eval(result);
    });

    it('Custom Event should be validated', () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const locationSchema = fixtures.custom_event.location;
        const locationValidator: DataPlanValidator = { definition: locationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = locationValidator;
        const locationResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        
        expect(locationResult).toBe(`mParticle.logEvent('loca', mParticle.EventType.Location)`);
        eval(locationResult);

        const transactionSchema = fixtures.custom_event.transaction;
        const transactionValidator: DataPlanValidator = { definition: transactionSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = transactionValidator;
        const transactionResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(transactionResult).toBe(`mParticle.logEvent('transa', mParticle.EventType.Transaction)`);
        eval(transactionResult);

        const userContentSchema = fixtures.custom_event.user_content;
        const userContentValidator: DataPlanValidator = { definition: userContentSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = userContentValidator;
        const userContentResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(userContentResult).toBe(`mParticle.logEvent('userCont', mParticle.EventType.Other)`);
        eval(userContentResult);

        const userPreferenceSchema = fixtures.custom_event.user_preference;
        const userPreferenceValidator: DataPlanValidator = { definition: userPreferenceSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = userPreferenceValidator;
        const userPreferenceResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(userPreferenceResult).toBe(`mParticle.logEvent('userPref', mParticle.EventType.Other)`);
        eval(userPreferenceResult);

        const socialSchema = fixtures.custom_event.social;
        const socialValidator: DataPlanValidator = { definition: socialSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = socialValidator;
        const socialResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(socialResult).toBe(`mParticle.logEvent('soc', mParticle.EventType.Social)`);
        eval(socialResult);

        const otherSchema = fixtures.custom_event.other;
        const otherValidator: DataPlanValidator = { definition: otherSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = otherValidator;
        const otherResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(otherResult).toBe(`mParticle.logEvent('other', mParticle.EventType.Other)`);
        eval(otherResult);

        const unknownSchema = fixtures.custom_event.unknown;
        const unknownValidator: DataPlanValidator = { definition: unknownSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = unknownValidator;
        const unknownResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(unknownResult).toBe(`mParticle.logEvent('unk', mParticle.EventType.Media)`);
        eval(unknownResult);

        const navigationSchema = fixtures.custom_event.navigation;
        const navigationValidator: DataPlanValidator = { definition: navigationSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = navigationValidator;
        const navigationResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        let expected = `let customAttributes = {\n    viewName: "main menu",\n};\nmParticle.logEvent('navi', mParticle.EventType.Navigation, customAttributes)`
        expect(navigationResult).toBe(expected);
        eval(navigationResult);
        
        const searchSchema = fixtures.custom_event.search;
        const searchValidator: DataPlanValidator = { definition: searchSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = searchValidator;
        const searchResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        // Because the snippets generator will create random values for boolean, dates, etc, we cannot confirm the expected.
        // However we can still try to eval the string
        eval(searchResult);
    });

    it('User Attribute Events should be validated', () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.UserAttributes };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const firstSchema = fixtures.user_attribute;
        const firstValidator: DataPlanValidator = { definition: firstSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = firstValidator;
        const firstResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
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
                    setUserAttribute: ()=> {}
                }
            }
        }
        eval(firstResult);
    });

    it('ScreenView Events should be validated', () => {
        const match: DataPlanMatch = { type: DataPlanMatchType.ScreenView };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.match = match;

        const firstSchema = fixtures.screen_view.first;
        const firstValidator: DataPlanValidator = { definition: firstSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = firstValidator;
        const firstResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        expect(firstResult).toBe(`mParticle.logPageView('screen')`)
        eval(firstResult);
        
        // Number required, 
        const thirdSchema = fixtures.screen_view.third;
        const thirdValidator: DataPlanValidator = { definition: thirdSchema, type: DataPlanValidatorType.JSONSchema };
        dataPlanPoint.validator = thirdValidator;
        const thirdResult = MPSnippets.createSnippet(dataPlanPoint, Language.JavaScript);
        eval(thirdResult);
    });
});