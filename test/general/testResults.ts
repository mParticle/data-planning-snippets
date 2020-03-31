export class Results {
    static readonly wholeObjC = `\
// Data Plan Point 1
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"event name" type: MPEventTypeTransaction];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"A_String_Key"] = @"non";
eventInfo[@"A Date Key"] = @"2006-12-23T04:29:08.365Z";
eventInfo[@"A Number Key"] = @5.0906951716;
eventInfo[@"A Bool Key"] = @true;

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 2
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Simple Event Name" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"SimpleKey"] = @"eu dolore aute";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 3
// 
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Launch"] = @"FaLse";

[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];



// Data Plan Point 4
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Timed Event" type: MPEventTypeTransaction];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"EventLength"] = @"46815516954.4";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 5
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Simple Event" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"SimpleKey"] = @"labore ipsum irure";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 6
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"First Selection Time" type: MPEventTypeNavigation];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"title"] = @"nisi irure";
eventInfo[@"EventLength"] = @"10";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 7
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Video Playback" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"title"] = @"nostrud est ut aute";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 8
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Video Changed Rate" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Rate"] = @"-870743973.1e293828302";
eventInfo[@"title"] = @"ea occaecat esse";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 9
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"play" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"content_id"] = @"223015.501";
eventInfo[@"stream_type"] = @"amet reprehenderit in aute";
eventInfo[@"media_session_id"] = @"o";
eventInfo[@"content_duration"] = @"-440540155";
eventInfo[@"content_title"] = @"laborum esse sunt officia";
eventInfo[@"content_type"] = @"laborum voluptate ex";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 10
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Session Start" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"media_session_id"] = @"ut laboris";
eventInfo[@"content_duration"] = @"-825205";
eventInfo[@"content_type"] = @"ullamco et";
eventInfo[@"content_title"] = @"consectetur velit magna commodo anim";
eventInfo[@"stream_type"] = @"velit dolor Lorem elit officia";
eventInfo[@"content_id"] = @"-082E+623365";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 11
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Session End" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"content_duration"] = @"13780778.38339081";
eventInfo[@"stream_type"] = @"nisi Except";
eventInfo[@"media_session_id"] = @"sunt id laborum sint pariatur";
eventInfo[@"content_type"] = @"enim ut quis aliqua labore";
eventInfo[@"content_title"] = @"elit ullamco sint voluptate";
eventInfo[@"content_id"] = @"22006708.045";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 12
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@"Media Content End" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"content_duration"] = @"-7030355303E972986971";
eventInfo[@"content_type"] = @"esse ut";
eventInfo[@"content_id"] = @"-865711.6863";
eventInfo[@"content_title"] = @"esse";
eventInfo[@"media_session_id"] = @"consequat";
eventInfo[@"stream_type"] = @"ut non ea deserunt";

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 13
// User Attributes
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"example attribute key" value:@"esse Excepteur sit ipsum"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$Age" value:@"961.138597"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"$gender" value:@"aliquip enim id do"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"Achieved Level" value:@"-33028890.365"];



`;

    static readonly wholeSwift = `\
// Data Plan Point 1
// 
let customEvent = MPEvent.init(name: "event name", type: .transaction)
var eventInfo = [String: Any].init()
eventInfo["A_String_Key"] = "non"
eventInfo["A Date Key"] = "2006-12-23T04:29:08.365Z"
eventInfo["A Number Key"] = 5.0906951716
eventInfo["A Bool Key"] = true
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 2
// 
let customEvent = MPEvent.init(name: "Simple Event Name", type: .other)
var eventInfo = [String: Any].init()
eventInfo["SimpleKey"] = "eu dolore aute"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 3
// 
var eventInfo = [String: Any].init()
eventInfo["Launch"] = "FaLse"
MParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)



// Data Plan Point 4
// 
let customEvent = MPEvent.init(name: "Timed Event", type: .transaction)
var eventInfo = [String: Any].init()
eventInfo["EventLength"] = "46815516954.4"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 5
// 
let customEvent = MPEvent.init(name: "Simple Event", type: .other)
var eventInfo = [String: Any].init()
eventInfo["SimpleKey"] = "labore ipsum irure"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 6
// 
let customEvent = MPEvent.init(name: "First Selection Time", type: .navigation)
var eventInfo = [String: Any].init()
eventInfo["title"] = "nisi irure"
eventInfo["EventLength"] = "10"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 7
// 
let customEvent = MPEvent.init(name: "Video Playback", type: .other)
var eventInfo = [String: Any].init()
eventInfo["title"] = "nostrud est ut aute"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 8
// 
let customEvent = MPEvent.init(name: "Video Changed Rate", type: .other)
var eventInfo = [String: Any].init()
eventInfo["Rate"] = "-870743973.1e293828302"
eventInfo["title"] = "ea occaecat esse"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 9
// 
let customEvent = MPEvent.init(name: "play", type: .other)
var eventInfo = [String: Any].init()
eventInfo["content_id"] = "223015.501"
eventInfo["stream_type"] = "amet reprehenderit in aute"
eventInfo["media_session_id"] = "o"
eventInfo["content_duration"] = "-440540155"
eventInfo["content_title"] = "laborum esse sunt officia"
eventInfo["content_type"] = "laborum voluptate ex"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 10
// 
let customEvent = MPEvent.init(name: "Session Start", type: .other)
var eventInfo = [String: Any].init()
eventInfo["media_session_id"] = "ut laboris"
eventInfo["content_duration"] = "-825205"
eventInfo["content_type"] = "ullamco et"
eventInfo["content_title"] = "consectetur velit magna commodo anim"
eventInfo["stream_type"] = "velit dolor Lorem elit officia"
eventInfo["content_id"] = "-082E+623365"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 11
// 
let customEvent = MPEvent.init(name: "Session End", type: .other)
var eventInfo = [String: Any].init()
eventInfo["content_duration"] = "13780778.38339081"
eventInfo["stream_type"] = "nisi Except"
eventInfo["media_session_id"] = "sunt id laborum sint pariatur"
eventInfo["content_type"] = "enim ut quis aliqua labore"
eventInfo["content_title"] = "elit ullamco sint voluptate"
eventInfo["content_id"] = "22006708.045"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 12
// 
let customEvent = MPEvent.init(name: "Media Content End", type: .other)
var eventInfo = [String: Any].init()
eventInfo["content_duration"] = "-7030355303E972986971"
eventInfo["content_type"] = "esse ut"
eventInfo["content_id"] = "-865711.6863"
eventInfo["content_title"] = "esse"
eventInfo["media_session_id"] = "consequat"
eventInfo["stream_type"] = "ut non ea deserunt"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 13
// User Attributes
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("example attribute key", value: "esse Excepteur sit ipsum")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("$Age", value: "961.138597")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("$gender", value: "aliquip enim id do")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute("Achieved Level", value: "-33028890.365")



`;

    static readonly wholeJava = `\
// Data Plan Point 1
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("A_String_Key", "non");
attributes.put("A Date Key", "2006-12-23T04:29:08.365Z");
attributes.put("A Number Key", "5.0906951716");
attributes.put("A Bool Key", "true");
MPEvent event = new MPEvent.Builder("event name", MParticle.EventType.Transaction)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 2
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("SimpleKey", "eu dolore aute");
MPEvent event = new MPEvent.Builder("Simple Event Name", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 3
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("Launch", "FaLse");
MParticle.getInstance().logScreen("Video Streams", attributes);


// Data Plan Point 4
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("EventLength", "46815516954.4");
MPEvent event = new MPEvent.Builder("Timed Event", MParticle.EventType.Transaction)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 5
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("SimpleKey", "labore ipsum irure");
MPEvent event = new MPEvent.Builder("Simple Event", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 6
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("title", "nisi irure");
attributes.put("EventLength", "10");
MPEvent event = new MPEvent.Builder("First Selection Time", MParticle.EventType.Navigation)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 7
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("title", "nostrud est ut aute");
MPEvent event = new MPEvent.Builder("Video Playback", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 8
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("Rate", "-870743973.1e293828302");
attributes.put("title", "ea occaecat esse");
MPEvent event = new MPEvent.Builder("Video Changed Rate", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 9
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("content_id", "223015.501");
attributes.put("stream_type", "amet reprehenderit in aute");
attributes.put("media_session_id", "o");
attributes.put("content_duration", "-440540155");
attributes.put("content_title", "laborum esse sunt officia");
attributes.put("content_type", "laborum voluptate ex");
MPEvent event = new MPEvent.Builder("play", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 10
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("media_session_id", "ut laboris");
attributes.put("content_duration", "-825205");
attributes.put("content_type", "ullamco et");
attributes.put("content_title", "consectetur velit magna commodo anim");
attributes.put("stream_type", "velit dolor Lorem elit officia");
attributes.put("content_id", "-082E+623365");
MPEvent event = new MPEvent.Builder("Session Start", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 11
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("content_duration", "13780778.38339081");
attributes.put("stream_type", "nisi Except");
attributes.put("media_session_id", "sunt id laborum sint pariatur");
attributes.put("content_type", "enim ut quis aliqua labore");
attributes.put("content_title", "elit ullamco sint voluptate");
attributes.put("content_id", "22006708.045");
MPEvent event = new MPEvent.Builder("Session End", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 12
// 
Map<String, String> attributes = new HashMap<>();
attributes.put("content_duration", "-7030355303E972986971");
attributes.put("content_type", "esse ut");
attributes.put("content_id", "-865711.6863");
attributes.put("content_title", "esse");
attributes.put("media_session_id", "consequat");
attributes.put("stream_type", "ut non ea deserunt");
MPEvent event = new MPEvent.Builder("Media Content End", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 13
// User Attributes
Map<String, String> attributes = new HashMap<>();
attributes.put("example attribute key", "esse Excepteur sit ipsum");
attributes.put("$Age", "961.138597");
attributes.put("$gender", "aliquip enim id do");
attributes.put("Achieved Level", "-33028890.365");
MParticleUser user = MParticle.getInstance().Identity().getCurrentUser();
user.setUserAttributes(attributes);


`;

    static readonly wholeKotlin = `\
// Data Plan Point 1
// 
val attributes = mapOf(
    "A_String_Key" to "non",
    "A Date Key" to "2006-12-23T04:29:08.365Z",
    "A Number Key" to "5.0906951716",
    "A Bool Key" to "true"
)
val event = MPEvent.Builder("event name", MParticle.EventType.Transaction)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 2
// 
val attributes = mapOf(
    "SimpleKey" to "eu dolore aute"
)
val event = MPEvent.Builder("Simple Event Name", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 3
// 
val attributes = mapOf(
    "Launch" to "FaLse"
)
MParticle.getInstance()?.logScreen("Video Streams", attributes)


// Data Plan Point 4
// 
val attributes = mapOf(
    "EventLength" to "46815516954.4"
)
val event = MPEvent.Builder("Timed Event", MParticle.EventType.Transaction)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 5
// 
val attributes = mapOf(
    "SimpleKey" to "labore ipsum irure"
)
val event = MPEvent.Builder("Simple Event", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 6
// 
val attributes = mapOf(
    "title" to "nisi irure",
    "EventLength" to "10"
)
val event = MPEvent.Builder("First Selection Time", MParticle.EventType.Navigation)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 7
// 
val attributes = mapOf(
    "title" to "nostrud est ut aute"
)
val event = MPEvent.Builder("Video Playback", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 8
// 
val attributes = mapOf(
    "Rate" to "-870743973.1e293828302",
    "title" to "ea occaecat esse"
)
val event = MPEvent.Builder("Video Changed Rate", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 9
// 
val attributes = mapOf(
    "content_id" to "223015.501",
    "stream_type" to "amet reprehenderit in aute",
    "media_session_id" to "o",
    "content_duration" to "-440540155",
    "content_title" to "laborum esse sunt officia",
    "content_type" to "laborum voluptate ex"
)
val event = MPEvent.Builder("play", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 10
// 
val attributes = mapOf(
    "media_session_id" to "ut laboris",
    "content_duration" to "-825205",
    "content_type" to "ullamco et",
    "content_title" to "consectetur velit magna commodo anim",
    "stream_type" to "velit dolor Lorem elit officia",
    "content_id" to "-082E+623365"
)
val event = MPEvent.Builder("Session Start", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 11
// 
val attributes = mapOf(
    "content_duration" to "13780778.38339081",
    "stream_type" to "nisi Except",
    "media_session_id" to "sunt id laborum sint pariatur",
    "content_type" to "enim ut quis aliqua labore",
    "content_title" to "elit ullamco sint voluptate",
    "content_id" to "22006708.045"
)
val event = MPEvent.Builder("Session End", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 12
// 
val attributes = mapOf(
    "content_duration" to "-7030355303E972986971",
    "content_type" to "esse ut",
    "content_id" to "-865711.6863",
    "content_title" to "esse",
    "media_session_id" to "consequat",
    "stream_type" to "ut non ea deserunt"
)
val event = MPEvent.Builder("Media Content End", MParticle.EventType.Media)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 13
// User Attributes
val attributes = mapOf(
    "example attribute key" to "esse Excepteur sit ipsum",
    "$Age" to "961.138597",
    "$gender" to "aliquip enim id do",
    "Achieved Level" to "-33028890.365"
)
val user = MParticle.getInstance()?.Identity()?.currentUser
user?.setUserAttributes(attributes)


`;

    static readonly wholeJS = `\
// Data Plan Point 1
// 
let customAttributes = {
    A_String_Key: "non",
    A Date Key: "2006-12-23T04:29:08.365Z",
    A Number Key: 5.0906951716,
    A Bool Key: true,
};
mParticle.logEvent('event name', mParticle.EventType.Transaction, customAttributes)


// Data Plan Point 2
// 
let customAttributes = {
    SimpleKey: "eu dolore aute",
};
mParticle.logEvent('Simple Event Name', mParticle.EventType.Other, customAttributes)


// Data Plan Point 3
// 
let customAttributes = {
    Launch: "FaLse",
};
mParticle.logPageView('Video Streams', customAttributes)


// Data Plan Point 4
// 
let customAttributes = {
    EventLength: "46815516954.4",
};
mParticle.logEvent('Timed Event', mParticle.EventType.Transaction, customAttributes)


// Data Plan Point 5
// 
let customAttributes = {
    SimpleKey: "labore ipsum irure",
};
mParticle.logEvent('Simple Event', mParticle.EventType.Other, customAttributes)


// Data Plan Point 6
// 
let customAttributes = {
    title: "nisi irure",
    EventLength: "10",
};
mParticle.logEvent('First Selection Time', mParticle.EventType.Navigation, customAttributes)


// Data Plan Point 7
// 
let customAttributes = {
    title: "nostrud est ut aute",
};
mParticle.logEvent('Video Playback', mParticle.EventType.Other, customAttributes)


// Data Plan Point 8
// 
let customAttributes = {
    Rate: "-870743973.1e293828302",
    title: "ea occaecat esse",
};
mParticle.logEvent('Video Changed Rate', mParticle.EventType.Other, customAttributes)


// Data Plan Point 9
// 
let customAttributes = {
    content_id: "223015.501",
    stream_type: "amet reprehenderit in aute",
    media_session_id: "o",
    content_duration: "-440540155",
    content_title: "laborum esse sunt officia",
    content_type: "laborum voluptate ex",
};
mParticle.logEvent('play', mParticle.EventType.Other, customAttributes)


// Data Plan Point 10
// 
let customAttributes = {
    media_session_id: "ut laboris",
    content_duration: "-825205",
    content_type: "ullamco et",
    content_title: "consectetur velit magna commodo anim",
    stream_type: "velit dolor Lorem elit officia",
    content_id: "-082E+623365",
};
mParticle.logEvent('Session Start', mParticle.EventType.Other, customAttributes)


// Data Plan Point 11
// 
let customAttributes = {
    content_duration: "13780778.38339081",
    stream_type: "nisi Except",
    media_session_id: "sunt id laborum sint pariatur",
    content_type: "enim ut quis aliqua labore",
    content_title: "elit ullamco sint voluptate",
    content_id: "22006708.045",
};
mParticle.logEvent('Session End', mParticle.EventType.Other, customAttributes)


// Data Plan Point 12
// 
let customAttributes = {
    content_duration: "-7030355303E972986971",
    content_type: "esse ut",
    content_id: "-865711.6863",
    content_title: "esse",
    media_session_id: "consequat",
    stream_type: "ut non ea deserunt",
};
mParticle.logEvent('Media Content End', mParticle.EventType.Other, customAttributes)


// Data Plan Point 13
// User Attributes
mParticle.Identity.getCurrentUser().setUserAttribute("example attribute key", "esse Excepteur sit ipsum")
mParticle.Identity.getCurrentUser().setUserAttribute("$Age", "961.138597")
mParticle.Identity.getCurrentUser().setUserAttribute("$gender", "aliquip enim id do")
mParticle.Identity.getCurrentUser().setUserAttribute("Achieved Level", "-33028890.365")



`;
}