import { MPSnippets } from '../../src/mpSnippets';
import { Language, Dictionary } from '../../src/language';
import { DataPlanPoint, DataPlanValidator, DataPlanValidatorType, DataPlanMatch, DataPlanMatchType } from '@mparticle/data-planning-models';
import * as fixtures from '../fixtures/sample_datapoints.json';
import { Results } from './testResults';

describe('MPSnippets ', () => {
    it('testTranslateDataPlanObjC', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.ObjectiveC)

        expect(resultString).toEqual(Results.wholeObjC);
    });

    it('testTranslateDataPlanSwift', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.Swift)

        expect(resultString).toEqual(Results.wholeSwift);
    });

    it('testTranslateDataPlanJava', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.AndroidJava)

        expect(resultString).toEqual(Results.wholeJava);
    });

    it('testTranslateDataPlanKotlin', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.AndroidKotlin)

        expect(resultString).toEqual(Results.wholeKotlin);
    });

    it('testTranslateDataPlanJS', () => {
        const jsonSchema = fixtures.whole_data_plan;
        var resultString = MPSnippets.translateDataPlanJSON(jsonSchema, Language.JavaScript)

        console.log("Whole Data Plan:\n", resultString)

        expect(resultString).toEqual(Results.wholeJS);
    });

    it('testLocationEvent', () => {
        const jsonSchema = fixtures.custom_event.location;

        const result: Dictionary = {
            "data": {
                "custom_event_type": "location",
                "event_name": "loca",
                "custom_attributes": {
                }
            }
        };

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;

        var resultString = MPSnippets.createSnippet(dataPlanPoint, Language.JSON)
        console.log("JSON:\n", resultString)
        expect(resultString).toEqual(JSON.stringify(result));

        resultString = MPSnippets.createSnippet(dataPlanPoint, Language.Swift)
        console.log("Swift:\n", resultString)
        expect(resultString).toEqual(
            `\
let customEvent = MPEvent.init(name: "loca", type: .location)
let eventInfo = [String: Any].init()
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)
`
        );

        resultString = MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)
        console.log("Objective C:\n", resultString)
        expect(resultString).toEqual(
            `\
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"loca" type: MPEventTypeLocation];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];
`
        );
    });

    it('testSimpleEvent', () => {
        const jsonSchema = fixtures.simple_event;

        const result: Dictionary = {
            "data": {
                "custom_event_type": "other",
                "event_name": "Simple Event Name",
                "custom_attributes": {
                    "SimpleKey": "string"
                }
            }
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(JSON.stringify(result));
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
let customEvent = MPEvent.init(name: "Simple Event Name", type: .other)
var eventInfo = [String: Any].init()
eventInfo["SimpleKey"] = "string"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)
`
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual(
            `\
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Simple Event Name" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"SimpleKey"] = @"string";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];
`
        );
    });

    it('testUserAttribute', () => {
        const jsonSchema = fixtures.user_attribute;

        const result: Dictionary = {
            "name": "Sarah Conner",
            "age": 34,
            "deceased": true,
            "deathDate": "1996-02-24T17:32:31.082Z",
            "birthDate": "1984-05-15",
            "xFactor": null
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.UserAttributes };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(JSON.stringify(result));
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("name", value: "Sarah Conner")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("age", value: 34)
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("deceased", value: true)
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("deathDate", value: "1996-02-24T17:32:31.082Z")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("birthDate", value: "1984-05-15")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("xFactor", value: NSNull.init())
`
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual(
            `\
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"name" value:@"Sarah Conner"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"age" value:@34];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"deceased" value:@true];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"deathDate" value:@"1996-02-24T17:32:31.082Z"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"birthDate" value:@"1984-05-15"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"xFactor" value:[NSNull null]];
`
        );
    });

    it('testScreenView', () => {
        const jsonSchema = fixtures.screen_view.second;

        const result: Dictionary = {
            "data": {
                "screen_name": "Video Streams",
                "custom_attributes": {
                    "Launch": true
                }
            }
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.ScreenView };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(JSON.stringify(result));
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
var eventInfo = [String: Any].init()
eventInfo["Launch"] = true
MParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)
`
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual(
            `\
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Launch"] = @true;

[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];
`
        );
    });
});
