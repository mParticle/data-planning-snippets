import { MPTranslator } from './translator';
import { Dictionary } from './language';

export class MPSwift implements MPTranslator {

    public createSessionStartSnippet(exampleJSON: Dictionary): string {
        return "MParticle.sharedInstance().beginSession";
    }

    public createSessionEndSnippet(exampleJSON: Dictionary): string {
        return "MParticle.sharedInstance().endSession";
    }

    public createScreenViewSnippet(exampleJSON: Dictionary): string {
        var returnString = '';
        const { data } = exampleJSON;

        if (data["custom_attributes"]) {
            returnString = this.customAttributesLines(data["custom_attributes"]);
            return returnString + 'MParticle.sharedInstance().logScreen(\"' + data['screen_name'] + '\", eventInfo: eventInfo)\n';
        } else {
            return returnString + 'MParticle.sharedInstance().logScreen(\"' + data['screen_name'] + '\", eventInfo: nil)\n';
        }
    }

    createCustomEventSnippet(exampleJSON: Dictionary): string {
        var returnString = '';
        const { data } = exampleJSON;

        var typeString = data["custom_event_type"] as String;
        typeString = this.stringEventType(typeString);

        var returnString = 'let customEvent = MPEvent.init(name: \"' + data['event_name'] + '\", type: ' + typeString + ')\n';
        if (data["custom_attributes"]) {
            returnString = returnString + this.customAttributesLines(data["custom_attributes"]);
            returnString = returnString + 'customEvent?.customAttributes = eventInfo\n\n';
        }
        return returnString + 'MParticle.sharedInstance().logEvent(customEvent!)\n';
    }

    createCrashReportSnippet(exampleJSON: Dictionary): string {
        return 'MParticle.sharedInstance().logException(' + exampleJSON['exception_name'] + ', topmostContext:self)\n';
    }

    createOptOutSnippet(exampleJSON: Dictionary): string {
        return 'MParticle.sharedInstance().optOut = true\n';
    }

    createFirstRunSnippet(exampleJSON: Dictionary): string {
        return 'First Run is not manually called\n';
    }

    createApplicationStateTransitionSnippet(exampleJSON: Dictionary): string {
        return 'Application State Transition is not manually called\n';
    }

    createNetworkPerformanceSnippet(exampleJSON: Dictionary): string {
        return 'MParticle.sharedInstance().logNetworkPerformance(' + exampleJSON['event_name'] + ', httpMethod: ' + exampleJSON['http_method'] + ', startTime: ' + exampleJSON['start_time'] + ', duration: ' + exampleJSON['duration'] + ', bytesSent: ' + exampleJSON['bytes_sent'] + ', bytesReceived: ' + exampleJSON['bytes_received'] + ')\n';
    }

    createBreadcrumbSnippet(exampleJSON: Dictionary): string {
        if (exampleJSON["custom_attributes"]) {
            var returnString = '';
            returnString = returnString + this.customAttributesLines(exampleJSON["custom_attributes"]);

            return returnString + 'MParticle.sharedInstance().leaveBreadcrumb(' + exampleJSON['event_name'] + ', eventInfo: eventInfo)\n';
        }
        return 'MParticle.sharedInstance().leaveBreadcrumb(' + exampleJSON['event_name'] + ', eventInfo: nil)\n';
    }

    createProfileSnippet(exampleJSON: Dictionary): string {
        return 'Profile Snippet is not manually called\n';
    }

    createCommerceSnippet(exampleJSON: Dictionary): string {
        return 'A generic commerce event should never be included in a data plan';
    }

    createUserAttributeChangeSnippet(exampleJSON: Dictionary): string {
        return 'A generic attribute change event should never be included in a data plan';
    }

    createUserIdentityChangeSnippet(exampleJSON: Dictionary): string {
        return 'A generic identity change event should never be included in a data plan';
    }

    createUninstallSnippet(exampleJSON: Dictionary): string {
        return 'Uninstall is not manually called\n';
    }

    createMediaSnippet(exampleJSON: Dictionary): string {
        return 'Media Events are not manually called\n';
    }

    createUserAttributesSnippet(exampleJSON: Dictionary): string {
        return exampleJSON ? this.userAttributes(exampleJSON) : ''

    }

    createUserIdentitiesSnippet(exampleJSON: Dictionary): string {
        return exampleJSON ? this.userIdentities(exampleJSON['user_identities']) : ''

    }

    createProductActionSnippet(exampleJSON: Dictionary): string {
        var returnString = '';
        const { data } = exampleJSON;

        returnString = 'let product = MPProduct.init(name: \"' + data['product_name'] + '\", sku: \"' + data['product_sku'] + '\", quantity: ' + data['product_quantity'] + ', price: ' + data['product_price'] + ')\n';
        returnString = returnString + 'let commerceEvent = MPCommerceEvent.init(action: ' + data['product_action'] + ', product: product)\n';
        returnString = returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n';

        return returnString;
    }

    createProductImpressionSnippet(exampleJSON: Dictionary): string {
        var returnString = '';
        const { data } = exampleJSON;

        returnString = 'let product = MPProduct.init(name: \"' + data['product_name'] + '\", sku: \"' + data['product_sku'] + '\", quantity: ' + data['product_quantity'] + ', price: ' + data['product_price'] + ')\n';
        returnString = returnString + 'let commerceEvent = MPCommerceEvent.init(impressionName: \"' + data['impression_name'] + '\", product: product)\n';
        returnString = returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n';

        return returnString;
    }

    private customAttributesLines(customAttributesProperties: Dictionary): string {
        var eventInfoString = "let eventInfo = [String: Any].init()\n";

        if (Object.keys(customAttributesProperties).length > 0) {
            var sampleCode = "var eventInfo = [String: Any].init()\n";
            for (const property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    let value = this.stringForValue(customAttributesProperties[property]);
                    sampleCode = sampleCode + 'eventInfo[\"' + property + '\"] = ' + value + '\n';
                }
            }

            eventInfoString = sampleCode;
        }
        return eventInfoString;
    }

    private userAttributes(userAttributesProperties: Dictionary): string {
        var returnString = "";

        if (Object.keys(userAttributesProperties).length > 0) {
            for (const key in userAttributesProperties) {
                let value = this.stringForValue(userAttributesProperties[key]);
                returnString = returnString + 'MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"' + key + '\"' + ', value: ' + value + ')\n';
            }
        }
        return returnString;
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        var returnString = "";

        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (const property in userIdentitiesProperties) {
                let valueType = this.stringForValue(userIdentitiesProperties[property]);
                returnString = returnString + 'MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"' + property + '\"' + ', value: ' + valueType + ')\n';
            }
        }
        return returnString;
    }

    private stringForValue(value: any): string {
        if (value as string) {
            return '\"' + value + '\"';
        } else if (value as Number) {
            return value;
        } else if (value as Boolean) {
            if (value) {
                return 'true';
            } else {
                return 'false';
            }
        } else {
            return 'nil';
        }
    }

    private stringEventType(value: any): string {
        if (value as string) {
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
        } else {
            return '.other';
        }
    }
}