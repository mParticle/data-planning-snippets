'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jsf = _interopDefault(require('json-schema-faker'));

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var validation_error_type = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationErrorTypeEnum;
(function (ValidationErrorTypeEnum) {
    ValidationErrorTypeEnum["Unknown"] = "unknown";
    ValidationErrorTypeEnum["Unplanned"] = "unplanned";
    ValidationErrorTypeEnum["MissingRequired"] = "missing_required";
    ValidationErrorTypeEnum["InvalidValue"] = "invalid_value";
})(ValidationErrorTypeEnum = exports.ValidationErrorTypeEnum || (exports.ValidationErrorTypeEnum = {}));
var SchemaKeywordErrorTypeEnum;
(function (SchemaKeywordErrorTypeEnum) {
    SchemaKeywordErrorTypeEnum["AdditionalItems"] = "additionalItems";
    SchemaKeywordErrorTypeEnum["AdditionalProperties"] = "additionalProperties";
    SchemaKeywordErrorTypeEnum["Const"] = "const";
    SchemaKeywordErrorTypeEnum["Dependencies"] = "dependencies";
    SchemaKeywordErrorTypeEnum["Enum"] = "enum";
    SchemaKeywordErrorTypeEnum["ExclusiveMaximum"] = "exclusiveMaximum";
    SchemaKeywordErrorTypeEnum["ExclusiveMinimum"] = "exclusiveMinimum";
    SchemaKeywordErrorTypeEnum["Format"] = "format";
    SchemaKeywordErrorTypeEnum["Maximum"] = "maximum";
    SchemaKeywordErrorTypeEnum["MaxLength"] = "maxLength";
    SchemaKeywordErrorTypeEnum["Minimum"] = "minimum";
    SchemaKeywordErrorTypeEnum["MinLength"] = "minLength";
    SchemaKeywordErrorTypeEnum["MultipleOf"] = "multipleOf";
    SchemaKeywordErrorTypeEnum["Pattern"] = "pattern";
    SchemaKeywordErrorTypeEnum["PatternProperties"] = "patternProperties";
    SchemaKeywordErrorTypeEnum["Required"] = "required";
    SchemaKeywordErrorTypeEnum["Type"] = "type";
})(SchemaKeywordErrorTypeEnum = exports.SchemaKeywordErrorTypeEnum || (exports.SchemaKeywordErrorTypeEnum = {}));
});

unwrapExports(validation_error_type);
var validation_error_type_1 = validation_error_type.ValidationErrorTypeEnum;
var validation_error_type_2 = validation_error_type.SchemaKeywordErrorTypeEnum;

var validation_result_event = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationResultEventEventTypeEnum;
(function (ValidationResultEventEventTypeEnum) {
    ValidationResultEventEventTypeEnum["ValidationResult"] = "validation_result";
})(ValidationResultEventEventTypeEnum = exports.ValidationResultEventEventTypeEnum || (exports.ValidationResultEventEventTypeEnum = {}));
});

unwrapExports(validation_result_event);
var validation_result_event_1 = validation_result_event.ValidationResultEventEventTypeEnum;

var types = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
var ActivatedEnvironment;
(function (ActivatedEnvironment) {
    ActivatedEnvironment["Development"] = "development";
    ActivatedEnvironment["Production"] = "production";
})(ActivatedEnvironment = exports.ActivatedEnvironment || (exports.ActivatedEnvironment = {}));
var DataPlanMatchType;
(function (DataPlanMatchType) {
    DataPlanMatchType["Unknown"] = "unknown";
    DataPlanMatchType["SessionStart"] = "session_start";
    DataPlanMatchType["SessionEnd"] = "session_end";
    DataPlanMatchType["ScreenView"] = "screen_view";
    DataPlanMatchType["CustomEvent"] = "custom_event";
    DataPlanMatchType["CrashReport"] = "crash_report";
    DataPlanMatchType["OptOut"] = "opt_out";
    DataPlanMatchType["FirstRun"] = "first_run";
    DataPlanMatchType["ApplicationStateTransition"] = "application_state_transition";
    DataPlanMatchType["NetworkPerformance"] = "network_performance";
    DataPlanMatchType["Breadcrumb"] = "breadcrumb";
    DataPlanMatchType["Profile"] = "profile";
    DataPlanMatchType["Commerce"] = "commerce";
    DataPlanMatchType["UserAttributeChange"] = "user_attribute_change";
    DataPlanMatchType["UserIdentityChange"] = "user_identity_chagne";
    DataPlanMatchType["Uninstall"] = "uninstall";
    DataPlanMatchType["Media"] = "media";
    // Data Planning Specific
    DataPlanMatchType["UserAttributes"] = "user_attributes";
    DataPlanMatchType["UserIdentities"] = "user_identities";
    DataPlanMatchType["ProductAction"] = "product_action";
    DataPlanMatchType["PromotionAction"] = "promotion_action";
    DataPlanMatchType["ProductImpression"] = "product_impression";
})(DataPlanMatchType = exports.DataPlanMatchType || (exports.DataPlanMatchType = {}));
var MessageType;
(function (MessageType) {
    MessageType["Unknown"] = "unknown";
    MessageType["SessionStart"] = "session_start";
    MessageType["SessionEnd"] = "session_end";
    MessageType["ScreenView"] = "screen_view";
    MessageType["CustomEvent"] = "custom_event";
    MessageType["CrashReport"] = "crash_report";
    MessageType["OptOut"] = "opt_out";
    MessageType["FirstRun"] = "first_run";
    MessageType["ApplicationStateTransition"] = "application_state_transition";
    MessageType["NetworkPerformance"] = "network_performance";
    MessageType["Breadcrumb"] = "breadcrumb";
    MessageType["Profile"] = "profile";
    MessageType["Commerce"] = "commerce_event";
    MessageType["UserAttributeChange"] = "user_attribute_change";
    MessageType["UserIdentityChange"] = "user_identity_chagne";
    MessageType["Uninstall"] = "uninstall";
    MessageType["Media"] = "media";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var EventType;
(function (EventType) {
    EventType["Unknown"] = "unknown";
    EventType["Navigation"] = "navigation";
    EventType["Location"] = "location";
    EventType["Search"] = "search";
    EventType["Transaction"] = "transaction";
    EventType["UserContent"] = "user_content";
    EventType["UserPreference"] = "user_preference";
    EventType["Social"] = "social";
    EventType["Other"] = "other";
    EventType["Media"] = "media";
})(EventType = exports.EventType || (exports.EventType = {}));
var DataPlanValidatorType;
(function (DataPlanValidatorType) {
    DataPlanValidatorType["Unknown"] = "unknown";
    DataPlanValidatorType["JSONSchema"] = "json_schema";
})(DataPlanValidatorType = exports.DataPlanValidatorType || (exports.DataPlanValidatorType = {}));
});

unwrapExports(types);
var types_1 = types.ActivatedEnvironment;
var types_2 = types.DataPlanMatchType;
var types_3 = types.MessageType;
var types_4 = types.EventType;
var types_5 = types.DataPlanValidatorType;

var dist = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(validation_error_type);
__export(validation_result_event);
__export(types);
});

unwrapExports(dist);
var dist_1 = dist.DataPlanMatchType;

var MPObjectiveC = /** @class */ (function () {
    function MPObjectiveC() {
        var _this = this;
        this.createSessionStartSnippet = function (exampleJSON) {
            return '[[MParticle sharedInstance] beginSession];';
        };
        this.createSessionEndSnippet = function (exampleJSON) {
            return '[[MParticle sharedInstance] endSession];';
        };
        this.createCrashReportSnippet = function (exampleJSON) {
            return "[[MParticle sharedInstance] logException:" + exampleJSON['exception_name'] + " topmostContext:self];\n";
        };
        this.createOptOutSnippet = function (exampleJSON) {
            return '[MParticle sharedInstance].optOut = true;\n';
        };
        this.createFirstRunSnippet = function (exampleJSON) {
            return 'First Run is not manually called\n';
        };
        this.createApplicationStateTransitionSnippet = function (exampleJSON) {
            return 'Application State Transition is not manually called\n';
        };
        this.createNetworkPerformanceSnippet = function (exampleJSON) {
            return '[[MParticle sharedInstance] logNetworkPerformance:' +
                exampleJSON['event_name'] +
                ' httpMethod: ' +
                exampleJSON['http_method'] +
                ' startTime: ' +
                exampleJSON['start_time'] +
                ' duration: ' +
                exampleJSON['duration'] +
                ' bytesSent: ' +
                exampleJSON['bytes_sent'] +
                ' bytesReceived: ' +
                exampleJSON['bytes_received'] +
                '];\n';
        };
        this.createUserAttributesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userAttributes(exampleJSON) : '';
        };
        this.createUserIdentitiesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userIdentities(exampleJSON['user_identities']) : '';
        };
        this.createProductActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            return "    MPProduct *product = [[MPProduct alloc] initWithName:@\"" + data['product_name'] + "\" sku:@\"" + data['product_sku'] + "\" quantity:@" + data['product_quantity'] + " price:@" + data['product_price'] + "];\n    [[MPCommerceEvent alloc] initWithAction:MPCommerceEventAction" + exampleJSON['product_action'] + " product:product]\n    [[MParticle sharedInstance] logEvent:commerceEvent];\n        ";
        };
    }
    MPObjectiveC.prototype.createScreenViewSnippet = function (_a) {
        var data = _a.data;
        var returnString = '';
        var eventInfo = 'nil';
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(data['custom_attributes']);
            eventInfo = 'eventInfo';
        }
        returnString += "[[MParticle sharedInstance] logScreen:@\"" + data['screen_name'] + "\" eventInfo: " + eventInfo + "];";
        return returnString + '\n';
    };
    MPObjectiveC.prototype.createCustomEventSnippet = function (_a) {
        var data = _a.data;
        var customEventType = data['custom_event_type'];
        var typeString = this.stringEventType(customEventType);
        var returnString = "MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"" + data['event_name'] + "\" type: " + typeString + "];\n";
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                    'customEvent.customAttributes = eventInfo;\n\n';
        }
        returnString += '[[MParticle sharedInstance] logEvent:customEvent];';
        return returnString + '\n';
    };
    MPObjectiveC.prototype.createBreadcrumbSnippet = function (_a) {
        var data = _a.data;
        var returnString = '';
        var eventInfo = 'nil';
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(data['custom_attributes']);
            eventInfo = 'eventInfo';
        }
        returnString += "[[MParticle sharedInstance] leaveBreadcrumb:" + data['event_name'] + " eventInfo: " + eventInfo + "];";
        return returnString + '\n';
    };
    MPObjectiveC.prototype.createProfileSnippet = function (exampleJSON) {
        return 'Profile Snippet is not manually called\n';
    };
    MPObjectiveC.prototype.createCommerceSnippet = function (exampleJSON) {
        return 'A generic commerce event should never be included in a data plan';
    };
    MPObjectiveC.prototype.createUserAttributeChangeSnippet = function (exampleJSON) {
        return 'A generic attribute change event should never be included in a data plan';
    };
    MPObjectiveC.prototype.createUserIdentityChangeSnippet = function (exampleJSON) {
        return 'A generic identity change event should never be included in a data plan';
    };
    MPObjectiveC.prototype.createUninstallSnippet = function (exampleJSON) {
        return 'Uninstall is not manually called\n';
    };
    MPObjectiveC.prototype.createMediaSnippet = function (exampleJSON) {
        return 'Media Events are not manually called\n';
    };
    MPObjectiveC.prototype.createProductImpressionSnippet = function (exampleJSON) {
        var returnString = '';
        var data = exampleJSON.data;
        returnString =
            'MPProduct *product = [[MPProduct alloc] initWithName:@"' +
                data['product_name'] +
                '" sku:@"' +
                data['product_sku'] +
                '" quantity:@' +
                data['product_quantity'] +
                ' price:@' +
                exampleJSON['product_price'] +
                '];\n';
        returnString =
            returnString +
                '[[MPCommerceEvent alloc] initWithImpressionName:@"' +
                data['impression_name'] +
                '" product:product];\n';
        returnString =
            returnString +
                '[[MParticle sharedInstance] logEvent:commerceEvent];\n';
        return returnString;
    };
    MPObjectiveC.prototype.customAttributesLines = function (customAttributesProperties) {
        var returnString = 'NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];\n';
        if (Object.keys(customAttributesProperties).length > 0) {
            var sampleCode = '';
            for (var property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(customAttributesProperties[property]);
                    sampleCode += "eventInfo[@\"" + property + "\"] = " + valueType + ";\n";
                }
            }
            returnString += sampleCode;
        }
        return returnString + '\n';
    };
    MPObjectiveC.prototype.userAttributes = function (userAttributesProperties) {
        var returnString = '';
        if (Object.keys(userAttributesProperties).length > 0) {
            for (var property in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(userAttributesProperties[property]);
                    returnString += "[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"" + property + "\" value:" + valueType + "];\n";
                }
            }
        }
        return returnString;
    };
    MPObjectiveC.prototype.userIdentities = function (userIdentitiesProperties) {
        var returnString = '';
        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (var property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(userIdentitiesProperties[property]);
                    returnString += "[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"" + property + "\" value:" + valueType + "];\n";
                }
            }
        }
        return returnString;
    };
    // tslint:disable-next-line: no-any
    MPObjectiveC.prototype.stringForValue = function (value) {
        if (value) {
            if (value === 'true') {
                return '@true';
            }
            else if (value === 'false') {
                return '@false';
            }
            else {
                return '@\"' + value + '\"';
            }
        }
        else if (value) {
            return '@' + value;
        }
        else if (value) {
            return value ? '@true' : '@false';
        }
        else {
            return '[NSNull null]';
        }
    };
    MPObjectiveC.prototype.stringEventType = function (value) {
        switch (value) {
            case 'navigation': {
                return 'MPEventTypeNavigation';
            }
            case 'location': {
                return 'MPEventTypeLocation';
            }
            case 'search': {
                return 'MPEventTypeSearch';
            }
            case 'transaction': {
                return 'MPEventTypeTransaction';
            }
            case 'user_content': {
                return 'MPEventTypeUserContent';
            }
            case 'user_preference': {
                return 'MPEventTypeUserPreference';
            }
            case 'social': {
                return 'MPEventTypeSocial';
            }
            case 'other': {
                return 'MPEventTypeOther';
            }
            case 'unknown': {
                return 'MPEventTypeMedia';
            }
            default: {
                return 'MPEventTypeOther';
            }
        }
    };
    return MPObjectiveC;
}());

var MPSwift = /** @class */ (function () {
    function MPSwift() {
        var _this = this;
        this.createProfileSnippet = function (exampleJSON) {
            return 'Profile Snippet is not manually called\n';
        };
        this.createCommerceSnippet = function (exampleJSON) {
            return 'A generic commerce event should never be included in a data plan';
        };
        this.createUserAttributeChangeSnippet = function (exampleJSON) {
            return 'A generic attribute change event should never be included in a data plan';
        };
        this.createUserIdentityChangeSnippet = function (exampleJSON) {
            return 'A generic identity change event should never be included in a data plan';
        };
        this.createUninstallSnippet = function (exampleJSON) {
            return 'Uninstall is not manually called\n';
        };
        this.createMediaSnippet = function (exampleJSON) {
            return 'Media Events are not manually called\n';
        };
        this.createUserAttributesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userAttributes(exampleJSON) : '';
        };
        this.createUserIdentitiesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userIdentities(exampleJSON['user_identities']) : '';
        };
        this.createProductActionSnippet = function (_a) {
            var data = _a.data;
            return "let product = MPProduct.init(name: \"" + data['product_name'] + "\", sku: \"" + data['product_sku'] + "\", quantity: " + data['product_quantity'] + ", price: " + data['product_price'] + ")\nlet commerceEvent = MPCommerceEvent.init(action: " + data['product_action'] + "', product: product)\nMParticle.sharedInstance().logEvent(commerceEvent)\n";
        };
        this.createProductImpressionSnippet = function (_a) {
            var data = _a.data;
            return "let product = MPProduct.init(name: \"" + data['product_name'] + "\", sku: \"" + data['product_sku'] + "\", quantity: " + data['product_quantity'] + ", price: " + data['product_price'] + ")\nlet commerceEvent = MPCommerceEvent.init(impressionName: \"" + data['impression_name'] + "\", product: product)\nMParticle.sharedInstance().logEvent(commerceEvent)\n";
        };
    }
    MPSwift.prototype.createSessionStartSnippet = function (exampleJSON) {
        return 'MParticle.sharedInstance().beginSession';
    };
    MPSwift.prototype.createSessionEndSnippet = function (exampleJSON) {
        return 'MParticle.sharedInstance().endSession';
    };
    MPSwift.prototype.createScreenViewSnippet = function (exampleJSON) {
        var returnString = '';
        var data = exampleJSON.data;
        if (data['custom_attributes']) {
            returnString = this.customAttributesLines(data['custom_attributes']);
            return (returnString +
                'MParticle.sharedInstance().logScreen("' +
                data['screen_name'] +
                '", eventInfo: eventInfo)\n');
        }
        else {
            return (returnString +
                'MParticle.sharedInstance().logScreen("' +
                data['screen_name'] +
                '", eventInfo: nil)\n');
        }
    };
    MPSwift.prototype.createCustomEventSnippet = function (exampleJSON) {
        var data = exampleJSON.data;
        var typeString = data['custom_event_type'];
        typeString = this.stringEventType(typeString);
        var returnString = 'let customEvent = MPEvent.init(name: "' +
            data['event_name'] +
            '", type: ' +
            typeString +
            ')\n';
        if (data['custom_attributes']) {
            returnString =
                returnString +
                    this.customAttributesLines(data['custom_attributes']);
            returnString =
                returnString + 'customEvent?.customAttributes = eventInfo\n\n';
        }
        return (returnString + 'MParticle.sharedInstance().logEvent(customEvent!)\n');
    };
    MPSwift.prototype.createCrashReportSnippet = function (exampleJSON) {
        return ('MParticle.sharedInstance().logException(' +
            exampleJSON['exception_name'] +
            ', topmostContext:self)\n');
    };
    MPSwift.prototype.createOptOutSnippet = function (exampleJSON) {
        return 'MParticle.sharedInstance().optOut = true\n';
    };
    MPSwift.prototype.createFirstRunSnippet = function (exampleJSON) {
        return 'First Run is not manually called\n';
    };
    MPSwift.prototype.createApplicationStateTransitionSnippet = function (exampleJSON) {
        return 'Application State Transition is not manually called\n';
    };
    MPSwift.prototype.createNetworkPerformanceSnippet = function (exampleJSON) {
        return ('MParticle.sharedInstance().logNetworkPerformance(' +
            exampleJSON['event_name'] +
            ', httpMethod: ' +
            exampleJSON['http_method'] +
            ', startTime: ' +
            exampleJSON['start_time'] +
            ', duration: ' +
            exampleJSON['duration'] +
            ', bytesSent: ' +
            exampleJSON['bytes_sent'] +
            ', bytesReceived: ' +
            exampleJSON['bytes_received'] +
            ')\n');
    };
    MPSwift.prototype.createBreadcrumbSnippet = function (exampleJSON) {
        if (exampleJSON['custom_attributes']) {
            var returnString = '';
            returnString =
                returnString +
                    this.customAttributesLines(exampleJSON['custom_attributes']);
            return (returnString +
                'MParticle.sharedInstance().leaveBreadcrumb(' +
                exampleJSON['event_name'] +
                ', eventInfo: eventInfo)\n');
        }
        return ('MParticle.sharedInstance().leaveBreadcrumb(' +
            exampleJSON['event_name'] +
            ', eventInfo: nil)\n');
    };
    MPSwift.prototype.customAttributesLines = function (customAttributesProperties) {
        var eventInfoString = 'let eventInfo = [String: Any].init()\n';
        if (Object.keys(customAttributesProperties).length > 0) {
            var sampleCode = 'var eventInfo = [String: Any].init()\n';
            for (var property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    var value = this.stringForValue(customAttributesProperties[property]);
                    sampleCode +=
                        'eventInfo["' + property + '"] = ' + value + '\n';
                }
            }
            eventInfoString = sampleCode;
        }
        return eventInfoString;
    };
    MPSwift.prototype.userAttributes = function (userAttributesProperties) {
        var returnString = [];
        if (Object.keys(userAttributesProperties).length > 0) {
            for (var key in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(key)) {
                    var value = this.stringForValue(userAttributesProperties[key]);
                    returnString.push("MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"" + key + "\", value: " + value + ")");
                }
            }
        }
        return returnString.join('\n') + '\n';
    };
    MPSwift.prototype.userIdentities = function (userIdentitiesProperties) {
        var returnString = [];
        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (var property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(userIdentitiesProperties[property]);
                    returnString.push("MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"" + property + "\", value: " + valueType + ")");
                }
            }
        }
        return returnString.join('\n') + '\n';
    };
    // tslint:disable-next-line: no-any
    MPSwift.prototype.stringForValue = function (value) {
        if (value) {
            if (value === 'true') {
                return value;
            }
            else if (value === 'false') {
                return value;
            }
            else {
                return '\"' + value + '\"';
            }
        }
        else if (value) {
            return value;
        }
        else if (value) {
            return value ? 'true' : 'false';
        }
        else {
            return 'NSNull.init()';
        }
    };
    // tslint:disable-next-line: no-any
    MPSwift.prototype.stringEventType = function (value) {
        switch (value) {
            case 'navigation': {
                return '.navigation';
            }
            case 'location': {
                return '.location';
            }
            case 'search': {
                return '.search';
            }
            case 'transaction': {
                return '.transaction';
            }
            case 'user_content': {
                return '.userContent';
            }
            case 'user_preference': {
                return '.userPreference';
            }
            case 'social': {
                return '.social';
            }
            case 'other': {
                return '.other';
            }
            case 'unknown': {
                return '.media';
            }
            default: {
                return '.other';
            }
        }
    };
    return MPSwift;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var MPAndroid = /** @class */ (function () {
    function MPAndroid() {
        var _this = this;
        this.nullabilityOperator = '';
        this.getMParticleInstanceSnippet = "MParticle.getInstance()";
        this.getIdentityInstanceSnippet = this.getMParticleInstanceSnippet + '.Identity()';
        this.getMParticleInstanceToCallSnippet = function () { return _this.getMParticleInstanceSnippet + _this.nullabilityOperator; };
        this.getIdentityInstanceToCallSnippet = function () { return _this.getMParticleInstanceToCallSnippet() + '.Identity()' + _this.nullabilityOperator; };
        this.getCurrentUserInstanceSnippet = function () { return _this.getIdentityInstanceToCallSnippet() + '.' + _this.getCurrentUser; };
        this.createSessionStartSnippet = function (exampleJSON) {
            return '//Android Sessions will automatically be started when an Event is logged';
        };
        this.createSessionEndSnippet = function (exampleJSON) {
            return '//Android Sessions will automatically end after a timeout';
        };
        this.createFirstRunSnippet = function (exampleJSON) {
            return '//First Run is not manually called';
        };
        this.createApplicationStateTransitionSnippet = function (exampleJSON) {
            return '//Application State Transition is not manually called';
        };
        this.createProfileSnippet = function (exampleJSON) {
            return '//Profile Snippet is not manually called';
        };
        this.createCommerceSnippet = function (exampleJSON) {
            return '//A generic commerce event should never be included in a data plan';
        };
        this.createUserAttributeChangeSnippet = function (exampleJSON) {
            return '//A generic attribute change event should never be included in a data plan';
        };
        this.createUserIdentityChangeSnippet = function (exampleJSON) {
            return '//A generic identity change event should never be included in a data plan';
        };
        this.createUninstallSnippet = function (exampleJSON) {
            return '//Uninstall is not manually called\n';
        };
        this.createMediaSnippet = function (exampleJSON) {
            return '//Media Events are not manually called';
        };
        this.createOptOutSnippet = function (exampleJSON) {
            return _this.getMParticleInstanceToCallSnippet() + '.setOptOut(true)' + _this.endStatement;
        };
    }
    MPAndroid.prototype.createBreadcrumbSnippet = function (data) {
        var eventName = this.stringForValue(data['event_name']);
        return this.getMParticleInstanceToCallSnippet() + '.leaveBreadcrumb(' + eventName + ')' + this.endStatement;
    };
    MPAndroid.prototype.createCustomEventSnippet = function (data) {
        var eventType = "MParticle.EventType." + this.capitalize(data['custom_event_type']);
        var eventName = this.stringForValue(data['event_name']);
        var attributes = this.getMapSnippet(data['custom_attributes'], 'Map<String, String>', 'attributes');
        var snippet = '';
        if (attributes) {
            snippet = attributes;
        }
        return snippet + this.getDeclareVariableSnippet('MPEvent', 'event') + ' = ' + this.getCreateInstanceSnippet('MPEvent.Builder') + '(' + eventName + ', ' + eventType + ')' +
            (attributes ? '\n' + MPAndroid.tab + '.customAttributes(attributes)' : '') +
            '\n' + MPAndroid.tab + '.build()' + this.endStatement + '\n' +
            this.getMParticleInstanceToCallSnippet() + '.logEvent(event)' + this.endStatement;
    };
    MPAndroid.prototype.createUserIdentitiesSnippet = function (data) {
        var userIdentities = [];
        if (data && Object.keys(data).length > 0) {
            for (var key in data) {
                userIdentities['MParticle.IdentityType.' + this.capitalize(key)] = data[key];
            }
            var userIdentitieSnippet = this.getMapSnippet(userIdentities, 'Map<MParticle.IdentityType, String>', 'userIdentities', false);
            return userIdentitieSnippet +
                this.getDeclareVariableSnippet('IdentityApiRequest', 'request') + ' = IdentityApiRequest.withEmptyUser()\n' +
                MPAndroid.tab + '.userIdentities(userIdentities)\n' +
                MPAndroid.tab + '.build()' + this.endStatement + '\n' +
                this.getIdentityInstanceToCallSnippet() + '.identify(request)' + this.endStatement;
        }
        else {
            return '';
        }
    };
    MPAndroid.prototype.createUserAttributesSnippet = function (data) {
        var attributes = this.getMapSnippet(data, 'Map<String, String>', 'attributes');
        if (attributes) {
            return attributes +
                this.getDeclareVariableSnippet('MParticleUser', 'user') + ' = ' + this.getCurrentUserInstanceSnippet() + this.endStatement + '\n' +
                'user' + this.nullabilityOperator + '.setUserAttributes(attributes)' + this.endStatement;
        }
        return '';
    };
    MPAndroid.prototype.createScreenViewSnippet = function (data) {
        var screenName = this.stringForValue(data['screen_name']);
        var attributes = this.getMapSnippet(data['custom_attributes'], 'Map<String, String>', 'attributes');
        var snippet = '';
        if (attributes) {
            snippet = attributes;
        }
        return snippet +
            this.getMParticleInstanceToCallSnippet() + '.logScreen(' + screenName + (attributes ? (', attributes') : '') + ')' + this.endStatement;
    };
    MPAndroid.prototype.createCrashReportSnippet = function (data) {
        var message = this.stringForValue(data['exception_name']);
        var attributes = this.getMapSnippet(data['custom_attributes'], "Map<String, String>", "eventData");
        var snippet = '';
        if (attributes) {
            snippet = attributes;
        }
        return snippet += this.getDeclareVariableSnippet("Exception") + ' = ' + this.getCreateInstanceSnippet("Exception") + '()' + this.endStatement + MPAndroid.tab + '//replace this with your exception\n' +
            this.getMParticleInstanceToCallSnippet() + '.logException(exception, ' + (attributes ? 'eventData' : 'null') + ', ' + message + ')' + this.endStatement;
    };
    MPAndroid.prototype.createNetworkPerformanceSnippet = function (exampleJSON) {
        var eventName = this.stringForValue(exampleJSON['event_name']);
        var startTime = exampleJSON['start_time'];
        var httpMethod = this.stringForValue(exampleJSON['http_method']);
        var duration = exampleJSON['duration'];
        var bytesSent = exampleJSON['bytes_sent'];
        var bytesReceived = exampleJSON['bytes_received'];
        var responseCode = this.stringForValue(exampleJSON['response_code']);
        return (this.getMParticleInstanceToCallSnippet() + '.logNetworkPerformance(' +
            eventName + ', ' +
            startTime + ', ' +
            httpMethod + ', ' +
            duration + ', ' +
            bytesSent + ', ' +
            bytesReceived + ', ' +
            '"{REQUEST-STRING}", ' +
            responseCode + ')' + this.endStatement);
    };
    MPAndroid.prototype.createProductActionSnippet = function (data) {
        var name = data['product_name'];
        var sku = data['product_sku'];
        var quantity = data['product_quantity'];
        var price = data['product_price'];
        var productAction = data['product_action'];
        return this.getDeclareVariableSnippet('Product') + ' = ' + this.getCreateInstanceSnippet('Product.Builder') +
            '(' + name + ', ' + sku + ', ' + price + ')\n' +
            MPAndroid.tab + '.quantity(' + quantity + ')\n' +
            MPAndroid.tab + '.build()' + this.endStatement + '\n' +
            this.getDeclareVariableSnippet('CommerceEvent') + ' = ' + this.getCreateInstanceSnippet('CommerceEvent.Builder') +
            '(' + productAction + ', product)' + this.endStatement + '\n' +
            this.getMParticleInstanceToCallSnippet() + '.logEvent(commerceEvent)' + this.endStatement;
    };
    MPAndroid.prototype.createProductImpressionSnippet = function (exampleJSON) {
        throw new Error("Method not implemented.");
    };
    MPAndroid.prototype.stringForValue = function (value) {
        if (value) {
            return "\"" + value + "\"";
        }
        else if (value) {
            return value;
        }
        else if (value) {
            return value ? 'true' : 'false';
        }
        else {
            return 'nil';
        }
    };
    MPAndroid.prototype.capitalize = function (value) {
        if (value.length > 1) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            return value.toUpperCase();
        }
    };
    MPAndroid.prototype.camelCase = function (value) {
        if (value.length > 1) {
            return value.charAt(0).toLowerCase() + value.slice(1);
        }
        else {
            return value.toLowerCase();
        }
    };
    MPAndroid.tab = '    ';
    return MPAndroid;
}());

var MPKotlin = /** @class */ (function (_super) {
    __extends(MPKotlin, _super);
    function MPKotlin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getDeclareVariableSnippet = function (type, name) { return 'val ' + (name ? name : _this.camelCase(type)); };
        _this.getCreateInstanceSnippet = function (type) { return type; };
        _this.nullabilityOperator = '?';
        _this.endStatement = '';
        _this.getCurrentUser = 'currentUser';
        return _this;
    }
    MPKotlin.prototype.getMapSnippet = function (dictionary, type, variableName, wrapKeysInQuotes) {
        if (wrapKeysInQuotes === void 0) { wrapKeysInQuotes = true; }
        if (dictionary && Object.keys(dictionary).length > 0) {
            var snippet = [];
            if (variableName) {
                snippet.push('val ' + variableName + ' = mapOf(');
            }
            for (var key in dictionary) {
                var keySnippet = key;
                if (wrapKeysInQuotes) {
                    keySnippet = '"' + key + '"';
                }
                snippet.push('\n' + MPKotlin.tab + keySnippet + ' to ' + this.stringForValue(dictionary[key]));
                snippet.push(',');
            }
            snippet.pop();
            snippet.push('\n)');
            snippet.push('\n');
            return snippet.join('');
        }
        return null;
    };
    return MPKotlin;
}(MPAndroid));

var MPJava = /** @class */ (function (_super) {
    __extends(MPJava, _super);
    function MPJava() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nullabilityOperator = '';
        _this.getCurrentUser = 'getCurrentUser()';
        _this.getDeclareVariableSnippet = function (type, name) {
            return type + ' ' + (name ? name : _this.camelCase(type));
        };
        _this.getCreateInstanceSnippet = function (type) { return "new " + type; };
        _this.endStatement = ';';
        return _this;
    }
    MPJava.prototype.getMapSnippet = function (dictionary, type, variableName, wrapKeysInQuotes) {
        if (wrapKeysInQuotes === void 0) { wrapKeysInQuotes = true; }
        if (dictionary && Object.keys(dictionary).length > 0) {
            var snippet = [];
            snippet.push(type + ' ' + variableName + ' = new HashMap<>();');
            for (var key in dictionary) {
                var keySnippet = key;
                if (wrapKeysInQuotes) {
                    keySnippet = '"' + key + '"';
                }
                snippet.push('\n' + variableName + '.put(' + keySnippet + ', ' + this.stringForValue(dictionary[key]) + ');');
            }
            snippet.push('\n');
            return snippet.join('');
        }
        return null;
    };
    return MPJava;
}(MPAndroid));

var MPJavaScript = /** @class */ (function () {
    function MPJavaScript() {
        var _this = this;
        this.createNetworkPerformanceSnippet = function (exampleJSON) {
            return 'Breadcrump snippet not available in JS\n';
        };
        this.createBreadcrumbSnippet = function (exampleJSON) {
            return 'Breadcrump snippet not available in JS\n';
        };
        this.createProfileSnippet = function (exampleJSON) {
            return 'Profile Snippet is not manually called\n';
        };
        this.createCommerceSnippet = function (exampleJSON) {
            return 'A generic commerce event should never be included in a data plan';
        };
        this.createUserAttributeChangeSnippet = function (exampleJSON) {
            return 'A generic attribute change event should never be included in a data plan';
        };
        this.createUserIdentityChangeSnippet = function (exampleJSON) {
            return 'A generic identity change event should never be included in a data plan';
        };
        this.createUninstallSnippet = function (exampleJSON) {
            return 'Uninstall is not manually called\n';
        };
        this.createMediaSnippet = function (exampleJSON) {
            return 'Media Events are not manually called\n';
        };
        this.createUserAttributesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userAttributes(exampleJSON) : '';
        };
        this.createUserIdentitiesSnippet = function (exampleJSON) {
            return exampleJSON ? _this.userIdentities(exampleJSON['user_identities']) : '';
        };
        // TODO: not yet supported
        this.createProductActionSnippet = function (_a) {
            var data = _a.data;
            return "        let product = mParticle.eCommerce.createProduct('" + data['product_name'] + "','" + data['product_sku'] + ", " + data['product_price'] + ", " + data['product_quantity'] + ")\n        mParticle.eCommerce.logProductAction('mParticle.ProductAction." + data['product_action'] + "', [product], attrs)\n        ";
        };
        // TODO: not yet supported
        this.createProductImpressionSnippet = function (_a) {
            var data = _a.data;
            return "    let product = mParticle.eCommerce.createProduct('" + data['product_name'] + "','" + data['product_sku'] + ", " + data['product_price'] + ", " + data['product_quantity'] + ")\n\n    let commerceEvent = MPCommerceEvent.init(impressionName: \"" + data['impression_name'] + "\", product: product)\n    MParticle.sharedInstance().logEvent(commerceEvent)\n";
        };
    }
    MPJavaScript.prototype.createSessionStartSnippet = function (exampleJSON) {
        return 'mParticle.startNewSession()';
    };
    MPJavaScript.prototype.createSessionEndSnippet = function (exampleJSON) {
        return 'mParticle.endSession()';
    };
    MPJavaScript.prototype.createScreenViewSnippet = function (exampleJSON) {
        var data = exampleJSON.data;
        var attributes, returnString;
        if (!data['screen_name']) {
            returnString = "mParticle.logPageView();";
            return returnString;
        }
        else {
            returnString = "mParticle.logPageView('" + data['screen_name'] + "'";
        }
        if (Object.keys(data['custom_attributes']).length) {
            attributes = this.customAttributesLines(data['custom_attributes']);
            returnString = attributes + "\n" + returnString + ", customAttributes)";
        }
        else {
            returnString += ")";
        }
        return returnString;
    };
    MPJavaScript.prototype.createCustomEventSnippet = function (exampleJSON) {
        var data = exampleJSON.data;
        var typeString = data['custom_event_type'];
        var attributes;
        typeString = this.stringEventType(typeString);
        var returnString = "mParticle.logEvent('" + data['event_name'] + "', mParticle.EventType." + typeString;
        if (Object.keys(data['custom_attributes']).length) {
            attributes = this.customAttributesLines(data['custom_attributes']);
            returnString = attributes + "\n" + returnString + ", customAttributes)";
        }
        else {
            returnString += ")";
        }
        return returnString;
    };
    MPJavaScript.prototype.createCrashReportSnippet = function (exampleJSON) {
        return ("mParticle.logError('" + exampleJSON['exception_name'] + "'");
    };
    MPJavaScript.prototype.createOptOutSnippet = function (exampleJSON) {
        return 'mParticle.setOptOut(true)\n';
    };
    MPJavaScript.prototype.createFirstRunSnippet = function (exampleJSON) {
        return 'First Run is not manually called\n';
    };
    MPJavaScript.prototype.createApplicationStateTransitionSnippet = function (exampleJSON) {
        return 'Application State Transition is not manually called\n';
    };
    MPJavaScript.prototype.customAttributesLines = function (customAttributesProperties) {
        var eventInfoString = '';
        if (Object.keys(customAttributesProperties).length > 0) {
            var sampleCode = 'let customAttributes = {';
            for (var property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    var value = this.stringForValue(customAttributesProperties[property]);
                    sampleCode +=
                        "\n    " + property + ": " + value + ",";
                }
            }
            sampleCode += "\n};";
            eventInfoString = sampleCode;
        }
        return eventInfoString;
    };
    MPJavaScript.prototype.userAttributes = function (userAttributesProperties) {
        var returnString = [];
        if (Object.keys(userAttributesProperties).length > 0) {
            for (var key in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(key)) {
                    var value = this.stringForValue(userAttributesProperties[key]);
                    returnString.push("mParticle.Identity.getCurrentUser().setUserAttribute(\"" + key + "\", " + value + ")");
                }
            }
        }
        return returnString.join('\n') + '\n';
    };
    // TODO: not yet supported
    MPJavaScript.prototype.userIdentities = function (userIdentitiesProperties) {
        // TODO: Not yet supported
        return '';
    };
    // tslint:disable-next-line: no-any
    MPJavaScript.prototype.stringForValue = function (value) {
        if (typeof (value) === 'string') {
            return "\"" + value + "\"";
        }
        else if (typeof (value) === 'number') {
            return value;
        }
        else if (typeof (value) === 'boolean') {
            return value ? true : false;
        }
        else {
            return null;
        }
    };
    // tslint:disable-next-line: no-any
    MPJavaScript.prototype.stringEventType = function (value) {
        switch (value) {
            case 'navigation': {
                return 'Navigation';
            }
            case 'location': {
                return 'Location';
            }
            case 'search': {
                return 'Search';
            }
            case 'transaction': {
                return 'Transaction';
            }
            case 'user_content': {
                return 'UserContent';
            }
            case 'user_preference': {
                return 'UserPreference';
            }
            case 'social': {
                return 'Social';
            }
            case 'other': {
                return 'Other';
            }
            case 'unknown': {
                return 'Media';
            }
            default: {
                return 'Other';
            }
        }
    };
    return MPJavaScript;
}());

var Language;
(function (Language) {
    Language[Language["JSON"] = 1] = "JSON";
    Language[Language["Swift"] = 2] = "Swift";
    Language[Language["ObjectiveC"] = 3] = "ObjectiveC";
    Language[Language["Kotlin"] = 4] = "Kotlin";
    Language[Language["Java"] = 5] = "Java";
    Language[Language["JavaScript"] = 6] = "JavaScript";
})(Language || (Language = {}));

var MPSnippets = /** @class */ (function () {
    function MPSnippets() {
    }
    MPSnippets.translateDataPlanJSON = function (dataPlanJSON, language) {
        var allExamples = "// The following is example code for every event in your Data Plan\n\n";
        var dataPlanPointArray = dataPlanJSON.version_document.data_points;
        allExamples = dataPlanPointArray.map(function (point, index) {
            if (point.match && point.validator) {
                var description = "";
                if (point.description) {
                    description = point.description;
                }
                var matchType = point.match.type;
                var jsonSchema = point.validator.definition;
                var validatorType = point.validator.type;
                var validator = { definition: jsonSchema, type: validatorType };
                var match = { type: matchType };
                var dataPlanPoint = { validator: validator, match: match };
                var resultString = MPSnippets.createSnippet(dataPlanPoint, language);
                return MPSnippets.getDataPlanPointString(description, resultString, index);
            }
            return '';
        }).join("");
        return allExamples;
    };
    MPSnippets.getDataPlanPointString = function (description, resultString, index) {
        return "// Data Plan Point " + (index + 1) + "\n// " + description + "\n" + resultString + "\n\n\n";
    };
    /**
     * Create a code snippet
     * @param dataPlanPoint An object representing an [[AdBreak]] (collection of ads)
     * @param language An object representing an [[AdBreak]] (collection of ads)
     * @category Advertising
     */
    MPSnippets.createSnippet = function (dataPlanPoint, language) {
        var _a, _b;
        var validatorJSON = (_a = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.validator) === null || _a === void 0 ? void 0 : _a.definition;
        jsf.option('alwaysFakeOptionals', true);
        var exampleJSON = jsf.generate(validatorJSON);
        if (language === Language.JSON) {
            return JSON.stringify(exampleJSON);
        }
        var translator = this.translatorForLanguage(language);
        switch ((_b = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.match) === null || _b === void 0 ? void 0 : _b.type) {
            case dist_1.Unknown: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
            case dist_1.SessionStart: {
                return translator.createSessionStartSnippet(exampleJSON);
            }
            case dist_1.SessionEnd: {
                return translator.createSessionEndSnippet(exampleJSON);
            }
            case dist_1.ScreenView: {
                return translator.createScreenViewSnippet(exampleJSON);
            }
            case dist_1.CustomEvent: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
            case dist_1.CrashReport: {
                return translator.createCrashReportSnippet(exampleJSON);
            }
            case dist_1.OptOut: {
                return translator.createOptOutSnippet(exampleJSON);
            }
            case dist_1.FirstRun: {
                return translator.createFirstRunSnippet(exampleJSON);
            }
            case dist_1.ApplicationStateTransition: {
                return translator.createApplicationStateTransitionSnippet(exampleJSON);
            }
            case dist_1.NetworkPerformance: {
                return translator.createNetworkPerformanceSnippet(exampleJSON);
            }
            case dist_1.Breadcrumb: {
                return translator.createBreadcrumbSnippet(exampleJSON);
            }
            case dist_1.Profile: {
                return translator.createProfileSnippet(exampleJSON);
            }
            case dist_1.Commerce: {
                return translator.createCommerceSnippet(exampleJSON);
            }
            case dist_1.UserAttributeChange: {
                return translator.createUserAttributeChangeSnippet(exampleJSON);
            }
            case dist_1.UserIdentityChange: {
                return translator.createUserIdentityChangeSnippet(exampleJSON);
            }
            case dist_1.Uninstall: {
                return translator.createUninstallSnippet(exampleJSON);
            }
            case dist_1.Media: {
                return translator.createMediaSnippet(exampleJSON);
            }
            case dist_1.UserAttributes: {
                return translator.createUserAttributesSnippet(exampleJSON);
            }
            case dist_1.UserIdentities: {
                return translator.createUserIdentitiesSnippet(exampleJSON);
            }
            case dist_1.ProductAction: {
                return translator.createProductActionSnippet(exampleJSON);
            }
            case dist_1.ProductImpression: {
                return translator.createProductImpressionSnippet(exampleJSON);
            }
            default: {
                return translator.createCustomEventSnippet(exampleJSON);
            }
        }
    };
    MPSnippets.translatorForLanguage = function (language) {
        switch (language) {
            case Language.Swift: {
                return new MPSwift();
            }
            case Language.ObjectiveC: {
                return new MPObjectiveC();
            }
            case Language.Kotlin: {
                return new MPKotlin();
            }
            case Language.Java: {
                return new MPJava();
            }
            case Language.JavaScript: {
                return new MPJavaScript();
            }
            default: {
                return new MPSwift();
            }
        }
    };
    return MPSnippets;
}());

exports.MPSnippets = MPSnippets;
