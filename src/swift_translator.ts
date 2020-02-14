// tslint:disable: max-line-length
import { MPTranslator } from './translator';
import { Dictionary } from './language';

export class MPSwift implements MPTranslator {
    createSessionStartSnippet(exampleJSON: Dictionary): string {
        return 'MParticle.sharedInstance().beginSession';
    }

    createSessionEndSnippet(exampleJSON: Dictionary): string {
        return 'MParticle.sharedInstance().endSession';
    }

    createScreenViewSnippet(exampleJSON: Dictionary): string {
        let returnString = '';
        const { data } = exampleJSON;

        if (data['custom_attributes']) {
            returnString = this.customAttributesLines(
                data['custom_attributes']
            );
            return (
                returnString +
                'MParticle.sharedInstance().logScreen("' +
                data['screen_name'] +
                '", eventInfo: eventInfo)\n'
            );
        } else {
            return (
                returnString +
                'MParticle.sharedInstance().logScreen("' +
                data['screen_name'] +
                '", eventInfo: nil)\n'
            );
        }
    }

    createCustomEventSnippet(exampleJSON: Dictionary): string {
        const { data } = exampleJSON;

        let typeString = data['custom_event_type'] as string;
        typeString = this.stringEventType(typeString);

        let returnString =
            'let customEvent = MPEvent.init(name: "' +
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
        return (
            returnString + 'MParticle.sharedInstance().logEvent(customEvent!)\n'
        );
    }

    createCrashReportSnippet(exampleJSON: Dictionary): string {
        return (
            'MParticle.sharedInstance().logException(' +
            exampleJSON['exception_name'] +
            ', topmostContext:self)\n'
        );
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
        return (
            'MParticle.sharedInstance().logNetworkPerformance(' +
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
            ')\n'
        );
    }

    createBreadcrumbSnippet(exampleJSON: Dictionary): string {
        if (exampleJSON['custom_attributes']) {
            let returnString = '';
            returnString =
                returnString +
                this.customAttributesLines(exampleJSON['custom_attributes']);

            return (
                returnString +
                'MParticle.sharedInstance().leaveBreadcrumb(' +
                exampleJSON['event_name'] +
                ', eventInfo: eventInfo)\n'
            );
        }
        return (
            'MParticle.sharedInstance().leaveBreadcrumb(' +
            exampleJSON['event_name'] +
            ', eventInfo: nil)\n'
        );
    }

    createProfileSnippet = (exampleJSON: Dictionary) =>
        'Profile Snippet is not manually called\n';

    createCommerceSnippet = (exampleJSON: Dictionary) =>
        'A generic commerce event should never be included in a data plan';

    createUserAttributeChangeSnippet = (exampleJSON: Dictionary) =>
        'A generic attribute change event should never be included in a data plan';

    createUserIdentityChangeSnippet = (exampleJSON: Dictionary) =>
        'A generic identity change event should never be included in a data plan';

    createUninstallSnippet = (exampleJSON: Dictionary) =>
        'Uninstall is not manually called\n';

    createMediaSnippet = (exampleJSON: Dictionary) =>
        'Media Events are not manually called\n';

    createUserAttributesSnippet = (exampleJSON: Dictionary) =>
        exampleJSON ? this.userAttributes(exampleJSON) : '';

    createUserIdentitiesSnippet = (exampleJSON: Dictionary) =>
        exampleJSON ? this.userIdentities(exampleJSON['user_identities']) : '';

    createProductActionSnippet = ({ data }: Dictionary) => `\
let product = MPProduct.init(name: "${data['product_name']}", sku: "${data['product_sku']}", quantity: ${data['product_quantity']}, price: ${data['product_price']})
let commerceEvent = MPCommerceEvent.init(action: ${data['product_action']}', product: product)
MParticle.sharedInstance().logEvent(commerceEvent)
`;

    createProductImpressionSnippet = ({ data }: Dictionary) => `\
let product = MPProduct.init(name: "${data['product_name']}", sku: "${data['product_sku']}", quantity: ${data['product_quantity']}, price: ${data['product_price']})
let commerceEvent = MPCommerceEvent.init(impressionName: "${data['impression_name']}", product: product)
MParticle.sharedInstance().logEvent(commerceEvent)\n`;

    private customAttributesLines(
        customAttributesProperties: Dictionary
    ): string {
        let eventInfoString = 'let eventInfo = [String: Any].init()\n';

        if (Object.keys(customAttributesProperties).length > 0) {
            let sampleCode = 'var eventInfo = [String: Any].init()\n';
            for (const property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    const value = this.stringForValue(
                        customAttributesProperties[property]
                    );
                    sampleCode +=
                        'eventInfo["' + property + '"] = ' + value + '\n';
                }
            }

            eventInfoString = sampleCode;
        }
        return eventInfoString;
    }

    private userAttributes(userAttributesProperties: Dictionary): string {
        const returnString: string[] = [];

        if (Object.keys(userAttributesProperties).length > 0) {
            for (const key in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(key)) {
                    const value = this.stringForValue(
                        userAttributesProperties[key]
                    );
                    returnString.push(
                        `MParticle.sharedInstance().identity.currentUser?.setUserAttribute("${key}", value: ${value})`
                    );
                }
            }
        }
        return returnString.join('\n') + '\n';
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        const returnString: string[] = [];

        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (const property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        userIdentitiesProperties[property]
                    );
                    returnString.push(
                        `MParticle.sharedInstance().identity.currentUser?.setUserAttribute("${property}", value: ${valueType})`
                    );
                }
            }
        }
        return returnString.join('\n') + '\n';
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any): string {
        if (value as string) {
            if (value === 'true') {
                return value;
            } else if (value === 'false') {
                return value;
            } else {
                return '\"' + value + '\"';
            }
        } else if (value as number) {
            return value;
        } else if (value as boolean) {
            return value ? 'true' : 'false';
        } else {
            return 'NSNull.init()';
        }
    }

    // tslint:disable-next-line: no-any
    private stringEventType(value: string): string {
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
    }
}
