import { MPSnippets } from '../src/mpSnippets';
import { Language, Dictionary, DataPlanMatchType } from '../src/language';
import { DataPlanPoint, DataPlanValidator, DataPlanValidatorType, DataPlanMatch } from '@mparticle/data-planning-models';

describe('MPSnippets ', () => {
    it('testCustomEvent', () => {
        const jsonSchema = {
            "properties": {
                "data": {
                    "additionalProperties": true,
                    "properties": {
                        "custom_event_type": {
                            "const": "transaction"
                        },
                        "event_name": {
                            "const": "event name"
                        },
                        "custom_attributes": {
                            "additionalProperties": false,
                            "properties": {
                                "A_String_Key": {
                                    "const": "string",
                                    "type": "string"
                                },
                                "A Date Key": {
                                    "const": "date-time",
                                    "type": "string"
                                },
                                "A Number Key": {
                                    "const": "string",
                                    "type": "string"
                                }
                            },
                            "required": []
                        }
                    },
                    "required": [
                        "custom_event_type",
                        "event_name"
                    ]
                }
            }
        }

        const result: Dictionary = {
            "data": {
                "custom_event_type": "transaction",
                "event_name": "event name",
                "custom_attributes": {
                    "A_String_Key": "string",
                    "A Date Key": "date-time",
                    "A Number Key": "string"
                }
            }
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.CustomEvent };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(result.String);

        var resultString = MPSnippets.createSnippet(dataPlanPoint, Language.Swift)
        expect(resultString).toEqual('let customEvent = MPEvent.init(name: "event name", type: .transaction)\nvar eventInfo = [String: Any].init()\neventInfo["A_String_Key"] = "string"\neventInfo["A Date Key"] = "date-time"\neventInfo["A Number Key"] = "string"\ncustomEvent?.customAttributes = eventInfo\n\nMParticle.sharedInstance().logEvent(customEvent!)\n');

        resultString = MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)
        expect(resultString).toEqual('MPEvent *customEvent = [[MPEvent alloc] initWithName:@"event name" type: MPEventTypeTransaction];\nNSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];\neventInfo[@"A_String_Key"] = @"string";\neventInfo[@"A Date Key"] = @"date-time";\neventInfo[@"A Number Key"] = @"string";\n\ncustomEvent.customAttributes = eventInfo;\n\n[[MParticle sharedInstance] logEvent:customEvent];\n');
    });

    it('testSimpleEvent', () => {
        const jsonSchema = {
            "properties": {
                "data": {
                    "additionalProperties": true,
                    "properties": {
                        "custom_event_type": {
                            "const": "other"
                        },
                        "event_name": {
                            "const": "Simple Event Name"
                        },
                        "custom_attributes": {
                            "additionalProperties": false,
                            "properties": {
                                "SimpleKey": {
                                    "const": "string"
                                }
                            },
                            "required": []
                        }
                    },
                    "required": [
                        "custom_event_type",
                        "event_name"
                    ]
                }
            }
        }

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
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(result.String);
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual('let customEvent = MPEvent.init(name: "Simple Event Name", type: .other)\nvar eventInfo = [String: Any].init()\neventInfo["SimpleKey"] = "string"\ncustomEvent?.customAttributes = eventInfo\n\nMParticle.sharedInstance().logEvent(customEvent!)\n');
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual('MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Simple Event Name" type: MPEventTypeOther];\nNSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];\neventInfo[@"SimpleKey"] = @"string";\n\ncustomEvent.customAttributes = eventInfo;\n\n[[MParticle sharedInstance] logEvent:customEvent];\n');
    });

    it('testScreenView', () => {
        const jsonSchema = {
            "properties": {
                "data": {
                    "additionalProperties": true,
                    "properties": {
                        "screen_name": {
                            "const": "Video Streams"
                        },
                        "custom_attributes": {
                            "additionalProperties": false,
                            "properties": {
                                "Launch": {
                                    "const": "true"
                                }
                            },
                            "required": []
                        }
                    },
                    "required": [
                        "screen_name"
                    ]
                }
            }
        }

        const result: Dictionary = {
            "data": {
                "screen_name": "Video Streams",
                "custom_attributes": {
                    "Launch": "string"
                }
            }
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.ScreenView };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(result.String);
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual('var eventInfo = [String: Any].init()\neventInfo["Launch"] = "true"\nMParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)\n');
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual('NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];\neventInfo[@"Launch"] = @"true";\n\n[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];\n');
    });

    it('testUserAttribute', () => {
        const jsonSchema = {
            "additionalProperties": false,
            "properties": {
                "example attribute key": {
                    "const": "string"
                },
                "$Age": {
                    "description": "",
                    "const": "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"
                },
                "$gender": {
                    "const": "string"
                },
                "Achieved Level": {
                    "description": "",
                    "const": "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"
                }
            },
            "required": []
        }

        const result: Dictionary = {
            "example attribute key": "string",
            "$Age": "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$",
            "$gender": "string",
            "Achieved Level": "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"
        }

        const validator: DataPlanValidator = { definition: jsonSchema, type: DataPlanValidatorType.JSONSchema };
        validator.definition = jsonSchema;
        const match: DataPlanMatch = { type: DataPlanMatchType.UserAttributes };
        const dataPlanPoint: DataPlanPoint = {};
        dataPlanPoint.validator = validator;
        dataPlanPoint.match = match;
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.JSON)).toEqual(result.String);
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.Swift)).toEqual('MParticle.sharedInstance().identity.currentUser?.setUserAttribute("example attribute key", value: "string")\nMParticle.sharedInstance().identity.currentUser?.setUserAttribute("$Age", value: "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$")\nMParticle.sharedInstance().identity.currentUser?.setUserAttribute("$gender", value: "string")\nMParticle.sharedInstance().identity.currentUser?.setUserAttribute("Achieved Level", value: "^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$")\n');
        expect(MPSnippets.createSnippet(dataPlanPoint, Language.ObjectiveC)).toEqual('[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"example attribute key" value:@"string"];\n[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$Age" value:@"^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"];\n[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$gender" value:@"string"];\n[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"Achieved Level" value:@"^-?\\d+(\\.\\d+)?([eE][+\\-]?\\d+)?$"];\n');
    });
});
