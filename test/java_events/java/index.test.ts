// tslint:disable: max-line-length
import { MPJavaEvents } from '../../../src/translators/java_events_translator';
import { JavaDecorator } from '../../../src/language-decorators/java_decorator';

let language = new JavaDecorator()
let instance = new MPJavaEvents(language)

let eventApiInit = 'EventsApi eventsApi;    //Initialize your Events API\n'

let sampleAttributes = {
    foo: "bar",
    this: "that",
    that: "this"
}

describe('Java Snippets ', () => {
    
    it('Session Start Event', () => {
        let result = eventApiInit +
        `SessionStartEvent event = new SessionStartEvent();
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
        expect(result)
            .toEqual(instance.createSessionStartSnippet({}))
    });

    it('Session End Event', () => {
        let result = eventApiInit +
        `SessionEndEvent event = new SessionEndEvent();
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
        expect(result)
            .toEqual(instance.createSessionEndSnippet({}))
    });

    it('Custom Event With Attributes', () => {
        let result = eventApiInit +
`Map<String, String> attributes = new HashMap<>();
attributes.put("foo", "bar");
attributes.put("this", "that");
attributes.put("that", "this");
CustomEventData data = new CustomEventData()
    .customEventType(CustomEventData.CustomEventType.NAVIGATION)
    .eventName("the event name");
CustomEvent event = new CustomEvent()
    .data(data);
event.getData().setCustomAttributes(attributes);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`Map<String, String> attributes = new HashMap<>();
attributes.put("foo", "bar");
attributes.put("this", "that");
attributes.put("that", "this");
ScreenViewEventData data = new ScreenViewEventData()
    .screenName("the screen name");
ScreenViewEvent event = new ScreenViewEvent()
    .data(data);
event.getData().setCustomAttributes(attributes);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`ScreenViewEventData data = new ScreenViewEventData()
    .screenName("the screen name");
ScreenViewEvent event = new ScreenViewEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`CustomEventData data = new CustomEventData()
    .customEventType(CustomEventData.CustomEventType.NAVIGATION)
    .eventName("the event name");
CustomEvent event = new CustomEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`Map<String, String> attributes = new HashMap<>();
attributes.put("foo", "bar");
attributes.put("this", "that");
attributes.put("that", "this");
CrashReportEventData data = new CrashReportEventData()
    .message("the exception message");
CrashReportEvent event = new CrashReportEvent();
event.getData().setCustomAttributes(attributes);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`CrashReportEventData data = new CrashReportEventData()
    .message("the exception message");
CrashReportEvent event = new CrashReportEvent();
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`

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
`OptOutEventData data = new OptOutEventData()
    .isOptedOut(true);
OptOutEvent event = new OptOutEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
        expect(result)
            .toEqual(instance.createOptOutSnippet({}))
    })

    it('Create First Run', () => {
        let result = eventApiInit +
`ApplicationStateTransitionEventData data = new ApplicationStateTransitionEventData()
    .isFirstRun(true);
ApplicationStateTransitionEvent event = new ApplicationStateTransitionEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
        expect(result)
            .toEqual(instance.createFirstRunSnippet({}))
    })

    it('Application State Transition Event', () => {
        let result = eventApiInit +
`ApplicationStateTransitionEventData data = new ApplicationStateTransitionEventData()
    .applicationTransitionType(ApplicationStateTransitionEventData.ApplicationTransitionTypeEnum.FOREGROUND);
ApplicationStateTransitionEvent event = new ApplicationStateTransitionEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
        expect(result)
            .toEqual(instance.createApplicationStateTransitionSnippet({}))
    })

    it('Network Performance Event', () => {
        let result = eventApiInit +
`NetworkPerformanceEventData data = new NetworkPerformanceEventData()
    .timeElapsed(123L)
    .bytesIn(3000L)
    .bytesOut(2000L)
    .responseCode(202)
    .httpVerb("http method");
data.canonicalName("the url.com")
    .eventStartUnixtimeMs(100L);
NetworkPerformanceEvent event = new NetworkPerformanceEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
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
`Product product = new Product()
    .name("the product name")
    .id("abc_sku")
    .quantity(new BigDecimal(4))
    .price(new BigDecimal(100));
ProductAction productAction = new ProductAction()
    .action(ProductAction.Action.VIEW_DETAIL)
    .addProductsItem(product);
CommerceEventData data = new CommerceEventData()
    .productAction(productAction);
CommerceEvent event = new CommerceEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
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
`Product product = new Product()
    .name("the product name")
    .id("abc_sku")
    .quantity(new BigDecimal(4))
    .price(new BigDecimal(100));
ProductImpression productImpression = new ProductImpression()
    .productImpressionList("my impression")
    .addProductsItem(product);
CommerceEventData data = new CommerceEventData()
    .addProductImpressionsItem(productImpression);
CommerceEvent event = new CommerceEvent()
    .data(data);
Batch batch = new Batch()
    .addEventsItem(event);
eventsApi.uploadEvents(batch);`
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
`Map<String, Object> userAttributes = new HashMap<>();
userAttributes.put("foo", "bar");
userAttributes.put("this", 3);
userAttributes.put("baz", true);
Batch batch = new Batch()
    .userAttributes(userAttributes);
eventsApi.uploadEvents(batch);`

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
`UserIdentities userIdentities = new UserIdentities()
    .facebook("facebook id")
    .email("email@email.com")
    .customerId("1234");
Batch batch = new Batch()
    .userIdentities(userIdentities);
eventsApi.uploadEvents(batch);`
        let payload = {
            facebook: "facebook id",
            email: 'email@email.com',
            customerId: '1234'
        }
        expect(result)
            .toEqual(instance.createUserIdentitiesSnippet(payload))

    })

});