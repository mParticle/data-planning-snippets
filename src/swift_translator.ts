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
        exampleJSON ? this.userIdentities(exampleJSON) : '';

    createProductActionSnippet = ({ data }: Dictionary) => {
        let actionString = data['product_action'] as string;
        actionString = this.commerceEventActionEnum(actionString);

        let returnString = `\
let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(action: ${actionString}, product: product)
`
        if (data['custom_attributes']) {
            returnString =
                returnString +
                this.customAttributesLines(data['custom_attributes']);
            returnString =
                returnString + 'commerceEvent.customAttributes = eventInfo\n\n';
        }
        return (
            returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n'
        );
    };

    private commerceEventActionEnum(value: string) {
        if (value === 'add_to_cart') {
            return '.addToCart';
        } else if (value === 'remove_from_cart') {
            return '.removeFromCart';
        } else if (value === 'add_to_wishlist') {
            return '.addToWishList';
        } else if (value === 'remove_to_wishlist') {
            return '.removeFromWishlist';
        } else if (value === 'checkout') {
            return '.checkout';
        } else if (value === 'checkout_options') {
            return '.checkoutOptions';
        } else if (value === 'click') {
            return '.click';
        } else if (value === 'view') {
            return '.viewDetail';
        } else if (value === 'purchase') {
            return '.purchase';
        } else if (value === 'refund') {
            return '.refund';
        } else {
            return '.addToCart';
        }
    }

    createPromotionActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;

        var promotionAction = this.promotionActionEnum(exampleJSON['action']);

        let returnString = `\
let promotion = MPPromotion.init()
let promotionContainer = MPPromotionContainer.init(action: ${promotionAction}, promotion: promotion)
let commerceEvent = MPCommerceEvent.init(promotionContainer: promotionContainer)
`;
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                'commerceEvent.customAttributes = eventInfo;\n\n';
        }

        return (
            returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n'
        );
    };

    private promotionActionEnum(value: string) {
        if (value === 'view') {
            return '.view';
        } else {
            return '.click';
        }
    }

    createProductImpressionSnippet = ({ data }: Dictionary) => {

        let returnString = `\
let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(impressionName: "impressionName", product: product)
`
        if (data['custom_attributes']) {
            returnString =
                returnString +
                this.customAttributesLines(data['custom_attributes']);
            returnString =
                returnString + 'commerceEvent.customAttributes = eventInfo\n\n';
        }
        return (
            returnString + 'MParticle.sharedInstance().logEvent(commerceEvent)\n'
        );
    };

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
            if (Object.keys(userAttributesProperties).length == 1) {
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
            } else {
                returnString.push(
                    `var attributes = [String: Any]()`
                );
                for (const key in userAttributesProperties) {
                    if (userAttributesProperties.hasOwnProperty(key)) {
                        const value = this.stringForValue(
                            userAttributesProperties[key]
                        );
                        returnString.push(
                            `attributes["${key}"] = ${value}`
                        );
                    }
                }
                returnString.push(
                    `if let user = MParticle.sharedInstance().identity.currentUser {`
                );
                returnString.push(
                    `    user.userAttributes = attributes`
                );
                returnString.push(
                    `}`
                );
            }
        }
        return returnString.join('\n') + '\n';
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        const returnString: string[] = [];

        if (Object.keys(userIdentitiesProperties).length > 0) {
            returnString.push(
                `let request = MPIdentityApiRequest.withEmptyUser()`
            );
            for (var type in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(type)) {
                    const value = this.stringForValue(
                        userIdentitiesProperties[type]
                    );
                    switch (type) {
                        case "customerid":
                            type = "customerId"
                            break;

                        case "facebookcustomaudienceid":
                            type = "facebookCustomAudienceId"
                            break;

                        case "mobilenumber":
                            type = "mobileNumber"
                            break;

                        case "phonenumber2":
                            type = "phoneNumber2"
                            break;

                        case "phonenumber3":
                            type = "phoneNumber3"
                            break;

                        case "iosadvertiserid":
                            type = "iosAdvertiserId"
                            break;

                        case "iosvendorid":
                            type = "iosVendorId"
                            break;

                        case "pushtoken":
                            type = "pushToken"
                            break;

                        case "deviceapplicationstamp":
                            type = "deviceApplicationStamp"
                            break;
                    
                        default:
                            break;
                    }
                    returnString.push(
                        `request.setIdentity(${value}, identityType: .${type})`
                    );
                }
            }
            returnString.push(
                `MParticle.sharedInstance().identity.identify(request)`
            );
        }
        return returnString.join('\n') + '\n';
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any) {
        if (typeof (value) === 'string') {
            return '\"' + value + '\"';
        } else if (typeof (value) === 'number') {
            return value;
        } else if (typeof (value) === 'boolean') {
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
