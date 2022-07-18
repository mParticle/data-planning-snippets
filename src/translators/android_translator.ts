import { MPTranslator } from '../translator';
import { Dictionary } from '../language';
import { Utils } from '../utils';
import { CodeBlock } from '../expressions/code_block'
import { MethodCall, Constructor, ValueExpression, Variable } from '../expressions/expressions'
import { Statement } from '../expressions/statement'
import { LanguageDecorator } from '../language-decorators/language_decorator';

export class MPAndroid implements MPTranslator {
    language: LanguageDecorator;
    utils = new Utils();

    constructor(language: LanguageDecorator) {
        this.language = language;
    }

    mparticleGetInstance = () => new MethodCall('MParticle', 'getInstance', [], true, true)

    getIdentityInstanceToCallSnippet = () => this.mparticleGetInstance().addMethodCallSameLine("Identity");

    getCurrentUserInstanceSnippet = () => this.getIdentityInstanceToCallSnippet().addMethodCallSameLine("getCurrentUser")

    createSessionStartSnippet = (exampleJSON: Dictionary) =>
        '//Android Sessions will automatically be started when an Event is logged'

    createSessionEndSnippet = (exampleJSON: Dictionary) =>
        '//Android Sessions will automatically end after a timeout'

    createFirstRunSnippet = (exampleJSON: Dictionary) =>
        '//First Run is not manually called';

    createApplicationStateTransitionSnippet = (exampleJSON: Dictionary) =>
        '//Application State Transition is not manually called'

    createProfileSnippet = (exampleJSON: Dictionary) =>
        '//Profile Snippet is not manually called';

    createCommerceSnippet = (exampleJSON: Dictionary) =>
        '//A generic commerce event should never be included in a data plan';

    createUserAttributeChangeSnippet = (exampleJSON: Dictionary) =>
        '//A generic attribute change event should never be included in a data plan';

    createUserIdentityChangeSnippet = (exampleJSON: Dictionary) =>
        '//A generic identity change event should never be included in a data plan';

    createUninstallSnippet = (exampleJSON: Dictionary) =>
        '//Uninstall is not manually called\n';

    createMediaSnippet = (exampleJSON: Dictionary) =>
        '//Media Events are not manually called';

    createOptOutSnippet = (exampleJSON: Dictionary) =>
        this.mparticleGetInstance()
            .addMethodCall('setOptOutTrue', [], true)
            .toSnippet(this.language);

    createBreadcrumbSnippet(properties: Dictionary): string {
        let eventName = properties['event_name'];
        return this.mparticleGetInstance()
            .addMethodCall('leaveBreadcrumb', [eventName])
            .toSnippet(this.language)
    }

    createCustomEventSnippet(properties: Dictionary): string {
        const { data } = properties
        let eventType = "MParticle.EventType." + this.utils.capitalize(data['custom_event_type']);
        let eventName = data['event_name'];
        let attributes = data['custom_attributes']

        let codeBlock = new CodeBlock();

        let eventVariable = new Variable('MPEvent', 'event')
            .initializer(new Constructor('MPEvent.Builder', [eventName, new ValueExpression(eventType, false)]))

        let attributeVariable: Variable
        if (attributes) {
            attributeVariable = new Variable('Map', "attributes")
                .setGenerics('String', 'String')
            this.language.dictionaryInitializer(attributeVariable, attributes, true);
            eventVariable.initialization?.addMethodCall('customAttributes', [attributeVariable])
            codeBlock
                .addStatement(attributeVariable)
        }
        eventVariable.initialization?.addMethodCall('build')
        let logEvent = this.mparticleGetInstance().addMethodCallSameLine("logEvent", [eventVariable], true)

        return codeBlock
            .addStatement(eventVariable)
            .addStatement(logEvent)
            .toSnippet(this.language);
    }

    createUserIdentitiesSnippet(data: Dictionary): string {
        let userIdentities: Dictionary = [];
        if (data && Object.keys(data).length > 0) {
            for (const key in data) {
                switch(key) {
                    case "ios_idfv": break; //ignore
                    case "customerid": userIdentities['MParticle.IdentityType.CustomerId'] = data[key]; break;
                    case "facebookcustomaudienceid": userIdentities['MParticle.IdentityType.FacebookCustomAudienceId'] = data[key]; break;
                    case "mobilenumber": userIdentities['MParticle.IdentityType.MobileNumber'] = data[key]; break;
                    case "phonenumber2": userIdentities['MParticle.IdentityType.PhoneNumber2'] = data[key]; break;
                    case "phonenumber3": userIdentities['MParticle.IdentityType.PhoneNumber3'] = data[key]; break;
                    default: userIdentities['MParticle.IdentityType.' + this.utils.capitalize(key)] = data[key]; break;
                }
            }
            let userIdentitiesVariable = new Variable('Map', 'userIdentities')
                .setGenerics('MParticle.IdentityType', 'String')
            let userIdentitieSnippet = this.language.dictionaryInitializer(userIdentitiesVariable, userIdentities, false)
            let identityRequestVariable = new Variable('IdentityApiRequest', 'request')
                .initializer(
                    new MethodCall('IdentityApiRequest', 'withEmptyUser')
                        .addMethodCall('userIdentities', [userIdentitiesVariable])
                        .addMethodCall('build')
                )
            let identifyMethodCall = this.mparticleGetInstance()
                .addMethodCallSameLine('Identity')
                .addMethodCallSameLine('identify', [identityRequestVariable])
            return new CodeBlock()
                .addStatement(userIdentitiesVariable)
                .addStatement(identityRequestVariable)
                .addStatement(identifyMethodCall)
                .toSnippet(this.language);
        } else {
            return ''
        }
    }

    createUserAttributesSnippet(customAttribteus: Dictionary): string {
        if (customAttribteus && Object.keys(customAttribteus).length > 0) {
            let attributesVariable = new Variable('Map', 'attributes')
                .setGenerics('String, String')
            let attributesStatement = this.language.dictionaryInitializer(attributesVariable, customAttribteus);
            let mparticleUserVariable = new Variable('MParticleUser', 'user')
                .initializer(this.mparticleGetInstance()
                    .addMethodCallSameLine('Identity')
                    .addMethodCallSameLine('getCurrentUser', [], true))
            let setAttributesMethod = new MethodCall(mparticleUserVariable, 'setUserAttributes', [attributesVariable]);
            return new CodeBlock()
                .addStatement(attributesStatement)
                .addStatement(mparticleUserVariable)
                .addStatement(setAttributesMethod)
                .toSnippet(this.language)
        } else {
            return ''
        }
    }

    createScreenViewSnippet(properties: Dictionary): string {
        const { data } = properties
        let screenName = data['screen_name'];
        let attributes = data['custom_attributes']


        if (attributes) {
            let attributesVariable = new Variable('Map', 'attributes')
                .setGenerics('String', 'String')

            this.language.dictionaryInitializer(attributesVariable, attributes);
            return new CodeBlock()
                .addStatement(attributesVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logScreen', [screenName, attributesVariable]))
                .toSnippet(this.language);
        } else {
            return new CodeBlock()
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logScreen', [screenName]))
                .toSnippet(this.language);
        }
    }

    createCrashReportSnippet(properties: Dictionary): string {
        const { data } = properties
        let exceptionName = data['exception_name']
        let attribtues = data['custom_attributes'];

        let exceptionVariable = new Variable('Exception')
            .initializer(new Constructor('Exception'))
            .addComment('replace this with your exception')
        let attributesVariable: Variable | null = null
        if (attribtues) {
            attributesVariable = new Variable('Map', 'eventData')
                .setGenerics('String', 'String')
            let attributesStatement = this.language.dictionaryInitializer(attributesVariable, attribtues, true);
            return new CodeBlock()
                .addStatement(attributesStatement)
                .addStatement(exceptionVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logException', [exceptionVariable, attributesVariable, exceptionName]))
                .toSnippet(this.language)
        } else {
            return new CodeBlock()
                .addStatement(exceptionVariable)
                .addStatement(this.mparticleGetInstance().addMethodCallSameLine('logException', [exceptionVariable, attributesVariable, exceptionName]))
                .toSnippet(this.language)
        }
    }

    createNetworkPerformanceSnippet(properties: Dictionary): string {
        let eventName = properties['event_name'];
        let startTime = properties['start_time']
        let httpMethod = properties['http_method']
        let duration = properties['duration']
        let bytesSent = properties['bytes_sent']
        let bytesReceived = properties['bytes_received']
        let responseCode = properties['response_code']
        return new Statement(this.mparticleGetInstance().addMethodCallSameLine('logNetworkPerformance', [eventName, startTime, httpMethod, duration, bytesSent, bytesReceived, "{REQUEST-STRING}", responseCode]))
            .toSnippet(this.language);

    }

    createProductActionSnippet(properties: Dictionary): string {
        const { data } = properties;

        let name = 'productName'
        let sku = 'productId'
        let quantity = 1.5
        let price = 19.99
        let productAction = data['action']

        let productVariable = new Variable('Product')
            .initializer(
                new Constructor('Product.Builder', [name, sku, price])
                    .addMethodCall('quantity', [quantity])
                    .addMethodCall('build')
            );
        let commerceEventVariable = new Variable('CommerceEvent')
            .initializer(new Constructor('CommerceEvent.Builder', [productAction, productVariable]).addMethodCall('build'))
        let logEventMethodCall = this.mparticleGetInstance().addMethodCall('logEvent', [commerceEventVariable], true);

        return new CodeBlock()
            .addStatement(productVariable)
            .addStatement(commerceEventVariable)
            .addStatement(logEventMethodCall)
            .toSnippet(this.language);
    }

    createPromotionActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;

        return `Not currently supported by Android`;
    };

    createProductImpressionSnippet(properties: Dictionary): string {
        const { data } = properties;

        let name = 'productName'
        let sku = 'productId'
        let quantity = 1.5
        let price = 19.99
        let productAction = data['action']

        let productVariable = new Variable('Product')
            .initializer(
                new Constructor('Product.Builder', [name, sku, price])
                    .addMethodCall('quantity', [quantity])
                    .addMethodCall('build')
            );
        let commerceEventVariable = new Variable('CommerceEvent')
            .initializer(new Constructor('CommerceEvent.Builder', [productAction, productVariable]).addMethodCall('build'))
        let logEventMethodCall = this.mparticleGetInstance().addMethodCall('logEvent', [commerceEventVariable], true);

        return new CodeBlock()
            .addStatement(productVariable)
            .addStatement(commerceEventVariable)
            .addStatement(logEventMethodCall)
            .toSnippet(this.language);
    }
}