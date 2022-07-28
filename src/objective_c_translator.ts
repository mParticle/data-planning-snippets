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
        exampleJSON ? this.userIdentities(exampleJSON) : '';

    createProductActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;
        var action = this.commerceEventActionEnum(data['action']);

        let returnString = `\
MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithAction:${action} product:product];
`;
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                'commerceEvent.customAttributes = eventInfo;\n\n';
        }

        returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
        return returnString + '\n';
    };

    private commerceEventActionEnum(value: string) {
        if (value === 'add_to_cart') {
            return 'MPCommerceEventActionAddToCart';
        } else if (value === 'remove_from_cart') {
            return 'MPCommerceEventActionRemoveFromCart';
        } else if (value === 'add_to_wishlist') {
            return 'MPCommerceEventActionAddToWishList';
        } else if (value === 'remove_to_wishlist') {
            return 'MPCommerceEventActionRemoveFromWishlist';
        } else if (value === 'checkout') {
            return 'MPCommerceEventActionCheckout';
        } else if (value === 'checkout_options') {
            return 'MPCommerceEventActionCheckoutOptions';
        } else if (value === 'click') {
            return 'MPCommerceEventActionClick';
        } else if (value === 'view') {
            return 'MPCommerceEventActionViewDetail';
        } else if (value === 'purchase') {
            return 'MPCommerceEventActionPurchase';
        } else if (value === 'refund') {
            return 'MPCommerceEventActionRefund';
        } else {
            return 'MPCommerceEventActionAddToCart';
        }
    }

    createPromotionActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;

        var promotionAction = this.promotionActionEnum(exampleJSON['action']);

        let returnString = `\
MPPromotion *promotion = [[MPPromotion alloc] init];
MPPromotionContainer *promotionContainer = [[MPPromotionContainer alloc] initWithAction:${promotionAction} promotion:promotion];
MPCommerceEvent *commerceEvent = [[MPCommerceEvent alloc] initWithPromotionContainer:promotionContainer];
`;
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                'commerceEvent.customAttributes = eventInfo;\n\n';
        }

        returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
        return returnString + '\n';
    };

    private promotionActionEnum(value: string) {
        if (value === 'view') {
            return 'MPPromotionActionView';
        } else {
            return 'MPPromotionActionClick';
        }
    }

    createProductImpressionSnippet(exampleJSON: Dictionary): string {
        const { data } = exampleJSON;

        let returnString = `\
MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithImpressionName:@"ImpressionName" product:product];
`;
        if (data['custom_attributes']) {
            returnString +=
                this.customAttributesLines(data['custom_attributes']) +
                'commerceEvent.customAttributes = eventInfo;\n\n';
        }

        returnString += '[[MParticle sharedInstance] logEvent:commerceEvent];';
        return returnString + '\n';
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
            returnString += `NSMutableDictionary *attributes = [[NSMutableDictionary alloc] init];\n`;
            for (const property in userAttributesProperties) {
                if (userAttributesProperties.hasOwnProperty(property)) {
                    const valueType = this.stringForValue(
                        userAttributesProperties[property]
                    );
                    returnString += `attributes[@"${property}"] = ${valueType};\n`;
                }
            }
            returnString += `[[[MParticle sharedInstance].identity currentUser] setUserAttributes:attributes];\n`;
        }
        return returnString;
    }

    private userIdentities(userIdentitiesProperties: Dictionary): string {
        let returnString = '';

        if (Object.keys(userIdentitiesProperties).length > 0) {
            returnString += `MPIdentityApiRequest *request = [MPIdentityApiRequest requestWithEmptyUser];\n`;

            for (var property in userIdentitiesProperties) {
                if (userIdentitiesProperties.hasOwnProperty(property)) {
                    const value = userIdentitiesProperties[property];
                    switch (property) {
                        case "customerid":
                            property = "CustomerId"
                            break;

                        case "facebookcustomaudienceid":
                            property = "FacebookCustomAudienceId"
                            break;

                        case "mobilenumber":
                            property = "MobileNumber"
                            break;

                        case "phonenumber2":
                            property = "PhoneNumber2"
                            break;

                        case "phonenumber3":
                            property = "PhoneNumber3"
                            break;

                        case "iosadvertiserid":
                            property = "IOSAdvertiserId"
                            break;

                        case "iosvendorid":
                            property = "IOSVendorId"
                            break;

                        case "pushtoken":
                            property = "PushToken"
                            break;

                        case "deviceapplicationstamp":
                            property = "DeviceApplicationStamp"
                            break;
                    
                        default:
                            property = property.substring( 0, 1).toUpperCase() + property.substring(1)
                            break;
                    }
                    returnString += `[request setIdentity:@\"${value}\" identityType:MPIdentity${property}];\n`;
                }
            }
            returnString += `[[[MParticle sharedInstance] identity] identify:request completion:nil];\n`;
        }
        return returnString;
    }

    // tslint:disable-next-line: no-any
    private stringForValue(value: any) {
        if (typeof (value) === 'string') {
            return '@\"' + value + '\"';
        } else if (typeof (value) === 'number') {
            return '@' + value;
        } else if (typeof (value) === 'boolean') {
            return value ? '@true' : '@false';
        } else {
            return '[NSNull null]';
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
