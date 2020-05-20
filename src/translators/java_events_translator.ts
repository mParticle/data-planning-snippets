import { MPTranslator } from '../translator';
import { Dictionary, Language } from '../language';
import { CodeBlock } from '../expressions/code_block';
import { Constructor, Variable, ValueExpression, Expression } from '../expressions/expressions';
import { LanguageDecorator } from '../language-decorators/language_decorator';

export class MPJavaEvents implements MPTranslator {
    language: LanguageDecorator;
    eventsApiVariable = () => new Variable("EventsApi")
        .addComment("Initialize your Events API") as Variable

    constructor(language: LanguageDecorator) {
        this.language = language;
    }

    private getAttributesVariable(attributes: Dictionary): Variable {
        let variable = new Variable("Map", "attributes")
            .setGenerics("String", "String")
        return this.language.dictionaryInitializer(variable, attributes, true)
    }

    private createBatchAddEventAndSend(eventVariable: Variable): Expression[] {
        let batchVariable = new Variable("Batch")
            .addDefaultInitializer(x => x.addMethodCall("addEventsItem", [eventVariable]))
        let uploadEventMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable])
        return [batchVariable, uploadEventMethodCall]
    }

    createSessionStartSnippet(properties: Dictionary): string {
        let eventInitialization = new Variable("SessionStartEvent", "event")
            .addDefaultInitializer()
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventInitialization)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(eventInitialization)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    }

    createSessionEndSnippet(properties: Dictionary): string {
        let eventInitialization = new Variable("SessionEndEvent", "event")
            .addDefaultInitializer()
        let batchVariable = new Variable("Batch")
            .addDefaultInitializer(x => x.addMethodCall("addEventsItem", [eventInitialization]))
        let uploadEventMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable])
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(eventInitialization)
            .addStatement(batchVariable)
            .addStatement(uploadEventMethodCall)
            .toSnippet(this.language);
    }

    createScreenViewSnippet(properties: Dictionary): string {
        const { data } = properties
        let attributes = data['custom_attributes']
        let screenName = data['screen_name']

        let dataVariable = new Variable("ScreenViewEventData", "data")
            .addDefaultInitializer(x => x.addMethodCall("screenName", ['the screen name']))
        let eventVariable = new Variable("ScreenViewEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadStuff = this.createBatchAddEventAndSend(eventVariable)

        let codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadStuff)
        if (attributes && Object.keys(attributes).length > 0) {
            let attributesVariable = this.getAttributesVariable(attributes)
            let setAttributesMethodCall = eventVariable
                .createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable])
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4)
        }
        return codeBlock.toSnippet(this.language)
    }

    createCustomEventSnippet(properties: Dictionary): string {
        const { data } = properties;
        let eventType = data['custom_event_type']
        let eventName = data['event_name']
        let attributes = data['custom_attributes']

        let dataVariable = new Variable("CustomEventData", "data")
            .addDefaultInitializer(x =>
                x
                    .addMethodCall("customEventType", [new ValueExpression(eventType, false)])
                    .addMethodCall("eventName", [eventName]))
        let eventVariable = new Variable("CustomEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)

        let codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
        if (attributes && Object.keys(attributes).length > 0) {
            let attributesVariable = this.getAttributesVariable(attributes)
            let setAttributesMethodCall = eventVariable.createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable])
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4)
        }
        return codeBlock.toSnippet(this.language)
    }

    createCrashReportSnippet(properties: Dictionary): string {
        const { data } = properties
        let exceptionName = data['exception_name']
        let attributes = data['custom_attributes'];

        let dataVariable = new Variable("CrashReportEventData", 'data')
            .addDefaultInitializer(x => x.addMethodCall("message", [exceptionName]))
        let eventVariable = new Variable("CrashReportEvent", "event")
            .addDefaultInitializer()
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)

        let codeBlock = new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
        if (attributes && Object.keys(attributes).length > 0) {
            let attributesVariable = this.getAttributesVariable(attributes)
            let setAttributesMethodCall = eventVariable.createMethodCall("getData", [], true)
                .addMethodCallSameLine("setCustomAttributes", [attributesVariable])
            codeBlock
                .addStatement(attributesVariable, 1)
                .addStatement(setAttributesMethodCall, 4)
        }
        return codeBlock.toSnippet(this.language)

    }

    createOptOutSnippet(properties: Dictionary): string {
        let dataVariable = new Variable("OptOutEventData", "data")
            .addDefaultInitializer(x => x.addMethodCall("isOptedOut", [true]))
        let eventVariable = new Variable("OptOutEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language)
    }

    createFirstRunSnippet(properties: Dictionary): string {
        let dataVariable = new Variable("ApplicationStateTransitionEventData", "data")
            .addDefaultInitializer(x => x.addMethodCall("isFirstRun", [true]))
        let eventVariable = new Variable("ApplicationStateTransitionEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language)
    }

    createApplicationStateTransitionSnippet(properties: Dictionary): string {
        let dataVariable = new Variable("ApplicationStateTransitionEventData", "data")
            .addDefaultInitializer(x =>
                x.addMethodCall(
                    "applicationTransitionType",
                    [new ValueExpression("ApplicationStateTransitionEventData.ApplicationTransitionTypeEnum.FOREGROUND", false)])
            )
        let eventVariable = new Variable("ApplicationStateTransitionEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language)
    }

    createNetworkPerformanceSnippet(properties: Dictionary): string {
        let eventName = properties['event_name'];
        let startTime = properties['start_time']
        let httpMethod = properties['http_method']
        let duration = properties['duration']
        let bytesSent = properties['bytes_sent']
        let bytesReceived = properties['bytes_received']
        let responseCode = properties['response_code']

        let dataVariable = new Variable("NetworkPerformanceEventData", "data")
            .addDefaultInitializer(x => {
                x
                    .addMethodCall("timeElapsed", [new ValueExpression(duration + "L", false)])
                    .addMethodCall("bytesIn", [new ValueExpression(bytesReceived + "L", false)])
                    .addMethodCall("bytesOut", [new ValueExpression(bytesSent + "L", false)])
                    .addMethodCall("responseCode", [new ValueExpression([responseCode], false)])
                    .addMethodCall("httpVerb", [httpMethod])
            })
        let dataMethodCalls = dataVariable
            .createMethodCall("canonicalName", [eventName])
            .addMethodCall("eventStartUnixtimeMs", [new ValueExpression(startTime + "L", false)])
        let eventVariable = new Variable("NetworkPerformanceEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(dataMethodCalls)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    }

    createBreadcrumbSnippet(properties: Dictionary): string {
        let eventName = properties['event_name'];
        let dataVariable = new Variable("BreadcrumbEventData")
            .addDefaultInitializer(x => x.addMethodCall("label", [eventName]))
        let eventVariable = new Variable("BreadcrumbEvent")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable)
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language)
    }

    createProfileSnippet(properties: Dictionary): string {
        return "";
    }

    createCommerceSnippet(properties: Dictionary): string {
        return 'A generic commerce event should never be included in a data plan';
    }

    createUserAttributeChangeSnippet(properties: Dictionary): string {
        return '//A generic attribute change event should never be included in a data plan';
    }

    createUserIdentityChangeSnippet(properties: Dictionary): string {
        return '//A generic identity change event should never be included in a data plan';
    }

    createUninstallSnippet(properties: Dictionary): string {
        return '//Uninstall events are not manually tracked'
    }

    createMediaSnippet(properties: Dictionary): string {
        return '//This SDK does not support Media Events'
    }

    createUserAttributesSnippet(properties: Dictionary): string {
        let userAttributesVariable = new Variable("Map", "userAttributes")
            .setGenerics("String", "Object")
        this.language.dictionaryInitializer(userAttributesVariable, properties)
        let batchVariable = new Variable("Batch")
            .addDefaultInitializer(x => x.addMethodCall('userAttributes', [userAttributesVariable]))
        let eventsUploadMethodCall = this.eventsApiVariable().createMethodCall('uploadEvents', [batchVariable])
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(userAttributesVariable)
            .addStatement(batchVariable)
            .addStatement(eventsUploadMethodCall)
            .toSnippet(this.language)
    }

    createUserIdentitiesSnippet(properties: Dictionary): string {
        let userIdentitesVariable = new Variable("UserIdentities")
            .addDefaultInitializer(x => {
                for (const key in properties) {
                    x.addMethodCall(key.toString(), [properties[key]])
                }
            });
        let batchVariable = new Variable("Batch")
            .addDefaultInitializer(x => x.addMethodCall("userIdentities", [userIdentitesVariable]))
        let eventsUploadMethodCall = this.eventsApiVariable().createMethodCall("uploadEvents", [batchVariable])
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(userIdentitesVariable)
            .addStatement(batchVariable)
            .addStatement(eventsUploadMethodCall)
            .toSnippet(this.language)
    }

    createProductActionSnippet(properties: Dictionary): string {
        let { data } = properties
        let name = data['product_name']
        let sku = data['product_sku']
        let quantity = data['product_quantity']
        let price = data['product_price']
        let productAction = data['product_action']

        let productVariable = new Variable("Product")
            .addDefaultInitializer(x => {
                x
                    .addMethodCall("name", [name])
                    .addMethodCall("id", [sku])
                    .addMethodCall("quantity", [new Constructor("BigDecimal", [quantity])])
                    .addMethodCall('price', [new Constructor("BigDecimal", [price])])
            })
        let productActionVariable = new Variable("ProductAction")
            .addDefaultInitializer(x => {
                x
                    .addMethodCall("action", [new ValueExpression("ProductAction.Action." + productAction, false)])
                    .addMethodCall("addProductsItem", [productVariable])
            })
        let dataVariable = new Variable("CommerceEventData", "data")
            .addDefaultInitializer(x => x.addMethodCall("productAction", [productActionVariable]))
        let eventVariable = new Variable("CommerceEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(productVariable)
            .addStatement(productActionVariable)
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    }

    createPromotionActionSnippet = (exampleJSON: Dictionary) => {
        const { data } = exampleJSON;

        return `Not currently supported by data plan V1`;
    };

    createProductImpressionSnippet(properties: Dictionary): string {
        let { data } = properties
        let name = data['product_name']
        let sku = data['product_sku']
        let quantity = data['product_quantity']
        let price = data['product_price']
        let impressionName = data['impression_name']

        let productVariable = new Variable("Product")
            .addDefaultInitializer(x => {
                x
                    .addMethodCall("name", [name])
                    .addMethodCall("id", [sku])
                    .addMethodCall("quantity", [new Constructor("BigDecimal", [quantity])])
                    .addMethodCall('price', [new Constructor("BigDecimal", [price])])
            })
        let productImpressionVariable = new Variable("ProductImpression")
            .addDefaultInitializer(x => {
                x
                    .addMethodCall("productImpressionList", [impressionName])
                    .addMethodCall("addProductsItem", [productVariable])
            })
        let dataVariable = new Variable("CommerceEventData", "data")
            .addDefaultInitializer(x => x.addMethodCall("addProductImpressionsItem", [productImpressionVariable]))
        let eventVariable = new Variable("CommerceEvent", "event")
            .addDefaultInitializer(x => x.addMethodCall("data", [dataVariable]))
        let uploadEventMethodCall = this.createBatchAddEventAndSend(eventVariable);
        return new CodeBlock()
            .addStatement(this.eventsApiVariable())
            .addStatement(productVariable)
            .addStatement(productImpressionVariable)
            .addStatement(dataVariable)
            .addStatement(eventVariable)
            .addStatements(uploadEventMethodCall)
            .toSnippet(this.language);
    }
}