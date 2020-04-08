// tslint:disable: max-line-length
import { MPAndroid } from '../../../src/translators/android_translator';
import { KotlinDecorator } from '../../../src/language-decorators/kotlin_decorator'; 
import { Class, Variable } from '../../../src/expressions/expressions'

let language = new KotlinDecorator()
let instance: MPAndroid = new MPAndroid(language)

describe('Kotlin Snippets ', () => {
    let customAttributes = {
        'A_String_Key': 'string',
        'A Date Key': 'date-time',
        'A Number Key': 'string',
    };
    it('Custom Attributes', () => {
        let expected =
            `val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)`       
        let mapClass = new Class('Map').setGenerics('String', 'String')
        let attributesVariable = new Variable(mapClass, 'attributes')
        let result = language.dictionaryInitializer(attributesVariable, customAttributes).toSnippet(language);
        expect(result)
            .toEqual(expected)

    });

    it('Create Screen View', () => {
        let payload = {
            data: {
                screen_name: 'test event',
                custom_attributes: customAttributes
            }
        }
        let expected =
            `val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
MParticle.getInstance()?.logScreen("test event", attributes)`

        let result = instance.createScreenViewSnippet(payload);
        expect(result)
            .toEqual(expected)
    })

    it('Create Screen View Withough Attributes', () => {
        let payload = {
            data: {
                screen_name: 'test event',
            }
        }
        let expected =
            `MParticle.getInstance()?.logScreen("test event")`

        let result = instance.createScreenViewSnippet(payload);
        expect(result)
            .toEqual(expected)
    })
    it('Create Custom Event', () => {
        let payload = {
            data: {
                custom_event_type: 'location',
                event_name: 'eventName',
                custom_attributes: customAttributes
            }
        }
        let expected =
            `val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
val event = MPEvent.Builder("eventName", MParticle.EventType.Location)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)`

        let result = instance.createCustomEventSnippet(payload);
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes', () => {
        let payload = customAttributes
        let result = instance.createUserAttributesSnippet(payload)
        let expected =
            `val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
val user = MParticle.getInstance()?.Identity()?.currentUser
user?.userAttributes = attributes`
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes empty', () => {
        let result = instance.createUserAttributesSnippet({})
        expect(result)
            .toEqual('')
    })
    it('Set User Identities', () => {
        let payload = {
            facebook: "facebook id",
            email: 'email@email.com',
            customerId: '1234'
        }
        let result = instance.createUserIdentitiesSnippet(payload)
        let expected =
            `val userIdentities = mapOf(
    MParticle.IdentityType.Facebook to "facebook id",
    MParticle.IdentityType.Email to "email@email.com",
    MParticle.IdentityType.CustomerId to "1234"
)
val request = IdentityApiRequest.withEmptyUser()
    .userIdentities(userIdentities)
    .build()
MParticle.getInstance()?.Identity()?.identify(request)`
        expect(result)
            .toEqual(expected)
    })
    it('Network Performance call', () => {
        let payload = {
            event_name: "the url.com",
            start_time: 100,
            http_method: 'http method',
            duration: 123,
            bytes_sent: 2000,
            bytes_received: 3000,
            response_code: "202"
        }
        let result = instance.createNetworkPerformanceSnippet(payload)
        let expected = `MParticle.getInstance()?.logNetworkPerformance("the url.com", 100, "http method", 123, 2000, 3000, "{REQUEST-STRING}", "202")`
        expect(result)
            .toEqual(expected)
    })
    it('Log Exception No Attributes', () => {
        let payload = {
            data: {
                exception_name: "the exception name"
            }
        }
        let result = instance.createCrashReportSnippet(payload)
        let expected =
            `val exception = Exception()    //replace this with your exception
MParticle.getInstance()?.logException(exception, null, "the exception name")`
        expect(result)
            .toEqual(expected)
    })
    it('Log Exception With Attributes', () => {
        let payload = {
            data: {
                exception_name: "the exception name",
                custom_attributes: customAttributes
            }
        }
        let result = instance.createCrashReportSnippet(payload)
        let expected =
            `val eventData = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
val exception = Exception()    //replace this with your exception
MParticle.getInstance()?.logException(exception, eventData, "the exception name")`
        expect(result)
            .toEqual(expected)
    })
})
