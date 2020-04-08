// tslint:disable: max-line-length
import { MPSnippets } from '../../../src/mpSnippets';
import { Language, Dictionary } from '../../../src/language';
import { MPJavaEvents } from '../../../src/translators/java_events_translator';
import { KotlinDecorator } from '../../../src/language-decorators/kotlin_decorator'; 

import {
    DataPlanPoint,
    DataPlanValidator,
    DataPlanValidatorType,
    DataPlanMatch,
    DataPlanMatchType,
 } from '@mparticle/data-planning-models';
import { stringify } from 'querystring';

let language = new KotlinDecorator()
let instance = new MPJavaEvents(language)

let eventApiInit = 'val eventsApi: EventsApi    //Initialize your Events API\n'

let sampleAttributes = {
    foo: "bar",
    this: "that",
    that: "this"
}

describe('Kotlin Snippets ', () => {
    
    it('Session Start Event', () => {
        let result = eventApiInit +
        `val event = SessionStartEvent()
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        expect(result)
            .toEqual(instance.createSessionStartSnippet({}))
    });

    it('Session End Event', () => {
        let result = eventApiInit +
        `val event = SessionEndEvent()
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        expect(result)
            .toEqual(instance.createSessionEndSnippet({}))
    });

    it('Custom Event With Attributes', () => {
        let result = eventApiInit +
`val attributes = mapOf(
    "foo" to "bar",
    "this" to "that",
    "that" to "this"
)
val data = CustomEventData()
    .customEventType(CustomEventData.CustomEventType.NAVIGATION)
    .eventName("the event name")
val event = CustomEvent()
    .data(data)
event.data?.customAttributes = attributes
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                custom_event_type: 'CustomEventData.CustomEventType.NAVIGATION',
                event_name: 'the event name',
                custom_attributes: sampleAttributes
            }
        }
        
        expect(result)
            .toEqual(instance.createCustomEventSnippet(payload))
    })

    it('Screen Event With Attributes', () => {
        let result = eventApiInit +
`val attributes = mapOf(
    "foo" to "bar",
    "this" to "that",
    "that" to "this"
)
val data = ScreenViewEventData()
    .screenName("the screen name")
val event = ScreenViewEvent()
    .data(data)
event.data?.customAttributes = attributes
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                screen_name: 'the screen name',
                custom_attributes: sampleAttributes
            }
        }
        expect(result)
            .toEqual(instance.createScreenViewSnippet(payload))
    })

    it('Screen Event No Attributes', () => {
        let result = eventApiInit +
`val data = ScreenViewEventData()
    .screenName("the screen name")
val event = ScreenViewEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                screen_name: 'the screen name',
            }
        }
        expect(result)
            .toEqual(instance.createScreenViewSnippet(payload))
    });

    it('Custom Event No Attributes', () => {
        let result = eventApiInit +
`val data = CustomEventData()
    .customEventType(CustomEventData.CustomEventType.NAVIGATION)
    .eventName("the event name")
val event = CustomEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                custom_event_type: 'CustomEventData.CustomEventType.NAVIGATION',
                event_name: 'the event name',
            }
        }
        
        expect(result)
            .toEqual(instance.createCustomEventSnippet(payload))
    })

    it('Log Exception with Attributes', () => {
        let result = eventApiInit +
`val attributes = mapOf(
    "foo" to "bar",
    "this" to "that",
    "that" to "this"
)
val data = CrashReportEventData()
    .message("the exception message")
val event = CrashReportEvent()
event.data?.customAttributes = attributes
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                exception_name: "the exception message",
                custom_attributes: sampleAttributes
            }
        }
        expect(result)
            .toEqual(instance.createCrashReportSnippet(payload))
    })

    it('Log Exception No Attributes', () => {
        let result = eventApiInit +
`val data = CrashReportEventData()
    .message("the exception message")
val event = CrashReportEvent()
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`

        let payload = {
            data: {
                exception_name: "the exception message",
            }
        }
        expect(result)
            .toEqual(instance.createCrashReportSnippet(payload))
    });

    it('Create OptOut Message', () => {
        let result = eventApiInit +
`val data = OptOutEventData()
    .isOptedOut(true)
val event = OptOutEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        expect(result)
            .toEqual(instance.createOptOutSnippet({}))
    })

    it('Create First Run', () => {
        let result = eventApiInit +
`val data = ApplicationStateTransitionEventData()
    .isFirstRun(true)
val event = ApplicationStateTransitionEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        expect(result)
            .toEqual(instance.createFirstRunSnippet({}))
    })

    it('Application State Transition Event', () => {
        let result = eventApiInit +
`val data = ApplicationStateTransitionEventData()
    .applicationTransitionType(ApplicationStateTransitionEventData.ApplicationTransitionTypeEnum.FOREGROUND)
val event = ApplicationStateTransitionEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        expect(result)
            .toEqual(instance.createApplicationStateTransitionSnippet({}))
    })

    it('Network Performance Event', () => {
        let result = eventApiInit +
`val data = NetworkPerformanceEventData()
    .timeElapsed(123L)
    .bytesIn(3000L)
    .bytesOut(2000L)
    .responseCode(202)
    .httpVerb("http method")
data.canonicalName("the url.com")
    .eventStartUnixtimeMs(100L)
val event = NetworkPerformanceEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        let payload = {
            event_name: "the url.com",
            start_time: 100,
            http_method: 'http method',
            duration: 123,
            bytes_sent: 2000,
            bytes_received: 3000,
            response_code: "202"
        }
        expect(result)
            .toEqual(instance.createNetworkPerformanceSnippet(payload))
    })

    it('Commerce Event, Product Action', () => {
        let result = eventApiInit +
`val product = Product()
    .name("the product name")
    .id("abc_sku")
    .quantity(BigDecimal(4))
    .price(BigDecimal(100))
val productAction = ProductAction()
    .action(ProductAction.Action.VIEW_DETAIL)
    .addProductsItem(product)
val data = CommerceEventData()
    .productAction(productAction)
val event = CommerceEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        let payload = {
            data: {
                product_name: 'the product name',
                product_sku: 'abc_sku',
                product_quantity: 4,
                product_price: 100,
                product_action: "VIEW_DETAIL"
            }
        }
        expect(result)
            .toEqual(instance.createProductActionSnippet(payload))
    })

    it('Commerce Event, Product Impression', () => {
        let result = eventApiInit +
`val product = Product()
    .name("the product name")
    .id("abc_sku")
    .quantity(BigDecimal(4))
    .price(BigDecimal(100))
val productImpression = ProductImpression()
    .productImpressionList("my impression")
    .addProductsItem(product)
val data = CommerceEventData()
    .addProductImpressionsItem(productImpression)
val event = CommerceEvent()
    .data(data)
val batch = Batch()
    .addEventsItem(event)
eventsApi.uploadEvents(batch)`
        let payload = {
            data: {
                product_name: 'the product name',
                product_sku: 'abc_sku',
                product_quantity: 4,
                product_price: 100,
                impression_name: "my impression"
            }
        }
        expect(result)
            .toEqual(instance.createProductImpressionSnippet(payload))
    })

    it('User Attributes Snippet', () => {
        let result = eventApiInit + 
`val userAttributes = mapOf(
    "foo" to "bar",
    "this" to 3,
    "baz" to true
)
val batch = Batch()
    .userAttributes(userAttributes)
eventsApi.uploadEvents(batch)`

        let payload = {
            foo: "bar",
            this: 3,
            baz: true
        }
        expect(result)
            .toEqual(instance.createUserAttributesSnippet(payload))
    })

    it('User Identity Snippet', () => {
        let result = eventApiInit +
`val userIdentities = UserIdentities()
    .facebook("facebook id")
    .email("email@email.com")
    .customerId("1234")
val batch = Batch()
    .userIdentities(userIdentities)
eventsApi.uploadEvents(batch)`
        let payload = {
            facebook: "facebook id",
            email: 'email@email.com',
            customerId: '1234'
        }
        expect(result)
            .toEqual(instance.createUserIdentitiesSnippet(payload))

    })

});