// tslint:disable: max-line-length
import { MPTranslator } from './translator';
import { Dictionary } from './language';

export class MPJavaScript implements MPTranslator {
    createSessionStartSnippet(exampleJSON: Dictionary): string {
        return 'mParticle.startNewSession()';
    }

    createSessionEndSnippet(exampleJSON: Dictionary): string {
        return 'mParticle.endSession()';
    }

    createScreenViewSnippet(exampleJSON: Dictionary): string {
        const { data } = exampleJSON;
        let attributes, returnString;
        if (!data['screen_name']) {
            returnString = `mParticle.logPageView();`;
            return returnString;
        } else {
            returnString = `mParticle.logPageView('${data['screen_name']}'`;
        }

        if (data['custom_attributes'] && Object.keys(data['custom_attributes']).length) {
            attributes = this.customAttributesLines(data['custom_attributes']);
            returnString = `${attributes}\n${returnString}, customAttributes)`
        } else {
            returnString += `)`;
        }

        return returnString;
    }

    createCustomEventSnippet(exampleJSON: Dictionary): string {
        const { data } = exampleJSON;

        let typeString = data['custom_event_type'] as string;
        let attributes;
        typeString = this.stringEventType(typeString);

        let returnString =
            `mParticle.logEvent('${data['event_name']}', mParticle.EventType.${typeString}`;

        if (data['custom_attributes'] && Object.keys(data['custom_attributes']).length) {
            attributes = this.customAttributesLines(data['custom_attributes']);
            returnString = `${attributes}\n${returnString}, customAttributes)`
        } else {
            returnString += `)`
        }
        return returnString;
    }

    createCrashReportSnippet(exampleJSON: Dictionary): string {
        return (
            `mParticle.logError('${exampleJSON['exception_name']}'`
        );
    }

    createOptOutSnippet(exampleJSON: Dictionary): string {
        return 'mParticle.setOptOut(true)\n';
    }

    createFirstRunSnippet(exampleJSON: Dictionary): string {
        return 'First Run is not manually called\n';
    }

    createApplicationStateTransitionSnippet(exampleJSON: Dictionary): string {
        return 'Application State Transition is not manually called\n';
    }

    createNetworkPerformanceSnippet = (exampleJSON: Dictionary) =>
        'Breadcrump snippet not available in JS\n';

    createBreadcrumbSnippet = (exampleJSON: Dictionary) =>
        'Breadcrump snippet not available in JS\n';

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

    // TODO: not yet supported
    createProductActionSnippet = ({ data }: Dictionary) => `\
        let product = mParticle.eCommerce.createProduct('${data['product_name']}','${data['product_sku']}, ${data['product_price']}, ${data['product_quantity']})
        mParticle.eCommerce.logProductAction('mParticle.ProductAction.${data['product_action']}', [product], attrs)
        `;

    // TODO: not yet supported
    createProductImpressionSnippet = ({ data }: Dictionary) => `\
    let product = mParticle.eCommerce.createProduct('${data['product_name']}','${data['product_sku']}, ${data['product_price']}, ${data['product_quantity']})

    let commerceEvent = MPCommerceEvent.init(impressionName: "${data['impression_name']}", product: product)
    MParticle.sharedInstance().logEvent(commerceEvent)\n`;

    private customAttributesLines(
        customAttributesProperties: Dictionary
    ): string {
        let eventInfoString = '';

        if (Object.keys(customAttributesProperties).length > 0) {
            let sampleCode = 'let customAttributes = {';
            for (const property in customAttributesProperties) {
                if (customAttributesProperties.hasOwnProperty(property)) {
                    const value = this.stringForValue(
                        customAttributesProperties[property]
                    );
                    sampleCode +=
                        `\n    ${property}: ${value},`;
                }
            }
            sampleCode += `\n};`

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
                        `mParticle.Identity.getCurrentUser().setUserAttribute("${key}", ${value})`
                    );
                }
            }
        }
        return returnString.join('\n') + '\n';
    }

    // TODO: not yet supported
    private userIdentities(userIdentitiesProperties: Dictionary): string {
        // TODO: Not yet supported
        return '';
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any) {
        if (typeof (value) === 'string') {
            return `"${value}"`;
        } else if (typeof (value) === 'number') {
            return value;
        } else if (typeof (value) === 'boolean') {
            return value ? true : false;
        } else {
            return null;
        }
    }

    // tslint:disable-next-line: no-any
    private stringEventType(value: string): string {
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
    }
}
