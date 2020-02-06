// tslint:disable: max-line-length
import { MPSnippets } from '../src/mpSnippets';
import { Language, Dictionary } from '../src/language';
import {
    DataPlanPoint,
    DataPlanValidator,
    DataPlanValidatorType,
    DataPlanMatch,
    DataPlanMatchType,
} from '@mparticle/data-planning-models';

describe('MPSnippets ', () => {
    it('testCustomEvent', () => {
        const jsonSchema = {
            properties: {
                data: {
                    additionalProperties: true,
                    properties: {
                        custom_event_type: {
                            const: 'transaction',
                        },
                        event_name: {
                            const: 'event name',
                        },
                        custom_attributes: {
                            additionalProperties: false,
                            properties: {
                                A_String_Key: {
                                    const: 'string',
                                    type: 'string',
                                },
                                'A Date Key': {
                                    const: 'date-time',
                                    type: 'string',
                                },
                                'A Number Key': {
                                    const: 'string',
                                    type: 'string',
                                },
                            },
                            required: [],
                        },
                    },
                    required: ['custom_event_type', 'event_name'],
                },
            },
        };

        const result: Dictionary = {
            data: {
                custom_event_type: 'transaction',
                event_name: 'event name',
                custom_attributes: {
                    A_String_Key: 'string',
                    'A Date Key': 'date-time',
                    'A Number Key': 'string',
                },
            },
        };

        const validator: DataPlanValidator = {
            definition: jsonSchema,
            type: DataPlanValidatorType.JSONSchema,
        };

        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(
            result.String
        );

        const swiftResultString = MPSnippets.createSnippet(
            dataPlanPoint,
            Language.Swift
        );

        const swiftEventSnippet = `\
let customEvent = MPEvent.init(name: "event name", type: .transaction)
var eventInfo = [String: Any].init()
eventInfo["A_String_Key"] = "string"
eventInfo["A Date Key"] = "date-time"
eventInfo["A Number Key"] = "string"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)
`;
        expect(swiftResultString).toEqual(swiftEventSnippet);

        const objectiveCResultString = MPSnippets.createSnippet(
            dataPlanPoint,
            Language.ObjectiveC
        );

        const objectiveCEventSnippet = `\
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"event name" type: MPEventTypeTransaction];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"A_String_Key"] = @"string";
eventInfo[@"A Date Key"] = @"date-time";
eventInfo[@"A Number Key"] = @"string";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];
`;

        expect(objectiveCResultString).toEqual(objectiveCEventSnippet);
    });

    it('testSimpleEvent', () => {
        const jsonSchema = {
            properties: {
                data: {
                    additionalProperties: true,
                    properties: {
                        custom_event_type: {
                            const: 'other',
                        },
                        event_name: {
                            const: 'Simple Event Name',
                        },
                        custom_attributes: {
                            additionalProperties: false,
                            properties: {
                                SimpleKey: {
                                    const: 'string',
                                },
                            },
                            required: [],
                        },
                    },
                    required: ['custom_event_type', 'event_name'],
                },
            },
        };

        const result: Dictionary = {
            data: {
                custom_event_type: 'other',
                event_name: 'Simple Event Name',
                custom_attributes: {
                    SimpleKey: 'string',
                },
            },
        };

        const validator: DataPlanValidator = {
            definition: jsonSchema,
            type: DataPlanValidatorType.JSONSchema,
        };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(
            result.String
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
let customEvent = MPEvent.init(name: "Simple Event Name", type: .other)
var eventInfo = [String: Any].init()
eventInfo["SimpleKey"] = "string"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)
`
        );
        expect(
            MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)
        ).toEqual(
            `\
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Simple Event Name" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"SimpleKey"] = @"string";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];
`
        );
    });

    it('testScreenView', () => {
        const jsonSchema = {
            properties: {
                data: {
                    additionalProperties: true,
                    properties: {
                        screen_name: {
                            const: 'Video Streams',
                        },
                        custom_attributes: {
                            additionalProperties: false,
                            properties: {
                                Launch: {
                                    const: 'true',
                                },
                            },
                            required: [],
                        },
                    },
                    required: ['screen_name'],
                },
            },
        };

        const result: Dictionary = {
            data: {
                screen_name: 'Video Streams',
                custom_attributes: {
                    Launch: 'string',
                },
            },
        };

        const validator: DataPlanValidator = {
            definition: jsonSchema,
            type: DataPlanValidatorType.JSONSchema,
        };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.ScreenView };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(
            result.String
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
var eventInfo = [String: Any].init()
eventInfo["Launch"] = "true"
MParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)
`
        );
        expect(
            MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)
        ).toEqual(
            `\
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Launch"] = @"true";

[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];
`
        );
    });

    it('testUserAttribute', () => {
        const jsonSchema = {
            additionalProperties: false,
            properties: {
                'example attribute key': {
                    const: 'string',
                },
                $Age: {
                    description: '',
                    const: '^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$',
                },
                $gender: {
                    const: 'string',
                },
                'Achieved Level': {
                    description: '',
                    const: '^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$',
                },
            },
            required: [],
        };

        const result: Dictionary = {
            'example attribute key': 'string',
            $Age: '^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$',
            $gender: 'string',
            'Achieved Level': '^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$',
        };

        const validator: DataPlanValidator = {
            definition: jsonSchema,
            type: DataPlanValidatorType.JSONSchema,
        };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.UserAttributes };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(
            result.String
        );
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual(
            `\
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("example attribute key", value: "string")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("$Age", value: "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("$gender", value: "string")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("Achieved Level", value: "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$")
`
        );
        expect(
            MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)
        ).toEqual(
            `\
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"example attribute key" value:@"string"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$Age" value:@"^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$gender" value:@"string"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"Achieved Level" value:@"^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"];
`
        );
    });
});
