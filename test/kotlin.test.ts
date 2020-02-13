// tslint:disable: max-line-length
import { MPSnippets } from '../src/mpSnippets';
import { Language, Dictionary } from '../src/language';
import { MPKotlin } from '../src/translators/kotlin_translator';
import {
    DataPlanPoint,
    DataPlanValidator,
    DataPlanValidatorType,
    DataPlanMatch,
    DataPlanMatchType,
 } from '@mparticle/data-planning-models';
import { stringify } from 'querystring';

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
)
`
        let result = new MPKotlin().getMapSnippet(customAttributes, 'Map<String, String>', 'attributes')
        expect(result)
            .toEqual(expected)

    });
    it('Empty Custom Attributes', () => {
        let result = new MPKotlin().getMapSnippet({}, 'Map<String, String>', 'attributes')
        expect(result)
            .toEqual(null)
    })

    it('Create Screen View', () => {
        let payload = {
            screen_name: 'test event',
            custom_attributes: customAttributes
        }
        let expected = 
`val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
MParticle.getInstance()?.logScreen("test event", attributes)`
        
        let result = new MPKotlin().createScreenViewSnippet(payload);
        expect(result)
            .toEqual(expected)
    })

    it('Create Screen View Withough Attributes', () => {
        let payload = {
            screen_name: 'test event',
        }
        let expected = 
`MParticle.getInstance()?.logScreen("test event")`
        
        let result = new MPKotlin().createScreenViewSnippet(payload);
        expect(result)
            .toEqual(expected)
    })
    it('Create Custom Event', () => {
        let payload = {
            custom_event_type: 'location',
            event_name: 'eventName',
            custom_attributes: customAttributes
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
        
        let result = new MPKotlin().createCustomEventSnippet(payload);
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes', () => {
        let payload = customAttributes
        let result = new MPKotlin().createUserAttributesSnippet(payload)
        let expected = 
`val attributes = mapOf(
    "A_String_Key" to "string",
    "A Date Key" to "date-time",
    "A Number Key" to "string"
)
val user = MParticle.getInstance()?.Identity()?.currentUser
user?.setUserAttributes(attributes)`
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes empty', () => {
        let result = new MPKotlin().createUserAttributesSnippet({})
        expect(result)
            .toEqual('')
    })
    it('Set User Identities', () => {
        let payload = {
            facebook: "facebook id",
            email: 'email@email.com',
            customerId: '1234'
        }
        let result = new MPKotlin().createUserIdentitiesSnippet(payload)
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
        let result = new MPKotlin().createNetworkPerformanceSnippet(payload)
        let expected = `MParticle.getInstance()?.logNetworkPerformance("the url.com", 100, "http method", 123, 2000, 3000, "{REQUEST-STRING}", "202")`
        expect(result)
            .toEqual(expected)
    })
    it('Log Exception No Attributes', () => {
        let payload = {
            exception_name: "the exception name"
        }
        let result = new MPKotlin().createCrashReportSnippet(payload)
        let expected = 
`val exception = Exception()    //replace this with your exception
MParticle.getInstance()?.logException(exception, null, "the exception name")`
        expect(result)
            .toEqual(expected)
    })
    it('Log Exception With Attributes', () => {
        let payload = {
            exception_name: "the exception name",
            custom_attributes: customAttributes
        }
        let result = new MPKotlin().createCrashReportSnippet(payload)
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
