// tslint:disable: max-line-length
import { MPTranslator } from './translator';
import { Dictionary } from './language';

export class MPObjectiveC implements MPTranslator {
    createSessionStartSnippet = (exampleJSON: Dictionary) =>
        '[[MParticle sharedInstance] beginSession];';

    createSessionEndSnippet = (exampleJSON: Dictionary) =>
        '[[MParticle sharedInstance] endSession];';

    createScreenViewSnippet({ data }: Dictionary): string {
        let returnString = '';
        let eventInfo = 'nil';

        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(
                data['custom_attributes']
            );
            eventInfo = 'eventInfo';
        }
        returnString += `[[MParticle sharedInstance] logScreen:@"${data['screen_name']}" eventInfo: ${eventInfo}];`;
        return returnString + '\n';
    }

    createCustomEventSnippet({ data }: Dictionary): string {
        const customEventType = data['custom_event_type'] as string;
        const typeString = this.stringEventType(customEventType);

        let returnString = `MPEvent *customEvent = [[MPEvent alloc] initWithName:@"${data['event_name']}" type: ${typeString}];\n`;
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                'customEvent.customAttributes = eventInfo;\n\n';
        }

        returnString += '[[MParticle sharedInstance] logEvent:customEvent];';
        return returnString + '\n';
    }

    createCrashReportSnippet = (exampleJSON: Dictionary) =>
        `[[MParticle sharedInstance] logException:${exampleJSON['exception_name']} topmostContext:self];\n`;

    createOptOutSnippet = (exampleJSON: Dictionary) =>
        '[MParticle sharedInstance].optOut = true;\n';

    createFirstRunSnippet = (exampleJSON: Dictionary) =>
        'First Run is not manually called\n';

    createApplicationStateTransitionSnippet = (exampleJSON: Dictionary) =>
        'Application State Transition is not manually called\n';

    createNetworkPerformanceSnippet = (exampleJSON: Dictionary) =>
        '[[MParticle sharedInstance] logNetworkPerformance:' +
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

    createBreadcrumbSnippet({ data }: Dictionary): string {
        let returnString = '';
        let eventInfo = 'nil';
        if (data['custom_attributes']) {
            returnString += this.customAttributesLines(
                data['custom_attributes']
            );
            eventInfo = 'eventInfo';
        }
        returnString += `[[MParticle sharedInstance] leaveBreadcrumb:${data['event_name']} eventInfo: ${eventInfo}];`;
        return returnString + '\n';
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

    createUserAttributesSnippet = (exampleJSON: Dictionary) =>
        exampleJSON ? this.userAttributes(exampleJSON) : '';

    createUserIdentitiesSnippet = (exampleJSON: Dictionary) =>
        exampleJSON ? this.userIdentities(exampleJSON['user_identities']) : '';

    createProductActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;
        return `\
    MPProduct *product = [[MPProduct alloc] initWithName:@"${data['product_name']}" sku:@"${data['product_sku']}" quantity:@${data['product_quantity']} price:@${data['product_price']}];
    [[MPCommerceEvent alloc] initWithAction:MPCommerceEventAction${exampleJSON['product_action']} product:product]
    [[MParticle sharedInstance] logEvent:commerceEvent];
        `;
    };

    createProductImpressionSnippet(exampleJSON: Dictionary): string {
        let returnString = '';
        const { data } = exampleJSON;

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
    }

    private customAttributesLines(
        customAttributesProperties: Dictionary
    ): string {
        let returnString =
            'NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];\n';

        if (Object.keys(customAttributesProperties).length > 0) {
            let sampleCode = '';
            for (const property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        customAttributesProperties[property]
                    );
                    sampleCode += `eventInfo[@"${property}"] = ${valueType};\n`;
                }
            }
            returnString += sampleCode;
        }
        return returnString + '\n';
    }

    private userAttributes(userAttributesProperties: Dictionary): string {
        let returnString = '';

        if (Object.keys(userAttributesProperties).length > 0) {
            for (const property in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        userAttributesProperties[property]
                    );
                    returnString += `[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"${property}" value:${valueType}];\n`;
                }
            }
        }
        return returnString;
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        let returnString = '';

        if (Object.keys(userIdentitiesProperties).length > 0) {
            for (const property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        userIdentitiesProperties[property]
                    );
                    returnString += `[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"${property}" value:${valueType}];\n`;
                }
            }
        }
        return returnString;
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any): string {
        if (value as string) {
            return `@"${value}"`;
        } else if (value as number) {
            return '@' + value;
        } else if (value as boolean) {
            return value ? '@true' : '@false';
        } else {
            return 'nil';
        }
    }

    private stringEventType(value: string): string {
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
    }
}
