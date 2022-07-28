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
            return exampleJSON ? _this.userIdentities(exampleJSON) : '';
        };
        this.createProductActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            var action = _this.commerceEventActionEnum(data['action']);
            var returnString = "MPProduct *product = [[MPProduct alloc] initWithName:@\"ProductName\" sku:@\"ProductId\" quantity:@1 price:@19.99];\nMPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithAction:" + action + " product:product];\n";
            if (data['custom_attributes']) {
                returnString +=
                    _this.customAttributesLines(data['custom_attributes']) +
                        'commerceEvent.customAttributes = eventInfo;\n\n';
            }
            returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
            return returnString + '\n';
        };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            var promotionAction = _this.promotionActionEnum(exampleJSON['action']);
            var returnString = "MPPromotion *promotion = [[MPPromotion alloc] init];\nMPPromotionContainer *promotionContainer = [[MPPromotionContainer alloc] initWithAction:" + promotionAction + " promotion:promotion];\nMPCommerceEvent *commerceEvent = [[MPCommerceEvent alloc] initWithPromotionContainer:promotionContainer];\n";
            if (data['custom_attributes']) {
                returnString +=
                    _this.customAttributesLines(data['custom_attributes']) +
                        'commerceEvent.customAttributes = eventInfo;\n\n';
            }
            returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
            return returnString + '\n';
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
    MPObjectiveC.prototype.commerceEventActionEnum = function (value) {
        if (value === 'add_to_cart') {
            return 'MPCommerceEventActionAddToCart';
        }
        else if (value === 'remove_from_cart') {
            return 'MPCommerceEventActionRemoveFromCart';
        }
        else if (value === 'add_to_wishlist') {
            return 'MPCommerceEventActionAddToWishList';
        }
        else if (value === 'remove_to_wishlist') {
            return 'MPCommerceEventActionRemoveFromWishlist';
        }
        else if (value === 'checkout') {
            return 'MPCommerceEventActionCheckout';
        }
        else if (value === 'checkout_options') {
            return 'MPCommerceEventActionCheckoutOptions';
        }
        else if (value === 'click') {
            return 'MPCommerceEventActionClick';
        }
        else if (value === 'view') {
            return 'MPCommerceEventActionViewDetail';
        }
        else if (value === 'purchase') {
            return 'MPCommerceEventActionPurchase';
        }
        else if (value === 'refund') {
            return 'MPCommerceEventActionRefund';
        }
        else {
            return 'MPCommerceEventActionAddToCart';
        }
    };
    MPObjectiveC.prototype.promotionActionEnum = function (value) {
        if (value === 'view') {
            return 'MPPromotionActionView';
        }
        else {
            return 'MPPromotionActionClick';
        }
    };
    MPObjectiveC.prototype.createProductImpressionSnippet = function (exampleJSON) {
        var data = exampleJSON.data;
        var returnString = "MPProduct *product = [[MPProduct alloc] initWithName:@\"ProductName\" sku:@\"ProductId\" quantity:@1 price:@19.99];\nMPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithImpressionName:@\"ImpressionName\" product:product];\n";
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                    'commerceEvent.customAttributes = eventInfo;\n\n';
        }
        returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
        return returnString + '\n';
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
            returnString += "NSMutableDictionary *attributes = [[NSMutableDictionary alloc] init];\n";
            for (var property in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(userAttributesProperties[property]);
                    returnString += "attributes[@\"" + property + "\"] = " + valueType + ";\n";
                }
            }
            returnString += "[[[MParticle sharedInstance].identity currentUser] setUserAttributes:attributes];\n";
        }
        return returnString;
    };
    MPObjectiveC.prototype.userIdentities = function (userIdentitiesProperties) {
        var returnString = '';
        if (Object.keys(userIdentitiesProperties).length > 0) {
            returnString += "MPIdentityApiRequest *request = [MPIdentityApiRequest requestWithEmptyUser];\n";
            for (var property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    var value = userIdentitiesProperties[property];
                    switch (property) {
                        case "customerid":
                            property = "CustomerId";
                            break;
                        case "facebookcustomaudienceid":
                            property = "FacebookCustomAudienceId";
                            break;
                        case "mobilenumber":
                            property = "MobileNumber";
                            break;
                        case "phonenumber2":
                            property = "PhoneNumber2";
                            break;
                        case "phonenumber3":
                            property = "PhoneNumber3";
                            break;
                        case "iosadvertiserid":
                            property = "IOSAdvertiserId";
                            break;
                        case "iosvendorid":
                            property = "IOSVendorId";
                            break;
                        case "pushtoken":
                            property = "PushToken";
                            break;
                        case "deviceapplicationstamp":
                            property = "DeviceApplicationStamp";
                            break;
                        default:
                            property = property.substring(0, 1).toUpperCase() + property.substring(1);
                            break;
                    }
                    returnString += "[request setIdentity:@\"" + value + "\" identityType:MPIdentity" + property + "];\n";
                }
            }
            returnString += "[[[MParticle sharedInstance] identity] identify:request completion:nil];\n";
        }
        return returnString;
    };
    // tslint:disable-next-line: no-any
    MPObjectiveC.prototype.stringForValue = function (value) {
        if (typeof (value) === 'string') {
            return '@\"' + value + '\"';
        }
        else if (typeof (value) === 'number') {
            return '@' + value;
        }
        else if (typeof (value) === 'boolean') {
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
            return exampleJSON ? _this.userIdentities(exampleJSON) : '';
        };
        this.createProductActionSnippet = function (_a) {
            var data = _a.data;
            var actionString = data['product_action'];
            actionString = _this.commerceEventActionEnum(actionString);
            var returnString = "let product = MPProduct.init(name: \"productName\", sku: \"productId\", quantity: 1, price: 19.99)\nlet commerceEvent = MPCommerceEvent.init(action: " + actionString + ", product: product)\n";
            if (data['custom_attributes']) {
                returnString =
                    returnString +
                        _this.customAttributesLines(data['custom_attributes']);
                returnString =
                    returnString + 'commerceEvent.customAttributes = eventInfo\n\n';
            }
            return (returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n');
        };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            var promotionAction = _this.promotionActionEnum(exampleJSON['action']);
            var returnString = "let promotion = MPPromotion.init()\nlet promotionContainer = MPPromotionContainer.init(action: " + promotionAction + ", promotion: promotion)\nlet commerceEvent = MPCommerceEvent.init(promotionContainer: promotionContainer)\n";
            if (data['custom_attributes']) {
                returnString +=
                    _this.customAttributesLines(data['custom_attributes']) +
                        'commerceEvent.customAttributes = eventInfo;\n\n';
            }
            return (returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n');
        };
        this.createProductImpressionSnippet = function (_a) {
            var data = _a.data;
            var returnString = "let product = MPProduct.init(name: \"productName\", sku: \"productId\", quantity: 1, price: 19.99)\nlet commerceEvent = MPCommerceEvent.init(impressionName: \"impressionName\", product: product)\n";
            if (data['custom_attributes']) {
                returnString =
                    returnString +
                        _this.customAttributesLines(data['custom_attributes']);
                returnString =
                    returnString + 'commerceEvent.customAttributes = eventInfo\n\n';
            }
            return (returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n');
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
    MPSwift.prototype.commerceEventActionEnum = function (value) {
        if (value === 'add_to_cart') {
            return '.addToCart';
        }
        else if (value === 'remove_from_cart') {
            return '.removeFromCart';
        }
        else if (value === 'add_to_wishlist') {
            return '.addToWishList';
        }
        else if (value === 'remove_to_wishlist') {
            return '.removeFromWishlist';
        }
        else if (value === 'checkout') {
            return '.checkout';
        }
        else if (value === 'checkout_options') {
            return '.checkoutOptions';
        }
        else if (value === 'click') {
            return '.click';
        }
        else if (value === 'view') {
            return '.viewDetail';
        }
        else if (value === 'purchase') {
            return '.purchase';
        }
        else if (value === 'refund') {
            return '.refund';
        }
        else {
            return '.addToCart';
        }
    };
    MPSwift.prototype.promotionActionEnum = function (value) {
        if (value === 'view') {
            return '.view';
        }
        else {
            return '.click';
        }
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
            if (Object.keys(userAttributesProperties).length == 1) {
                for (var key in userAttributesProperties) {
                    if (userAttributesProperties.hasOwnProperty(key)) {
                        var value = this.stringForValue(userAttributesProperties[key]);
                        returnString.push("MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"" + key + "\", value: " + value + ")");
                    }
                }
            }
            else {
                returnString.push("var attributes = [String: Any]()");
                for (var key in userAttributesProperties) {
                    if (userAttributesProperties.hasOwnProperty(key)) {
                        var value = this.stringForValue(userAttributesProperties[key]);
                        returnString.push("attributes[\"" + key + "\"] = " + value);
                    }
                }
                returnString.push("if let user = MParticle.sharedInstance().identity.currentUser {");
                returnString.push("    user.userAttributes = attributes");
                returnString.push("}");
            }
        }
        return returnString.join('\n') + '\n';
    };
    MPSwift.prototype.userIdentities = function (userIdentitiesProperties) {
        var returnString = [];
        if (Object.keys(userIdentitiesProperties).length > 0) {
            returnString.push("let request = MPIdentityApiRequest.withEmptyUser()");
            for (var type in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(type)) {
                    var value = this.stringForValue(userIdentitiesProperties[type]);
                    switch (type) {
                        case "customerid":
                            type = "customerId";
                            break;
                        case "facebookcustomaudienceid":
                            type = "facebookCustomAudienceId";
                            break;
                        case "mobilenumber":
                            type = "mobileNumber";
                            break;
                        case "phonenumber2":
                            type = "phoneNumber2";
                            break;
                        case "phonenumber3":
                            type = "phoneNumber3";
                            break;
                        case "iosadvertiserid":
                            type = "iosAdvertiserId";
                            break;
                        case "iosvendorid":
                            type = "iosVendorId";
                            break;
                        case "pushtoken":
                            type = "pushToken";
                            break;
                        case "deviceapplicationstamp":
                            type = "deviceApplicationStamp";
                            break;
                    }
                    returnString.push("request.setIdentity(" + value + ", identityType: ." + type + ")");
                }
            }
            returnString.push("MParticle.sharedInstance().identity.identify(request)");
        }
        return returnString.join('\n') + '\n';
    };
    // tslint:disable-next-line: no-any
    MPSwift.prototype.stringForValue = function (value) {
        if (typeof (value) === 'string') {
            return '\"' + value + '\"';
        }
        else if (typeof (value) === 'number') {
            return value;
        }
        else if (typeof (value) === 'boolean') {
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
        this.createProductActionSnippet = function (_a) {
            var data = _a.data;
            function capitalizeFirstLetter(word) {
                return "" + word.charAt(0).toUpperCase() + word.slice(1);
            }
            // ProductActionType comes in from data['action'] in snake case format, ie. add_to_cart, but for Web it needs to be TitleCase, ie. AddToCart
            var modifiedActionName = data['action'].split('_').map(function (word) {
                return capitalizeFirstLetter(word);
            }).join('');
            return "\nlet product = mParticle.eCommerce.createProduct('productName', 'productId', 19.199, 1)\nmParticle.eCommerce.logProductAction(mParticle.ProductActionType." + modifiedActionName + ", [product])\n        ";
        };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            return "Not currently supported by Javascript";
        };
        this.createProductImpressionSnippet = function (_a) {
            var data = _a.data;
            return "let product = mParticle.eCommerce.createProduct('productName', 'productId', 19.199, 1)\n\nvar impression = mParticle.eCommerce.createImpression('impressionName', product);\nmParticle.eCommerce.logImpression(impression);\n";
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
        if (data['custom_attributes'] && Object.keys(data['custom_attributes']).length) {
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
        if (data['custom_attributes'] && Object.keys(data['custom_attributes']).length) {
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
                    if (property.split(' ').length > 1) {
                        sampleCode +=
                            "\n    '" + property + "': " + value + ",";
                    }
                    else {
                        sampleCode +=
                            "\n    " + property + ": " + value + ",";
                    }
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

var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.stringForValue = function (value) {
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
    Utils.prototype.capitalize = function (value) {
        if (value.length > 1) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            return value.toUpperCase();
        }
    };
    Utils.prototype.camelCase = function (value) {
        if (value.length > 1) {
            return value.charAt(0).toLowerCase() + value.slice(1);
        }
        else {
            return value.toLowerCase();
        }
    };
    return Utils;
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var Statement = /** @class */ (function () {
    function Statement() {
        var expressions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expressions[_i] = arguments[_i];
        }
        this.expressions = expressions;
    }
    Statement.prototype.addComment = function (comment) {
        this.comment = comment;
        return this;
    };
    Statement.prototype.toSnippet = function (languageDecorator) {
        var expressionSnippet = this.expressions
            .map(function (x) { return [
            x.toSnippet(languageDecorator),
            languageDecorator.statementTerminator,
            (x.comment ? languageDecorator.tab + languageDecorator.commentDenoter + x.comment : '')
        ].join(''); })
            .join('\n');
        if (this.comment) {
            expressionSnippet += [
                languageDecorator.tab,
                languageDecorator.commentDenoter,
                this.comment,
            ].join('');
        }
        return expressionSnippet;
    };
    Statement.prototype.getExpressions = function () {
        return this.expressions;
    };
    return Statement;
}());

var CodeBlock = /** @class */ (function () {
    function CodeBlock() {
        this.statements = [];
    }
    CodeBlock.prototype.addStatement = function (expression, index) {
        if (expression) {
            var statement = new (Statement.bind.apply(Statement, __spreadArrays([void 0], expression.getExpressions())))();
            if (index) {
                this.statements.splice(index, 0, statement).join();
            }
            else {
                this.statements.push(statement);
            }
        }
        return this;
    };
    CodeBlock.prototype.addStatements = function (expression) {
        var _this = this;
        expression.forEach(function (x) { return _this.addStatement(x); });
        return this;
    };
    CodeBlock.prototype.toSnippet = function (languageDecorator) {
        return this.statements
            .map(function (x) { return x.toSnippet(languageDecorator); })
            .join('\n');
    };
    return CodeBlock;
}());

var Expression = /** @class */ (function () {
    function Expression() {
        this.chainedMethodCall = null;
    }
    Expression.prototype.addComment = function (comment) {
        this.comment = comment;
        return this;
    };
    Expression.prototype.getExpressions = function () {
        return [this];
    };
    Expression.prototype.addMethodCall = function (methodName, args, isNullable, forceSameLine) {
        if (args === void 0) { args = []; }
        if (isNullable === void 0) { isNullable = false; }
        if (forceSameLine === void 0) { forceSameLine = false; }
        if (this.chainedMethodCall != null) {
            this.chainedMethodCall.addMethodCall(methodName, args, isNullable, forceSameLine);
        }
        else {
            this.chainedMethodCall = new MethodCall(this, methodName, args, isNullable, forceSameLine);
        }
        return this;
    };
    Expression.prototype.addMethodCallSameLine = function (methodName, args, isNullable) {
        if (args === void 0) { args = []; }
        if (isNullable === void 0) { isNullable = false; }
        return this.addMethodCall(methodName, args, isNullable, true);
    };
    return Expression;
}());
var CallExpression = /** @class */ (function (_super) {
    __extends(CallExpression, _super);
    function CallExpression(receiver, args, isNullable) {
        if (args === void 0) { args = []; }
        if (isNullable === void 0) { isNullable = false; }
        var _this = _super.call(this) || this;
        _this.receiver = null;
        _this.args = [];
        _this.isNullable = false;
        _this.argsFormatted = false;
        _this.isStatic = false;
        if (typeof receiver == 'string') {
            _this.receiver = new Class(receiver);
        }
        else if (receiver) {
            _this.receiver = receiver;
        }
        args.forEach(function (i) {
            if (typeof i == 'object' && i != null && 'toArgumentSnippet' in i) {
                _this.args.push(i);
            }
            else {
                _this.args.push(new ValueExpression(i));
            }
        });
        var nullableReceiver = _this.receiver ? _this.receiver.isNullable : false;
        _this.isNullable = isNullable || nullableReceiver;
        return _this;
    }
    CallExpression.prototype.setArgsFormatted = function (argsFormatted) {
        this.argsFormatted = argsFormatted;
        return this;
    };
    CallExpression.prototype.toChainedSnippet = function (snippet, languageDecorator) {
        var _a, _b, _c;
        if (!this.chainedMethodCall || this.chainedMethodCall == null) {
            return snippet;
        }
        if (this.chainedMethodCall.forceSameLine) {
            snippet += languageDecorator.methodCallSnippet('', this.chainedMethodCall, this.isNullable, (_a = this.receiver) === null || _a === void 0 ? void 0 : _a.isStatic);
            return this.chainedMethodCall.toChainedSnippet(snippet, languageDecorator);
        }
        if (languageDecorator.canChainMethodCalls) {
            snippet += '\n' + languageDecorator.tab + languageDecorator.methodCallSnippet('', this.chainedMethodCall, this.isNullable, (_b = this.receiver) === null || _b === void 0 ? void 0 : _b.isStatic);
        }
        else {
            var receiverString = '';
            if (this.receiver != null) {
                receiverString = this.receiver.toReceiverString(languageDecorator);
            }
            snippet += '\n' + languageDecorator.methodCallSnippet(receiverString, this.chainedMethodCall, this.isNullable, (_c = this.receiver) === null || _c === void 0 ? void 0 : _c.isStatic);
        }
        return this.chainedMethodCall.toChainedSnippet(snippet, languageDecorator);
    };
    return CallExpression;
}(Expression));
var MethodCall = /** @class */ (function (_super) {
    __extends(MethodCall, _super);
    function MethodCall(receiver, methodName, args, nullable, forceSameLine) {
        if (args === void 0) { args = []; }
        if (nullable === void 0) { nullable = false; }
        if (forceSameLine === void 0) { forceSameLine = false; }
        var _this = _super.call(this, receiver, args, nullable) || this;
        _this.methodName = '';
        _this.binaryOperation = false;
        _this.methodName = methodName;
        _this.forceSameLine = forceSameLine;
        return _this;
    }
    MethodCall.prototype.toArgumentSnippet = function (langaugeDecorator) {
        return this.toSnippet(langaugeDecorator);
    };
    MethodCall.prototype.toSnippet = function (languageDecorator) {
        var _a;
        var receiverString = null;
        var nullableReceiver = false;
        if (this.receiver != null) {
            receiverString = this.receiver.toReceiverString(languageDecorator);
            nullableReceiver = this.receiver.isNullable;
        }
        return this.toChainedSnippet(languageDecorator.methodCallSnippet(receiverString, this, nullableReceiver, (_a = this.receiver) === null || _a === void 0 ? void 0 : _a.isStatic), languageDecorator);
    };
    MethodCall.prototype.toReceiverString = function (languageDecorator) {
        return this.toSnippet(languageDecorator);
    };
    //this might just be a kotlin thing
    MethodCall.prototype.setBinaryOperationIfPossible = function (binaryOperation) {
        this.binaryOperation = binaryOperation;
        return this;
    };
    return MethodCall;
}(CallExpression));
var Constructor = /** @class */ (function (_super) {
    __extends(Constructor, _super);
    function Constructor(type, args, forceSameLine) {
        if (args === void 0) { args = []; }
        if (forceSameLine === void 0) { forceSameLine = false; }
        var _this = _super.call(this, new Class(type), args, false) || this;
        _this.type = new Class(type);
        _this.forceSameLine = forceSameLine;
        return _this;
    }
    Constructor.prototype.toArgumentSnippet = function (language) {
        return this.toSnippet(language);
    };
    Constructor.prototype.setGenerics = function () {
        var _a;
        var generics = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            generics[_i] = arguments[_i];
        }
        (_a = this.type).setGenerics.apply(_a, generics);
        return this;
    };
    Constructor.prototype.toSnippet = function (languageDecorator) {
        return this.toChainedSnippet(languageDecorator.constructorSnippet(this.type, this.args, this.argsFormatted), languageDecorator);
    };
    Constructor.prototype.toReceiverString = function (languageDecorator) {
        return this.toSnippet(languageDecorator);
    };
    return Constructor;
}(CallExpression));
var ValueExpression = /** @class */ (function (_super) {
    __extends(ValueExpression, _super);
    function ValueExpression(value, isString) {
        if (isString === void 0) { isString = true; }
        var _this = _super.call(this) || this;
        _this.isStatic = false;
        _this.forceSameLine = false;
        _this.isNullable = _this.value == null;
        _this.value = value;
        _this.isString = isString;
        return _this;
    }
    ValueExpression.prototype.toSnippet = function (languageDecorator) {
        return this.toArgumentSnippet(languageDecorator);
    };
    ValueExpression.prototype.toArgumentSnippet = function (language) {
        var _a;
        if (this.isString && typeof this.value == 'string') {
            return language.stringDenoter + this.value + language.stringDenoter;
        }
        else if (this.value == null) {
            return language.nullValue;
        }
        else {
            return (_a = this.value) === null || _a === void 0 ? void 0 : _a.toString();
        }
    };
    ValueExpression.prototype.toReceiverString = function (langaugeDecorator) {
        return this.toArgumentSnippet(langaugeDecorator);
    };
    return ValueExpression;
}(Expression));
var Class = /** @class */ (function (_super) {
    __extends(Class, _super);
    function Class(className) {
        var _this = _super.call(this) || this;
        _this.generics = [];
        _this.forceSameLine = true;
        _this.isNullable = false;
        _this.isStatic = true;
        _this.className = className;
        return _this;
    }
    Class.prototype.setGenerics = function () {
        var generics = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            generics[_i] = arguments[_i];
        }
        this.generics = generics;
        return this;
    };
    Class.prototype.toSnippet = function (languageDecorator) {
        if (languageDecorator.usesGenerics) {
            return languageDecorator.getGenericClassDeclaration.apply(languageDecorator, __spreadArrays([this.className], this.generics));
        }
        else {
            return this.className;
        }
    };
    Class.prototype.toReceiverString = function (languageDecorator) {
        return this.toSnippet(languageDecorator);
    };
    return Class;
}(Expression));
var Variable = /** @class */ (function (_super) {
    __extends(Variable, _super);
    function Variable(type, variableName, forceSameLine, isNullable) {
        if (forceSameLine === void 0) { forceSameLine = true; }
        var _this = _super.call(this) || this;
        _this.generics = [];
        _this.methodCalls = [];
        _this.forceExplicitType = false;
        _this.isNullable = false;
        _this.isStatic = false;
        _this.explicitlySetNullability = false;
        _this.utils = new Utils();
        if (typeof type == 'string') {
            _this.type = new Class(type);
        }
        else {
            _this.type = type;
        }
        _this.variableName = variableName != null ? variableName : _this.utils.camelCase(_this.type.className);
        _this.forceSameLine = forceSameLine;
        if (isNullable) {
            // this.explicitlySetNullability = true;
            _this.isNullable = isNullable;
        }
        return _this;
    }
    //adds a no-arg constructor invokation for Class this.type.className
    Variable.prototype.addDefaultInitializer = function (constructorFunction) {
        var constructor = new Constructor(this.type.className);
        constructorFunction === null || constructorFunction === void 0 ? void 0 : constructorFunction(constructor);
        this.initialization = constructor;
        return this;
    };
    Variable.prototype.setGenerics = function () {
        var _a;
        var generics = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            generics[_i] = arguments[_i];
        }
        (_a = this.type).setGenerics.apply(_a, generics);
        return this;
    };
    Variable.prototype.setForceExplicitType = function (forceExplicitType) {
        this.forceExplicitType = forceExplicitType;
        return this;
    };
    Variable.prototype.initializer = function (initializer) {
        if (!(initializer instanceof CallExpression)) {
            this.initialization = new ValueExpression(this.initialization);
        }
        else {
            this.initialization = initializer;
        }
        if (!this.explicitlySetNullability) {
            this.isNullable = initializer.isNullable;
        }
        return this;
    };
    Variable.prototype.addMethodCall = function (methodName, args, nullable) {
        if (args === void 0) { args = []; }
        if (nullable === void 0) { nullable = false; }
        this.methodCalls.push(new MethodCall(this, methodName, args, nullable));
        return this;
    };
    Variable.prototype.createMethodCall = function (methodName, args, nullable) {
        if (args === void 0) { args = []; }
        if (nullable === void 0) { nullable = false; }
        return new MethodCall(this, methodName, args, nullable);
    };
    Variable.prototype.toSnippet = function (languageDecorator) {
        var initializationSnippet = languageDecorator.variableDeclarationSnippet(this.type, this.variableName, this.initialization == null);
        if (this.initialization != null) {
            initializationSnippet += ' ' + languageDecorator.assignmentOperator + ' ' + this.initialization.toSnippet(languageDecorator);
        }
        return initializationSnippet;
    };
    Variable.prototype.toReceiverString = function (languageDecorator) {
        return this.variableName;
    };
    Variable.prototype.toArgumentSnippet = function (languageDecorator) {
        return this.variableName;
    };
    Variable.prototype.getExpressions = function () {
        return [this].concat(this.methodCalls);
    };
    return Variable;
}(Expression));

var MPAndroid = /** @class */ (function () {
    function MPAndroid(language) {
        var _this = this;
        this.utils = new Utils();
        this.mparticleGetInstance = function () { return new MethodCall('MParticle', 'getInstance', [], true, true); };
        this.getIdentityInstanceToCallSnippet = function () { return _this.mparticleGetInstance().addMethodCallSameLine("Identity"); };
        this.getCurrentUserInstanceSnippet = function () { return _this.getIdentityInstanceToCallSnippet().addMethodCallSameLine("getCurrentUser"); };
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
            return _this.mparticleGetInstance()
                .addMethodCall('setOptOutTrue', [], true)
                .toSnippet(_this.language);
        };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            return "Not currently supported by Android";
        };
        this.language = language;
    }
    MPAndroid.prototype.createBreadcrumbSnippet = function (properties) {
        var eventName = properties['event_name'];
        return this.mparticleGetInstance()
            .addMethodCall('leaveBreadcrumb', [eventName])
            .toSnippet(this.language);
    };
    MPAndroid.prototype.createCustomEventSnippet = function (properties) {
        var _a, _b;
        var data = properties.data;
        var eventType = "MParticle.EventType." + this.utils.capitalize(data['custom_event_type']);
        var eventName = data['event_name'];
        var attributes = data['custom_attributes'];
        var codeBlock = new CodeBlock();
        var eventVariable = new Variable('MPEvent', 'event')
            .initializer(new Constructor('MPEvent.Builder', [eventName, new ValueExpression(eventType, false)]));
        var attributeVariable;
        if (attributes) {
            attributeVariable = new Variable('Map', "attributes")
                .setGenerics('String', 'String');
            this.language.dictionaryInitializer(attributeVariable, attributes, true);
            (_a = eventVariable.initialization) === null || _a === void 0 ? void 0 : _a.addMethodCall('customAttributes', [attributeVariable]);
            codeBlock
                .addStatement(attributeVariable);
        }
        (_b = eventVariable.initialization) === null || _b === void 0 ? void 0 : _b.addMethodCall('build');
        var logEvent = this.mparticleGetInstance().addMethodCallSameLine("logEvent", [eventVariable], true);
        return codeBlock
            .addStatement(eventVariable)
            .addStatement(logEvent)
            .toSnippet(this.language);
    };
    MPAndroid.prototype.createUserIdentitiesSnippet = function (data) {
        var userIdentities = [];
        if (data && Object.keys(data).length > 0) {
            for (var key in data) {
                switch (key) {
                    case "ios_idfv": break; //ignore
                    case "customerid":
                        userIdentities['MParticle.IdentityType.CustomerId'] = data[key];
                        break;
                    case "facebookcustomaudienceid":
                        userIdentities['MParticle.IdentityType.FacebookCustomAudienceId'] = data[key];
                        break;
                    case "mobilenumber":
                        userIdentities['MParticle.IdentityType.MobileNumber'] = data[key];
                        break;
                    case "phonenumber2":
                        userIdentities['MParticle.IdentityType.PhoneNumber2'] = data[key];
                        break;
                    case "phonenumber3":
                        userIdentities['MParticle.IdentityType.PhoneNumber3'] = data[key];
                        break;
                    default:
                        userIdentities['MParticle.IdentityType.' + this.utils.capitalize(key)] = data[key];
                        break;
                }
            }
            var userIdentitiesVariable = new Variable('Map', 'userIdentities')
                .setGenerics('MParticle.IdentityType', 'String');
            var userIdentitieSnippet = this.language.dictionaryInitializer(userIdentitiesVariable, userIdentities, false);
            var identityRequestVariable = new Variable('IdentityApiRequest', 'request')
                .initializer(new MethodCall('IdentityApiRequest', 'withEmptyUser')
                .addMethodCall('userIdentities', [userIdentitiesVariable])
                .addMethodCall('build'));
            var identifyMethodCall = this.mparticleGetInstance()
                .addMethodCallSameLine('Identity')
                .addMethodCallSameLine('identify', [identityRequestVariable]);
            return new CodeBlock()
                .addStatement(userIdentitiesVariable)
                .addStatement(identityRequestVariable)
                .addStatement(identifyMethodCall)
                .toSnippet(this.language);
        }
        else {
            return '';
        }
    };
    MPAndroid.prototype.createUserAttributesSnippet = function (customAttribteus) {
        if (customAttribteus && Object.keys(customAttribteus).length > 0) {
            var attributesVariable = new Variable('Map', 'attributes')
                .setGenerics('String, String');
            var attributesStatement = this.language.dictionaryInitializer(attributesVariable, customAttribteus);
            var mparticleUserVariable = new Variable('MParticleUser', 'user')
                .initializer(this.mparticleGetInstance()
                .addMethodCallSameLine('Identity')
                .addMethodCallSameLine('getCurrentUser', [], true));
            var setAttributesMethod = new MethodCall(mparticleUserVariable, 'setUserAttributes', [attributesVariable]);
            return new CodeBlock()
                .addStatement(attributesStatement)
                .addStatement(mparticleUserVariable)
                .addStatement(setAttributesMethod)
                .toSnippet(this.language);
        }
        else {
            return '';
        }
    };
    MPAndroid.prototype.createScreenViewSnippet = function (properties) {
        var data = properties.data;
        var screenName = data['screen_name'];
        var attributes = data['custom_attributes'];
        if (attributes) {
            var attributesVariable = new Variable('Map', 'attributes')
                .setGenerics('String', 'String');
            this.language.dictionaryInitializer(attributesVariable, attributes);
            return new CodeBlock()
                .addStatement(attributesVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logScreen', [screenName, attributesVariable]))
                .toSnippet(this.language);
        }
        else {
            return new CodeBlock()
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logScreen', [screenName]))
                .toSnippet(this.language);
        }
    };
    MPAndroid.prototype.createCrashReportSnippet = function (properties) {
        var data = properties.data;
        var exceptionName = data['exception_name'];
        var attribtues = data['custom_attributes'];
        var exceptionVariable = new Variable('Exception')
            .initializer(new Constructor('Exception'))
            .addComment('replace this with your exception');
        var attributesVariable = null;
        if (attribtues) {
            attributesVariable = new Variable('Map', 'eventData')
                .setGenerics('String', 'String');
            var attributesStatement = this.language.dictionaryInitializer(attributesVariable, attribtues, true);
            return new CodeBlock()
                .addStatement(attributesStatement)
                .addStatement(exceptionVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logException', [exceptionVariable, attributesVariable, exceptionName]))
                .toSnippet(this.language);
        }
        else {
            return new CodeBlock()
                .addStatement(exceptionVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logException', [exceptionVariable, attributesVariable, exceptionName]))
                .toSnippet(this.language);
        }
    };
    MPAndroid.prototype.createNetworkPerformanceSnippet = function (properties) {
        var eventName = properties['event_name'];
        var startTime = properties['start_time'];
        var httpMethod = properties['http_method'];
        var duration = properties['duration'];
        var bytesSent = properties['bytes_sent'];
        var bytesReceived = properties['bytes_received'];
        var responseCode = properties['response_code'];
        return new Statement(this.mparticleGetInstance().addMethodCallSameLine('logNetworkPerformance', [eventName, startTime, httpMethod, duration, bytesSent, bytesReceived, "{REQUEST-STRING}", responseCode]))
            .toSnippet(this.language);
    };
    MPAndroid.prototype.createProductActionSnippet = function (properties) {
        var data = properties.data;
        var name = 'productName';
        var sku = 'productId';
        var quantity = 1.5;
        var price = 19.99;
        var productAction = data['action'];
        var productVariable = new Variable('Product')
            .initializer(new Constructor('Product.Builder', [name, sku, price])
            .addMethodCall('quantity', [quantity])
            .addMethodCall('build'));
        var commerceEventVariable = new Variable('CommerceEvent')
            .initializer(new Constructor('CommerceEvent.Builder', [productAction, productVariable]).addMethodCall('build'));
        var logEventMethodCall = this.mparticleGetInstance().addMethodCall('logEvent', [commerceEventVariable], true);
        return new CodeBlock()
            .addStatement(productVariable)
            .addStatement(commerceEventVariable)
            .addStatement(logEventMethodCall)
            .toSnippet(this.language);
    };
    MPAndroid.prototype.createProductImpressionSnippet = function (properties) {
        var data = properties.data;
        var name = 'productName';
        var sku = 'productId';
        var quantity = 1.5;
        var price = 19.99;
        var productAction = data['action'];
        var productVariable = new Variable('Product')
            .initializer(new Constructor('Product.Builder', [name, sku, price])
            .addMethodCall('quantity', [quantity])
            .addMethodCall('build'));
        var commerceEventVariable = new Variable('CommerceEvent')
            .initializer(new Constructor('CommerceEvent.Builder', [productAction, productVariable]).addMethodCall('build'));
        var logEventMethodCall = this.mparticleGetInstance().addMethodCall('logEvent', [commerceEventVariable], true);
        return new CodeBlock()
            .addStatement(productVariable)
            .addStatement(commerceEventVariable)
            .addStatement(logEventMethodCall)
            .toSnippet(this.language);
    };
    return MPAndroid;
}());

//Default Langauge Decorator implementation using the most common values. Best bet is to extend this class and change only what is 
//needed
var AbstractLanguageDecorator = /** @class */ (function () {
    function AbstractLanguageDecorator() {
        this.nullabilityOperator = '';
        this.assignmentOperator = '=';
        this.statementTerminator = ';';
        this.canChainMethodCalls = true;
        this.tab = '    ';
        this.constructorKeyword = 'new';
        this.stringDenoter = '"';
        this.commentDenoter = '//';
        this.usesGenerics = false;
        this.nullValue = 'null';
    }
    AbstractLanguageDecorator.prototype.constructorSnippet = function (type, args, argsFormatted) {
        var constructorKeyword = this.constructorKeyword ? this.constructorKeyword + ' ' : '';
        return constructorKeyword + type.className + '(' + this.argumentStringSnippet(args, argsFormatted) + ')';
    };
    AbstractLanguageDecorator.prototype.getGenericClassDeclaration = function (className) {
        var generics = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            generics[_i - 1] = arguments[_i];
        }
        return className + '<' + generics.join(', ') + '>';
    };
    AbstractLanguageDecorator.prototype.argumentStringSnippet = function (args, formatted) {
        var _this = this;
        var argsSnippet = formatted ? '\n' + this.tab : '';
        argsSnippet += args
            .map(function (x) { return x.toArgumentSnippet(_this); })
            .join(',' + (formatted ? '\n' + this.tab : ' '));
        argsSnippet += formatted ? '\n' : '';
        return argsSnippet;
    };
    AbstractLanguageDecorator.prototype.methodCallSnippet = function (receiverString, methodCall, isNullable, isStatic) {
        if (isNullable === void 0) { isNullable = false; }
        var nullableString = isNullable && receiverString != null ? this.nullabilityOperator : '';
        var receiverSnippet = receiverString != null ? receiverString + nullableString + '.' : '';
        return receiverSnippet + methodCall.methodName + '(' + this.argumentStringSnippet(methodCall.args, methodCall.argsFormatted) + ')';
    };
    AbstractLanguageDecorator.prototype.staticCallSnippet = function (receiver, methodCall) {
        return receiver.className + '.' + methodCall.methodName + '(' + this.argumentStringSnippet(methodCall.args, methodCall.argsFormatted) + ')';
    };
    return AbstractLanguageDecorator;
}());

var KotlinDecorator = /** @class */ (function (_super) {
    __extends(KotlinDecorator, _super);
    function KotlinDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.constructorKeyword = '';
        _this.statementTerminator = '';
        _this.nullabilityOperator = '?';
        _this.utils = new Utils();
        _this.getCreateInstanceSnippet = function (type) { return type; };
        return _this;
    }
    KotlinDecorator.prototype.variableDeclarationSnippet = function (type, variableName, forceExplicitType) {
        if (forceExplicitType === void 0) { forceExplicitType = false; }
        return 'val ' + variableName + (forceExplicitType ? ': ' + type.className : '');
    };
    KotlinDecorator.prototype.dictionaryInitializer = function (variable, dictionary, wrapKeysInQuotes) {
        if (wrapKeysInQuotes === void 0) { wrapKeysInQuotes = true; }
        var args = [];
        if (dictionary && Object.keys(dictionary).length > 0) {
            for (var key in dictionary) {
                var keyExpression = new ValueExpression(key, wrapKeysInQuotes);
                var valExpression = new ValueExpression(dictionary[key]);
                args.push(new MethodCall(null, 'to', [keyExpression, valExpression])
                    .setBinaryOperationIfPossible(true));
            }
        }
        var constructor = new MethodCall(null, "mapOf", args)
            .setArgsFormatted(true);
        return variable.initializer(constructor);
    };
    KotlinDecorator.prototype.methodCallSnippet = function (receiverString, methodCall, isNullable, isStatic) {
        if (isNullable === void 0) { isNullable = false; }
        if (isStatic === void 0) { isStatic = false; }
        var nullabilityOperator = isNullable ? this.nullabilityOperator : '';
        if (!isStatic && methodCall.methodName.startsWith("get") && methodCall.args.length == 0) {
            var methodName = this.utils.camelCase(methodCall.methodName.substring(3));
            return receiverString + nullabilityOperator + '.' + methodName;
        }
        if (!isStatic && methodCall.methodName.startsWith("set") && methodCall.args.length == 1) {
            var methodName = this.utils.camelCase(methodCall.methodName.substring(3));
            methodCall.methodName = methodName;
            return receiverString + nullabilityOperator + '.' + methodName + ' = ' + methodCall.args[0].toArgumentSnippet(this) + this.statementTerminator;
        }
        if (methodCall.binaryOperation) {
            return methodCall.args[0].toArgumentSnippet(this) + ' ' + methodCall.methodName + ' ' + methodCall.args[1].toArgumentSnippet(this);
        }
        else {
            return _super.prototype.methodCallSnippet.call(this, receiverString, methodCall, isNullable, isStatic);
        }
    };
    return KotlinDecorator;
}(AbstractLanguageDecorator));

var JavaDecorator = /** @class */ (function (_super) {
    __extends(JavaDecorator, _super);
    function JavaDecorator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nullabilityOperator = '';
        _this.constructorKeyword = 'new';
        _this.endStatement = ';';
        return _this;
    }
    JavaDecorator.prototype.variableDeclarationSnippet = function (type, variableName) {
        var className = type.className;
        if (type.generics.length > 0) {
            className += '<';
            className += type.generics.join(', ');
            className += '>';
        }
        return className + ' ' + variableName;
    };
    JavaDecorator.prototype.constructorSnippet = function (type, args, argsFormatted) {
        var constructorKeyword = this.constructorKeyword ? this.constructorKeyword + ' ' : '';
        var generics = type.generics.length > 0 ? '<>' : '';
        return constructorKeyword + type.className + generics + '(' + this.argumentStringSnippet(args, argsFormatted) + ')';
    };
    JavaDecorator.prototype.dictionaryInitializer = function (variable, dictionary, wrapKeysInQuotes) {
        if (wrapKeysInQuotes === void 0) { wrapKeysInQuotes = true; }
        var constructor = new Constructor("HashMap")
            .setGenerics("String", "String");
        if (dictionary && Object.keys(dictionary).length > 0) {
            for (var key in dictionary) {
                var keyExpression = new ValueExpression(key, wrapKeysInQuotes);
                var valExpression = new ValueExpression(dictionary[key]);
                variable.addMethodCall('put', [keyExpression, valExpression]);
            }
        }
        return variable.initializer(constructor);
    };
    return JavaDecorator;
}(AbstractLanguageDecorator));

var Language;
(function (Language) {
    Language[Language["JSON"] = 1] = "JSON";
    Language[Language["Swift"] = 2] = "Swift";
    Language[Language["ObjectiveC"] = 3] = "ObjectiveC";
    Language[Language["AndroidKotlin"] = 4] = "AndroidKotlin";
    Language[Language["AndroidJava"] = 5] = "AndroidJava";
    Language[Language["JavaScript"] = 6] = "JavaScript";
    Language[Language["JavaEventsKotlin"] = 7] = "JavaEventsKotlin";
    Language[Language["JavaEventsJava"] = 8] = "JavaEventsJava";
    Language[Language["Python"] = 9] = "Python";
})(Language || (Language = {}));

var MPJavaEvents = /** @class */ (function () {
    function MPJavaEvents(language) {
        this.eventsApiVariable = function () { return new Variable("EventsApi")
            .addComment("Initialize your Events API"); };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            return "Not currently supported by data plan V1";
        };
        this.language = language;
    }
    MPJavaEvents.prototype.getAttributesVariable = function (attributes) {
        var variable = new Variable("Map", "attributes")
            .setGenerics("String", "String");
        return this.language.dictionaryInitializer(variable, attributes, true);
    };
    MPJavaEvents.prototype.createBatchAddEventAndSend = function (eventVariable) {
        var batchVariable = new Variable("Batch")
            .addDefaultInitializer(function (x) { return x.addMethodCall("addEventsItem", [eventVariable]); });
        var uploadEventMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable]);
        return [batchVariable, uploadEventMethodCall];
    };
    MPJavaEvents.prototype.createSessionStartSnippet = function (properties) {
        var eventInitialization = new Variable("SessionStartEvent", "event")
            .addDefaultInitializer();
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventInitialization);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(eventInitialization)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createSessionEndSnippet = function (properties) {
        var eventInitialization = new Variable("SessionEndEvent", "event")
            .addDefaultInitializer();
        var batchVariable = new Variable("Batch")
            .addDefaultInitializer(function (x) { return x.addMethodCall("addEventsItem", [eventInitialization]); });
        var uploadEventMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable]);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(eventInitialization)
            .addStatement(batchVariable)
            .addStatement(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createScreenViewSnippet = function (properties) {
        var data = properties.data;
        var attributes = data['custom_attributes'];
        var screenName = data['screen_name'];
        var dataVariable = new Variable("ScreenViewEventData", "data")
            .addDefaultInitializer(function (x) { return x.addMethodCall("screenName", ['the screen name']); });
        var eventVariable = new Variable("ScreenViewEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadStuff = this.createBatchAddEventAndSend(eventVariable);
        var codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadStuff);
        if (attributes && Object.keys(attributes).length > 0) {
            var attributesVariable = this.getAttributesVariable(attributes);
            var setAttributesMethodCall = eventVariable
                .createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable]);
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4);
        }
        return codeBlock.toSnippet(this.language);
    };
    MPJavaEvents.prototype.createCustomEventSnippet = function (properties) {
        var data = properties.data;
        var eventType = data['custom_event_type'];
        var eventName = data['event_name'];
        var attributes = data['custom_attributes'];
        var dataVariable = new Variable("CustomEventData", "data")
            .addDefaultInitializer(function (x) {
            return x
                .addMethodCall("customEventType", [new ValueExpression(eventType, false)])
                .addMethodCall("eventName", [eventName]);
        });
        var eventVariable = new Variable("CustomEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        var codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall);
        if (attributes && Object.keys(attributes).length > 0) {
            var attributesVariable = this.getAttributesVariable(attributes);
            var setAttributesMethodCall = eventVariable.createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable]);
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4);
        }
        return codeBlock.toSnippet(this.language);
    };
    MPJavaEvents.prototype.createCrashReportSnippet = function (properties) {
        var data = properties.data;
        var exceptionName = data['exception_name'];
        var attributes = data['custom_attributes'];
        var dataVariable = new Variable("CrashReportEventData", 'data')
            .addDefaultInitializer(function (x) { return x.addMethodCall("message", [exceptionName]); });
        var eventVariable = new Variable("CrashReportEvent", "event")
            .addDefaultInitializer();
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        var codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall);
        if (attributes && Object.keys(attributes).length > 0) {
            var attributesVariable = this.getAttributesVariable(attributes);
            var setAttributesMethodCall = eventVariable.createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable]);
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4);
        }
        return codeBlock.toSnippet(this.language);
    };
    MPJavaEvents.prototype.createOptOutSnippet = function (properties) {
        var dataVariable = new Variable("OptOutEventData", "data")
            .addDefaultInitializer(function (x) { return x.addMethodCall("isOptedOut", [true]); });
        var eventVariable = new Variable("OptOutEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createFirstRunSnippet = function (properties) {
        var dataVariable = new Variable("ApplicationStateTransitionEventData", "data")
            .addDefaultInitializer(function (x) { return x.addMethodCall("isFirstRun", [true]); });
        var eventVariable = new Variable("ApplicationStateTransitionEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createApplicationStateTransitionSnippet = function (properties) {
        var dataVariable = new Variable("ApplicationStateTransitionEventData", "data")
            .addDefaultInitializer(function (x) {
            return x.addMethodCall("applicationTransitionType", [new ValueExpression("ApplicationStateTransitionEventData.ApplicationTransitionTypeEnum.FOREGROUND", false)]);
        });
        var eventVariable = new Variable("ApplicationStateTransitionEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createNetworkPerformanceSnippet = function (properties) {
        var eventName = properties['event_name'];
        var startTime = properties['start_time'];
        var httpMethod = properties['http_method'];
        var duration = properties['duration'];
        var bytesSent = properties['bytes_sent'];
        var bytesReceived = properties['bytes_received'];
        var responseCode = properties['response_code'];
        var dataVariable = new Variable("NetworkPerformanceEventData", "data")
            .addDefaultInitializer(function (x) {
            x
                .addMethodCall("timeElapsed", [new ValueExpression(duration + "L", false)])
                .addMethodCall("bytesIn", [new ValueExpression(bytesReceived + "L", false)])
                .addMethodCall("bytesOut", [new ValueExpression(bytesSent + "L", false)])
                .addMethodCall("responseCode", [new ValueExpression([responseCode], false)])
                .addMethodCall("httpVerb", [httpMethod]);
        });
        var dataMethodCalls = dataVariable
            .createMethodCall("canonicalName", [eventName])
            .addMethodCall("eventStartUnixtimeMs", [new ValueExpression(startTime + "L", false)]);
        var eventVariable = new Variable("NetworkPerformanceEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(dataMethodCalls)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createBreadcrumbSnippet = function (properties) {
        var eventName = properties['event_name'];
        var dataVariable = new Variable("BreadcrumbEventData")
            .addDefaultInitializer(function (x) { return x.addMethodCall("label", [eventName]); });
        var eventVariable = new Variable("BreadcrumbEvent")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createProfileSnippet = function (properties) {
        return "";
    };
    MPJavaEvents.prototype.createCommerceSnippet = function (properties) {
        return 'A generic commerce event should never be included in a data plan';
    };
    MPJavaEvents.prototype.createUserAttributeChangeSnippet = function (properties) {
        return '//A generic attribute change event should never be included in a data plan';
    };
    MPJavaEvents.prototype.createUserIdentityChangeSnippet = function (properties) {
        return '//A generic identity change event should never be included in a data plan';
    };
    MPJavaEvents.prototype.createUninstallSnippet = function (properties) {
        return '//Uninstall events are not manually tracked';
    };
    MPJavaEvents.prototype.createMediaSnippet = function (properties) {
        return '//This SDK does not support Media Events';
    };
    MPJavaEvents.prototype.createUserAttributesSnippet = function (properties) {
        var userAttributesVariable = new Variable("Map", "userAttributes")
            .setGenerics("String", "Object");
        this.language.dictionaryInitializer(userAttributesVariable, properties);
        var batchVariable = new Variable("Batch")
            .addDefaultInitializer(function (x) { return x.addMethodCall('userAttributes', [userAttributesVariable]); });
        var eventsUploadMethodCall = this.eventsApiVariable().createMethodCall('uploadEvents', [batchVariable]);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(userAttributesVariable)
            .addStatement(batchVariable)
            .addStatement(eventsUploadMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createUserIdentitiesSnippet = function (properties) {
        var userIdentitesVariable = new Variable("UserIdentities")
            .addDefaultInitializer(function (x) {
            for (var key in properties) {
                x.addMethodCall(key.toString(), [properties[key]]);
            }
        });
        var batchVariable = new Variable("Batch")
            .addDefaultInitializer(function (x) { return x.addMethodCall("userIdentities", [userIdentitesVariable]); });
        var eventsUploadMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable]);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(userIdentitesVariable)
            .addStatement(batchVariable)
            .addStatement(eventsUploadMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createProductActionSnippet = function (properties) {
        var data = properties.data;
        var name = data['product_name'];
        var sku = data['product_sku'];
        var quantity = data['product_quantity'];
        var price = data['product_price'];
        var productAction = data['product_action'];
        var productVariable = new Variable("Product")
            .addDefaultInitializer(function (x) {
            x
                .addMethodCall("name", [name])
                .addMethodCall("id", [sku])
                .addMethodCall("quantity", [new Constructor("BigDecimal", [quantity])])
                .addMethodCall('price', [new Constructor("BigDecimal", [price])]);
        });
        var productActionVariable = new Variable("ProductAction")
            .addDefaultInitializer(function (x) {
            x
                .addMethodCall("action", [new ValueExpression("ProductAction.Action." + productAction, false)])
                .addMethodCall("addProductsItem", [productVariable]);
        });
        var dataVariable = new Variable("CommerceEventData", "data")
            .addDefaultInitializer(function (x) { return x.addMethodCall("productAction", [productActionVariable]); });
        var eventVariable = new Variable("CommerceEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(productVariable)
            .addStatement(productActionVariable)
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    MPJavaEvents.prototype.createProductImpressionSnippet = function (properties) {
        var data = properties.data;
        var name = data['product_name'];
        var sku = data['product_sku'];
        var quantity = data['product_quantity'];
        var price = data['product_price'];
        var impressionName = data['impression_name'];
        var productVariable = new Variable("Product")
            .addDefaultInitializer(function (x) {
            x
                .addMethodCall("name", [name])
                .addMethodCall("id", [sku])
                .addMethodCall("quantity", [new Constructor("BigDecimal", [quantity])])
                .addMethodCall('price', [new Constructor("BigDecimal", [price])]);
        });
        var productImpressionVariable = new Variable("ProductImpression")
            .addDefaultInitializer(function (x) {
            x
                .addMethodCall("productImpressionList", [impressionName])
                .addMethodCall("addProductsItem", [productVariable]);
        });
        var dataVariable = new Variable("CommerceEventData", "data")
            .addDefaultInitializer(function (x) { return x.addMethodCall("addProductImpressionsItem", [productImpressionVariable]); });
        var eventVariable = new Variable("CommerceEvent", "event")
            .addDefaultInitializer(function (x) { return x.addMethodCall("data", [dataVariable]); });
        var uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(productVariable)
            .addStatement(productImpressionVariable)
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    };
    return MPJavaEvents;
}());

var MPPython = /** @class */ (function () {
    function MPPython() {
        this.createSessionStartSnippet = function (exampleJSON) {
            return "batch = mparticle.Batch()\nbatch.environment = 'development'\n\nsession_start = mparticle.SessionStartEvent()\nsession_start.session_id = 12345678\nsession_start.timestamp_unixtime_ms = example_timestamp\n\nbatch.events = [session_start]\n\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        };
        this.createSessionEndSnippet = function (exampleJSON) {
            return "batch = mparticle.Batch()\nbatch.environment = 'development'\n\nsession_end = mparticle.SessionEndEvent()\nsession_end.session_id = session_start.session_id # it's mandatory that these match\nsession_end.session_duration_ms = example_duration\nsession_end.timestamp_unixtime_ms = example_timestamp + example_duration\n    \nbatch.events = [session_end]\n\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        };
        this.createCrashReportSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createOptOutSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createFirstRunSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createApplicationStateTransitionSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createNetworkPerformanceSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createBreadcrumbSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createProfileSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createCommerceSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createUserAttributeChangeSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createUserIdentityChangeSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createUninstallSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createMediaSnippet = function (exampleJSON) {
            return "Not currently supported by data plan V1";
        };
        this.createPromotionActionSnippet = function (exampleJSON) {
            var data = exampleJSON.data;
            return "Not currently supported by Python";
        };
    }
    MPPython.prototype.createScreenViewSnippet = function (_a) {
        var data = _a.data;
        var returnString = "from mparticle.models.screen_view_event import ScreenViewEvent\n\nbatch = mparticle.Batch()\nbatch.environment = 'development'\n\nevent = mparticle.models.screen_view_event.ScreenViewEvent()";
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(data['custom_attributes']);
        }
        returnString += "batch.events = [event]\n\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        return returnString + '\n';
    };
    MPPython.prototype.createCustomEventSnippet = function (_a) {
        var data = _a.data;
        var customEventType = data['custom_event_type'];
        var typeString = this.stringEventType(customEventType);
        var returnString = "batch = mparticle.Batch()\nbatch.environment = 'development'\n\nevent = mparticle.AppEvent('" + data['event_name'] + "', '" + typeString + "')\nevent.timestamp_unixtime_ms = example_timestamp";
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(data['custom_attributes']);
        }
        returnString += "batch.events = [event]\n\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        return returnString;
    };
    MPPython.prototype.createUserAttributesSnippet = function (exampleJSON) {
        var returnString = "batch = mparticle.Batch()\nbatch.environment = 'development'";
        if (exampleJSON) {
            returnString += this.userAttributes(exampleJSON);
        }
        returnString += "\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        return returnString;
    };
    MPPython.prototype.createUserIdentitiesSnippet = function (exampleJSON) {
        var returnString = "batch = mparticle.Batch()\nbatch.environment = 'development'";
        if (exampleJSON['user_identities']) {
            returnString += this.userIdentities(exampleJSON['user_identities']);
        }
        returnString += "\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        return returnString;
    };
    MPPython.prototype.createProductActionSnippet = function (_a) {
        var data = _a.data;
        var productAction = data['action'];
        var actionString = this.stringProductAction(productAction);
        var returnString = "batch = mparticle.Batch()\nbatch.environment = 'development'\n\nproduct = mparticle.Product()\nproduct.name = 'Example Product'\nproduct.id = 'sample-sku'\nproduct.price = 19.99\n\nproduct_action = mparticle.ProductAction('" + actionString + "')\nproduct_action.products = [product]\nproduct_action.tax_amount = 1.50\nproduct_action.total_amount = 21.49\n\ncommerce_event = mparticle.CommerceEvent(product_action)\ncommerce_event.timestamp_unixtime_ms = example_timestamp\n";
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(data['custom_attributes']);
        }
        returnString += "batch.events = [event]\n\ntry:\n    api_instance.upload_events(batch)\n    # you can also send multiple batches at a time to decrease the amount of network calls\n    #api_instance.bulk_upload_events([batch, batch])\nexcept mparticle.rest.ApiException as e:\n    print \"Exception while calling mParticle: %s\n\" % e";
        return returnString;
    };
    MPPython.prototype.createProductImpressionSnippet = function (exampleJSON) {
        return "Not currently supported by Python";
    };
    MPPython.prototype.customAttributesLines = function (customAttributesProperties) {
        var returnString = '\n';
        if (Object.keys(customAttributesProperties).length > 0) ;
        return returnString;
    };
    MPPython.prototype.userAttributes = function (userAttributesProperties) {
        var returnString = '\n';
        if (Object.keys(userAttributesProperties).length > 0) ;
        return returnString;
    };
    MPPython.prototype.userIdentities = function (userIdentitiesProperties) {
        var returnString = 'identities = mparticle.UserIdentities()\n';
        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (var property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    var valueType = this.stringForValue(userIdentitiesProperties[property]);
                    returnString += "identities." + property + " = " + valueType + "\n";
                }
            }
        }
        returnString += 'batch.user_identities = identities\n';
        return returnString;
    };
    // tslint:disable-next-line: no-any
    MPPython.prototype.stringForValue = function (value) {
        if (typeof (value) === 'string') {
            return '\'' + value + '\'';
        }
        else if (typeof (value) === 'number') {
            return value;
        }
        else if (typeof (value) === 'boolean') {
            return value ? 'true' : 'false';
        }
        else {
            return 'null';
        }
    };
    MPPython.prototype.stringEventType = function (value) {
        switch (value) {
            case 'navigation': {
                return 'navigation';
            }
            case 'location': {
                return 'location';
            }
            case 'search': {
                return 'search';
            }
            case 'transaction': {
                return 'transaction';
            }
            case 'user_content': {
                return 'user_content';
            }
            case 'user_preference': {
                return 'user_preference';
            }
            case 'social': {
                return 'social';
            }
            case 'other': {
                return 'other';
            }
            case 'unknown': {
                return 'unknown';
            }
            default: {
                return 'default';
            }
        }
    };
    MPPython.prototype.stringProductAction = function (value) {
        if (value === 'add_to_cart') {
            return 'add_to_cart';
        }
        else if (value === 'remove_from_cart') {
            return 'remove_from_cart';
        }
        else if (value === 'add_to_wishlist') {
            return 'add_to_wishlist';
        }
        else if (value === 'remove_to_wishlist') {
            return 'remove_to_wishlist';
        }
        else if (value === 'checkout') {
            return 'checkout';
        }
        else if (value === 'checkout_options') {
            return 'checkout_options';
        }
        else if (value === 'click') {
            return 'click';
        }
        else if (value === 'view') {
            return 'view';
        }
        else if (value === 'purchase') {
            return 'purchase';
        }
        else if (value === 'refund') {
            return 'refund';
        }
        else {
            return 'add_to_cart';
        }
    };
    return MPPython;
}());

var MPSnippets = /** @class */ (function () {
    function MPSnippets() {
    }
    MPSnippets.translateDataPlanJSON = function (dataPlanJSON, language) {
        var allExamples = "// The following is example code for every event in your Data Plan\n\n";
        var dataPlanPointArray = dataPlanJSON.version_document.data_points;
        allExamples = dataPlanPointArray.map(function (point, index) {
            var _a;
            if (((_a = point.match) === null || _a === void 0 ? void 0 : _a.criteria) && point.validator) {
                var description = "";
                if (point.description) {
                    description = point.description;
                }
                var resultString = MPSnippets.createSnippet(point, language);
                return MPSnippets.getDataPlanPointString(description, resultString, index);
            }
            return '';
        }).join("");
        return allExamples;
    };
    MPSnippets.getDataPlanPointString = function (description, resultString, index) {
        var output = [
            "// Data Plan Point " + (index + 1),
            description ? "// " + description : null,
            resultString,
        ];
        return output.filter(function (n) { return n; }).join('\n') + '\n\n';
    };
    /**
     * Create a code snippet
     * @param dataPlanPoint An object representing an [[AdBreak]] (collection of ads)
     * @param language An object representing an [[AdBreak]] (collection of ads)
     */
    MPSnippets.createSnippet = function (dataPlanPoint, language) {
        var _a, _b, _c, _d;
        var validatorJSON = (_a = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.validator) === null || _a === void 0 ? void 0 : _a.definition;
        for (var key in (_b = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.match) === null || _b === void 0 ? void 0 : _b.criteria) {
            validatorJSON.properties.data.properties[key] = (_c = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.match) === null || _c === void 0 ? void 0 : _c.criteria[key];
        }
        jsf.option('alwaysFakeOptionals', true);
        var exampleJSON = jsf.generate(validatorJSON);
        if (language === Language.JSON) {
            return JSON.stringify(exampleJSON);
        }
        var translator = this.translatorForLanguage(language);
        switch ((_d = dataPlanPoint === null || dataPlanPoint === void 0 ? void 0 : dataPlanPoint.match) === null || _d === void 0 ? void 0 : _d.type) {
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
            case dist_1.PromotionAction: {
                return translator.createPromotionActionSnippet(exampleJSON);
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
            case Language.AndroidKotlin: {
                return new MPAndroid(new KotlinDecorator());
            }
            case Language.AndroidJava: {
                return new MPAndroid(new JavaDecorator());
            }
            case Language.JavaScript: {
                return new MPJavaScript();
            }
            case Language.JavaEventsJava: {
                return new MPJavaEvents(new JavaDecorator());
            }
            case Language.JavaEventsKotlin: {
                return new MPJavaEvents(new KotlinDecorator());
            }
            case Language.Python: {
                return new MPPython();
            }
            default: {
                return new MPSwift();
            }
        }
    };
    return MPSnippets;
}());

exports.MPSnippets = MPSnippets;
