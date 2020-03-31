// tslint:disable: max-line-length
import { MPSnippets } from '../src/mpSnippets';
import { Language, Dictionary } from '../src/language';
import { MPJava } from '../src/translators/java_translator';
import {
    DataPlanPoint,
    DataPlanValidator,
    DataPlanValidatorType,
    DataPlanMatch,
    DataPlanMatchType,
} from '@mparticle/data-planning-models';
import { stringify } from 'querystring';

describe('Java Snippets ', () => {
    let customAttributes = {
        'A_String_Key': 'string',
        'A Date Key': 'date-time',
        'A Number Key': 'string',
    };
    it('Custom Attributes', () => {
        let expected =
            `Map<String, String> attributes = new HashMap<>();
attributes.put("A_String_Key", "string");
attributes.put("A Date Key", "date-time");
attributes.put("A Number Key", "string");
`
        let result = new MPJava().getMapSnippet(customAttributes, 'Map<String, String>', 'attributes')
        expect(result)
            .toEqual(expected)

    });
    it('Empty Custom Attributes', () => {
        let result = new MPJava().getMapSnippet({}, 'Map<String, String>', 'attributes')
        expect(result)
            .toEqual(null)
    })

    it('Create Screen View', () => {
        let payload = {
            data: {
                screen_name: 'test event',
                custom_attributes: customAttributes
            }
        }
        let expected =
            `Map<String, String> attributes = new HashMap<>();
attributes.put("A_String_Key", "string");
attributes.put("A Date Key", "date-time");
attributes.put("A Number Key", "string");
MParticle.getInstance().logScreen("test event", attributes);`

        let result = new MPJava().createScreenViewSnippet(payload);
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
            `MParticle.getInstance().logScreen("test event");`

        let result = new MPJava().createScreenViewSnippet(payload);
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
            `Map<String, String> attributes = new HashMap<>();
attributes.put("A_String_Key", "string");
attributes.put("A Date Key", "date-time");
attributes.put("A Number Key", "string");
MPEvent event = new MPEvent.Builder("eventName", MParticle.EventType.Location)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);`

        let result = new MPJava().createCustomEventSnippet(payload);
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes', () => {
        let payload = customAttributes

        let result = new MPJava().createUserAttributesSnippet(payload)
        let expected =
            `Map<String, String> attributes = new HashMap<>();
attributes.put("A_String_Key", "string");
attributes.put("A Date Key", "date-time");
attributes.put("A Number Key", "string");
MParticleUser user = MParticle.getInstance().Identity().getCurrentUser();
user.setUserAttributes(attributes);`
        expect(result)
            .toEqual(expected)
    })
    it('Set User Attributes empty', () => {
        let result = new MPJava().createUserAttributesSnippet({})
        expect(result)
            .toEqual('')
    })
    it('Set User Identities', () => {
        let payload = {
            facebook: "facebook id",
            email: 'email@email.com',
            customerId: '1234'
        }
        let result = new MPJava().createUserIdentitiesSnippet(payload)
        let expected =
            `Map<MParticle.IdentityType, String> userIdentities = new HashMap<>();
userIdentities.put(MParticle.IdentityType.Facebook, "facebook id");
userIdentities.put(MParticle.IdentityType.Email, "email@email.com");
userIdentities.put(MParticle.IdentityType.CustomerId, "1234");
IdentityApiRequest request = IdentityApiRequest.withEmptyUser()
    .userIdentities(userIdentities)
    .build();
MParticle.getInstance().Identity().identify(request);`
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
        let result = new MPJava().createNetworkPerformanceSnippet(payload)
        let expected = `MParticle.getInstance().logNetworkPerformance("the url.com", 100, "http method", 123, 2000, 3000, "{REQUEST-STRING}", "202");`
        expect(result)
            .toEqual(expected)
    })
    it('Log Exception No Attributes', () => {
        let payload = {
            data: {
                exception_name: "the exception name"
            }
        }
        let result = new MPJava().createCrashReportSnippet(payload)
        let expected =
            `Exception exception = new Exception();    //replace this with your exception
MParticle.getInstance().logException(exception, null, "the exception name");`
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
        let result = new MPJava().createCrashReportSnippet(payload)
        let expected =
            `Map<String, String> eventData = new HashMap<>();
eventData.put("A_String_Key", "string");
eventData.put("A Date Key", "date-time");
eventData.put("A Number Key", "string");
Exception exception = new Exception();    //replace this with your exception
MParticle.getInstance().logException(exception, eventData, "the exception name");`
        expect(result)
            .toEqual(expected)
    })
})
