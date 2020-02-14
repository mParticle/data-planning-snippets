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
var ValidationErrorType;
(function (ValidationErrorType) {
    ValidationErrorType["Unknown"] = "unknown";
    ValidationErrorType["Unplanned"] = "unplanned";
    ValidationErrorType["MissingRequired"] = "missing_required";
    ValidationErrorType["InvalidValue"] = "invalid_value";
})(ValidationErrorType = exports.ValidationErrorType || (exports.ValidationErrorType = {}));
var ErrorType;
(function (ErrorType) {
    ErrorType["AdditionalItems"] = "additionalItems";
    ErrorType["AdditionalProperties"] = "additionalProperties";
    ErrorType["Const"] = "const";
    ErrorType["Dependencies"] = "dependencies";
    ErrorType["Enum"] = "enum";
    ErrorType["ExclusiveMaximum"] = "exclusiveMaximum";
    ErrorType["ExclusiveMinimum"] = "exclusiveMinimum";
    ErrorType["Format"] = "format";
    ErrorType["Maximum"] = "maximum";
    ErrorType["MaxLength"] = "maxLength";
    ErrorType["Minimum"] = "minimum";
    ErrorType["MinLength"] = "minLength";
    ErrorType["MultipleOf"] = "multipleOf";
    ErrorType["Pattern"] = "pattern";
    ErrorType["PatternProperties"] = "patternProperties";
    ErrorType["Required"] = "required";
    ErrorType["Type"] = "type";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
});

unwrapExports(validation_error_type);
var validation_error_type_1 = validation_error_type.ValidationErrorType;
var validation_error_type_2 = validation_error_type.ErrorType;

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

var Language;
(function (Language) {
    Language[Language["JSON"] = 1] = "JSON";
    Language[Language["Swift"] = 2] = "Swift";
    Language[Language["ObjectiveC"] = 3] = "ObjectiveC";
})(Language || (Language = {}));

var MPSnippets = /** @class */ (function () {
    function MPSnippets() {
    }
    /**
     * Create a code snippet
     * @param dataPlanPoint An object representing an [[AdBreak]] (collection of ads)
     * @param language An object representing an [[AdBreak]] (collection of ads)
     * @category Advertising
     */
    MPSnippets.createSnippet = function (dataPlanPoint, language) {
        var _a, _b, _c, _d;
        var validatorJSON = (_b = (_a = dataPlanPoint) === null || _a === void 0 ? void 0 : _a.validator) === null || _b === void 0 ? void 0 : _b.definition;
        jsf.option('alwaysFakeOptionals', true);
        var exampleJSON = jsf.generate(validatorJSON);
        if (language === Language.JSON) {
            return JSON.stringify(exampleJSON);
        }
        var translator = this.translatorForLanguage(language);
        switch ((_d = (_c = dataPlanPoint) === null || _c === void 0 ? void 0 : _c.match) === null || _d === void 0 ? void 0 : _d.type) {
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
            default: {
                return new MPSwift();
            }
        }
    };
    return MPSnippets;
}());

exports.MPSnippets = MPSnippets;
