export class Results {
    static readonly wholeObjC = `\
// Data Plan Point 1
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomAttribution\" type: MPEventTypeOther];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 2
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomNavigation\" type: MPEventTypeNavigation];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 3
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomLocation\" type: MPEventTypeLocation];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 4
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomSearch\" type: MPEventTypeSearch];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 5
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomTransaction\" type: MPEventTypeTransaction];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 6
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomUserContent\" type: MPEventTypeUserContent];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 7
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomUserPreference\" type: MPEventTypeUserPreference];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 8
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomSocial\" type: MPEventTypeSocial];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 9
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomOther\" type: MPEventTypeOther];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 10
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomUnknown\" type: MPEventTypeMedia];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 11
// 
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomMedia\" type: MPEventTypeOther];
[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 12
// 
[[MParticle sharedInstance] logScreen:@\"ScreenView\" eventInfo: nil];



// Data Plan Point 13
// A custom event with every type of Custom Attribute
MPEvent *customEvent = [[MPEvent alloc] initWithName:@\"CustomAllAttributes\" type: MPEventTypeOther];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@\"URI String Attribute\"] = @\"https://WfoLHunYeaXIJwEZPUWZToGbnwZhwbjle.qygeUaqLLr6hLrvjRQ,XgRhP0sdu6E44dU,XuKRgvNNGUgHB,nj6OzNxo2GLZ\";
eventInfo[@\"IPV6 String Attribute\"] = @\"dbec:1374:f734:4eae:ed97:8cc9:2cd1:30ae\";
eventInfo[@\"IPV4 String Attribute\"] = @\"107.250.244.137\";
eventInfo[@\"HostName String Attribute\"] = @\"cefjNFGAKPwzKngeGLfSIvpReZ.pggn\";
eventInfo[@\"Date String Attribute\"] = @\"1940-10-16\";
eventInfo[@\"Time String Attribute\"] = @\"22:53:17.911Z\";
eventInfo[@\"DateTime String Attribute\"] = @\"1963-08-06T12:16:22.823Z\";
eventInfo[@\"Email String Attribute\"] = @\"test@gmail.com\";
eventInfo[@\"Null Attribute\"] = [NSNull null];
eventInfo[@\"Number Attribute\"] = @-74821511.11661537;
eventInfo[@\"Boolean Attribute\"] = @true;

customEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:customEvent];



// Data Plan Point 14
// User Attributes
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"Test String User Attribute\" value:@\"amet\"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"Test Number User Attribute\" value:@-97192120.28716555];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"Test Bool User Attribute\" value:@false];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@\"Test Null User Attribute\" value:[NSNull null]];



// Data Plan Point 15
// User Identities
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"email" value:@"test@gmail.com"];
[[[MParticle sharedInstance].identity currentUser] setUserAttribute:@"customerid" value:@84950869.74387908];



// Data Plan Point 16
// 
MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithAction:MPCommerceEventActionAddToCart product:product];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];



// Data Plan Point 17
// 
MPPromotion *promotion = [[MPPromotion alloc] init];
MPPromotionContainer *promotionContainer = [[MPPromotionContainer alloc] initWithAction:MPPromotionActionClick promotion:promotion];
MPCommerceEvent *commerceEvent = [[MPCommerceEvent alloc] initWithPromotionContainer:promotionContainer];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];



// Data Plan Point 18
// 
MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithImpressionName:@"ImpressionName" product:product];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];



`;

    static readonly wholeSwift = `\
// Data Plan Point 1
// 
let customEvent = MPEvent.init(name: \"CustomAttribution\", type: .other)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 2
// 
let customEvent = MPEvent.init(name: \"CustomNavigation\", type: .navigation)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 3
// 
let customEvent = MPEvent.init(name: \"CustomLocation\", type: .location)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 4
// 
let customEvent = MPEvent.init(name: \"CustomSearch\", type: .search)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 5
// 
let customEvent = MPEvent.init(name: \"CustomTransaction\", type: .transaction)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 6
// 
let customEvent = MPEvent.init(name: \"CustomUserContent\", type: .userContent)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 7
// 
let customEvent = MPEvent.init(name: \"CustomUserPreference\", type: .userPreference)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 8
// 
let customEvent = MPEvent.init(name: \"CustomSocial\", type: .social)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 9
// 
let customEvent = MPEvent.init(name: \"CustomOther\", type: .other)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 10
// 
let customEvent = MPEvent.init(name: \"CustomUnknown\", type: .media)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 11
// 
let customEvent = MPEvent.init(name: \"CustomMedia\", type: .other)
MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 12
// 
MParticle.sharedInstance().logScreen(\"ScreenView\", eventInfo: nil)



// Data Plan Point 13
// A custom event with every type of Custom Attribute
let customEvent = MPEvent.init(name: \"CustomAllAttributes\", type: .other)
var eventInfo = [String: Any].init()
eventInfo[\"URI String Attribute\"] = \"https://WfoLHunYeaXIJwEZPUWZToGbnwZhwbjle.qygeUaqLLr6hLrvjRQ,XgRhP0sdu6E44dU,XuKRgvNNGUgHB,nj6OzNxo2GLZ\"
eventInfo[\"IPV6 String Attribute\"] = \"dbec:1374:f734:4eae:ed97:8cc9:2cd1:30ae\"
eventInfo[\"IPV4 String Attribute\"] = \"107.250.244.137\"
eventInfo[\"HostName String Attribute\"] = \"cefjNFGAKPwzKngeGLfSIvpReZ.pggn\"
eventInfo[\"Date String Attribute\"] = \"1940-10-16\"
eventInfo[\"Time String Attribute\"] = \"22:53:17.911Z\"
eventInfo[\"DateTime String Attribute\"] = \"1963-08-06T12:16:22.823Z\"
eventInfo[\"Email String Attribute\"] = \"test@gmail.com\"
eventInfo[\"Null Attribute\"] = NSNull.init()
eventInfo[\"Number Attribute\"] = -74821511.11661537
eventInfo[\"Boolean Attribute\"] = true
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)



// Data Plan Point 14
// User Attributes
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"Test String User Attribute\", value: \"amet\")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"Test Number User Attribute\", value: -97192120.28716555)
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"Test Bool User Attribute\", value: false)
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"Test Null User Attribute\", value: NSNull.init())



// Data Plan Point 15
// User Identities
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"email\", value: \"test@gmail.com\")
MParticle.sharedInstance().identity.currentUser?.setUserAttribute(\"customerid\", value: 84950869.74387908)



// Data Plan Point 16
// 
let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(action: .addToCart, product: product)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(commerceEvent)



// Data Plan Point 17
// 
let promotion = MPPromotion.init()
let promotionContainer = MPPromotionContainer.init(action: .click, promotion: promotion)
let commerceEvent = MPCommerceEvent.init(promotionContainer: promotionContainer)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo;

MParticle.sharedInstance().logEvent(commerceEvent)



// Data Plan Point 18
// 
let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(impressionName: "impressionName", product: product)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(commerceEvent)



`;

    static readonly wholeJava = `\
// Data Plan Point 1
// 
MPEvent event = new MPEvent.Builder(\"CustomAttribution\", MParticle.EventType.Attribution)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 2
// 
MPEvent event = new MPEvent.Builder(\"CustomNavigation\", MParticle.EventType.Navigation)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 3
// 
MPEvent event = new MPEvent.Builder(\"CustomLocation\", MParticle.EventType.Location)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 4
// 
MPEvent event = new MPEvent.Builder(\"CustomSearch\", MParticle.EventType.Search)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 5
// 
MPEvent event = new MPEvent.Builder(\"CustomTransaction\", MParticle.EventType.Transaction)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 6
// 
MPEvent event = new MPEvent.Builder(\"CustomUserContent\", MParticle.EventType.User_content)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 7
// 
MPEvent event = new MPEvent.Builder(\"CustomUserPreference\", MParticle.EventType.User_preference)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 8
// 
MPEvent event = new MPEvent.Builder(\"CustomSocial\", MParticle.EventType.Social)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 9
// 
MPEvent event = new MPEvent.Builder(\"CustomOther\", MParticle.EventType.Other)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 10
// 
MPEvent event = new MPEvent.Builder(\"CustomUnknown\", MParticle.EventType.Unknown)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 11
// 
MPEvent event = new MPEvent.Builder(\"CustomMedia\", MParticle.EventType.Media)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 12
// 
MParticle.getInstance().logScreen(\"ScreenView\");


// Data Plan Point 13
// A custom event with every type of Custom Attribute
Map<String, String> attributes = new HashMap<>();
attributes.put(\"URI String Attribute\", \"https://WfoLHunYeaXIJwEZPUWZToGbnwZhwbjle.qygeUaqLLr6hLrvjRQ,XgRhP0sdu6E44dU,XuKRgvNNGUgHB,nj6OzNxo2GLZ\");
attributes.put(\"IPV6 String Attribute\", \"dbec:1374:f734:4eae:ed97:8cc9:2cd1:30ae\");
attributes.put(\"IPV4 String Attribute\", \"107.250.244.137\");
attributes.put(\"HostName String Attribute\", \"cefjNFGAKPwzKngeGLfSIvpReZ.pggn\");
attributes.put(\"Date String Attribute\", \"1940-10-16\");
attributes.put(\"Time String Attribute\", \"22:53:17.911Z\");
attributes.put(\"DateTime String Attribute\", \"1963-08-06T12:16:22.823Z\");
attributes.put(\"Email String Attribute\", \"test@gmail.com\");
attributes.put(\"Null Attribute\", null);
attributes.put(\"Number Attribute\", -74821511.11661537);
attributes.put(\"Boolean Attribute\", true);
MPEvent event = new MPEvent.Builder(\"CustomAllAttributes\", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build();
MParticle.getInstance().logEvent(event);


// Data Plan Point 14
// User Attributes
Map<String, String> attributes = new HashMap<>();
attributes.put(\"Test String User Attribute\", \"amet\");
attributes.put(\"Test Number User Attribute\", -97192120.28716555);
attributes.put(\"Test Bool User Attribute\", false);
attributes.put(\"Test Null User Attribute\", null);
MParticleUser user = MParticle.getInstance().Identity().getCurrentUser();
user.setUserAttributes(attributes);


// Data Plan Point 15
// User Identities
Map<MParticle.IdentityType, String> userIdentities = new HashMap<>();
userIdentities.put(MParticle.IdentityType.Email, \"test@gmail.com\");
userIdentities.put(MParticle.IdentityType.Customerid, 84950869.74387908);
IdentityApiRequest request = IdentityApiRequest.withEmptyUser()
    .userIdentities(userIdentities)
    .build();
MParticle.getInstance().Identity().identify(request);


// Data Plan Point 16
// 
Product product = new Product.Builder("productName", "productId", 19.99)
    .quantity(1.5)
    .build();
CommerceEvent commerceEvent = new CommerceEvent.Builder("add_to_cart", product);
MParticle.getInstance()
    .logEvent(commerceEvent);


// Data Plan Point 17
// 
Not currently supported by Android


// Data Plan Point 18
// 
Product product = new Product.Builder("productName", "productId", 19.99)
    .quantity(1.5)
    .build();
CommerceEvent commerceEvent = new CommerceEvent.Builder(null, product);
MParticle.getInstance()
    .logEvent(commerceEvent);


`;

    static readonly wholeKotlin = `\
// Data Plan Point 1
// 
val event = MPEvent.Builder(\"CustomAttribution\", MParticle.EventType.Attribution)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 2
// 
val event = MPEvent.Builder(\"CustomNavigation\", MParticle.EventType.Navigation)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 3
// 
val event = MPEvent.Builder(\"CustomLocation\", MParticle.EventType.Location)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 4
// 
val event = MPEvent.Builder(\"CustomSearch\", MParticle.EventType.Search)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 5
// 
val event = MPEvent.Builder(\"CustomTransaction\", MParticle.EventType.Transaction)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 6
// 
val event = MPEvent.Builder(\"CustomUserContent\", MParticle.EventType.User_content)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 7
// 
val event = MPEvent.Builder(\"CustomUserPreference\", MParticle.EventType.User_preference)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 8
// 
val event = MPEvent.Builder(\"CustomSocial\", MParticle.EventType.Social)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 9
// 
val event = MPEvent.Builder(\"CustomOther\", MParticle.EventType.Other)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 10
// 
val event = MPEvent.Builder(\"CustomUnknown\", MParticle.EventType.Unknown)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 11
// 
val event = MPEvent.Builder(\"CustomMedia\", MParticle.EventType.Media)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 12
// 
MParticle.getInstance()?.logScreen(\"ScreenView\")


// Data Plan Point 13
// A custom event with every type of Custom Attribute
val attributes = mapOf(
    \"URI String Attribute\" to \"https://WfoLHunYeaXIJwEZPUWZToGbnwZhwbjle.qygeUaqLLr6hLrvjRQ,XgRhP0sdu6E44dU,XuKRgvNNGUgHB,nj6OzNxo2GLZ\",
    \"IPV6 String Attribute\" to \"dbec:1374:f734:4eae:ed97:8cc9:2cd1:30ae\",
    \"IPV4 String Attribute\" to \"107.250.244.137\",
    \"HostName String Attribute\" to \"cefjNFGAKPwzKngeGLfSIvpReZ.pggn\",
    \"Date String Attribute\" to \"1940-10-16\",
    \"Time String Attribute\" to \"22:53:17.911Z\",
    \"DateTime String Attribute\" to \"1963-08-06T12:16:22.823Z\",
    \"Email String Attribute\" to \"test@gmail.com\",
    \"Null Attribute\" to null,
    \"Number Attribute\" to -74821511.11661537,
    \"Boolean Attribute\" to true
)
val event = MPEvent.Builder(\"CustomAllAttributes\", MParticle.EventType.Other)
    .customAttributes(attributes)
    .build()
MParticle.getInstance()?.logEvent(event)


// Data Plan Point 14
// User Attributes
val attributes = mapOf(
    \"Test String User Attribute\" to \"amet\",
    \"Test Number User Attribute\" to -97192120.28716555,
    \"Test Bool User Attribute\" to false,
    \"Test Null User Attribute\" to null
)
val user = MParticle.getInstance()?.Identity()?.currentUser
user?.userAttributes = attributes


// Data Plan Point 15
// User Identities
val userIdentities = mapOf(
    MParticle.IdentityType.Email to \"test@gmail.com\",
    MParticle.IdentityType.Customerid to 84950869.74387908
)
val request = IdentityApiRequest.withEmptyUser()
    .userIdentities(userIdentities)
    .build()
MParticle.getInstance()?.Identity()?.identify(request)


// Data Plan Point 16
// 
val product = Product.Builder("productName", "productId", 19.99)
    .quantity(1)
    .build()
val commerceEvent = CommerceEvent.Builder("add_to_cart", product)
MParticle.getInstance()
    ?.logEvent(commerceEvent)


// Data Plan Point 17
// 
Not currently supported by Android


// Data Plan Point 18
// 
val product = Product.Builder("productName", "productId", 19.99)
    .quantity(1)
    .build()
val commerceEvent = CommerceEvent.Builder(null, product)
MParticle.getInstance()
    ?.logEvent(commerceEvent)


`;

    static readonly wholeJS = `\
// Data Plan Point 1
// 
mParticle.logEvent('CustomAttribution', mParticle.EventType.Other)


// Data Plan Point 2
// 
mParticle.logEvent('CustomNavigation', mParticle.EventType.Navigation)


// Data Plan Point 3
// 
mParticle.logEvent('CustomLocation', mParticle.EventType.Location)


// Data Plan Point 4
// 
mParticle.logEvent('CustomSearch', mParticle.EventType.Search)


// Data Plan Point 5
// 
mParticle.logEvent('CustomTransaction', mParticle.EventType.Transaction)


// Data Plan Point 6
// 
mParticle.logEvent('CustomUserContent', mParticle.EventType.UserContent)


// Data Plan Point 7
// 
mParticle.logEvent('CustomUserPreference', mParticle.EventType.UserPreference)


// Data Plan Point 8
// 
mParticle.logEvent('CustomSocial', mParticle.EventType.Social)


// Data Plan Point 9
// 
mParticle.logEvent('CustomOther', mParticle.EventType.Other)


// Data Plan Point 10
// 
mParticle.logEvent('CustomUnknown', mParticle.EventType.Media)


// Data Plan Point 11
// 
mParticle.logEvent('CustomMedia', mParticle.EventType.Other)


// Data Plan Point 12
// 
mParticle.logPageView('ScreenView')


// Data Plan Point 13
// A custom event with every type of Custom Attribute
let customAttributes = {
    'URI String Attribute': \"https://WfoLHunYeaXIJwEZPUWZToGbnwZhwbjle.qygeUaqLLr6hLrvjRQ,XgRhP0sdu6E44dU,XuKRgvNNGUgHB,nj6OzNxo2GLZ\",
    'IPV6 String Attribute': \"dbec:1374:f734:4eae:ed97:8cc9:2cd1:30ae\",
    'IPV4 String Attribute': \"107.250.244.137\",
    'HostName String Attribute': \"cefjNFGAKPwzKngeGLfSIvpReZ.pggn\",
    'Date String Attribute': \"1940-10-16\",
    'Time String Attribute': \"22:53:17.911Z\",
    'DateTime String Attribute': \"1963-08-06T12:16:22.823Z\",
    'Email String Attribute': \"test@gmail.com\",
    'Null Attribute': null,
    'Number Attribute': -74821511.11661537,
    'Boolean Attribute': true,
};
mParticle.logEvent('CustomAllAttributes', mParticle.EventType.Other, customAttributes)


// Data Plan Point 14
// User Attributes
mParticle.Identity.getCurrentUser().setUserAttribute(\"Test String User Attribute\", \"amet\")
mParticle.Identity.getCurrentUser().setUserAttribute(\"Test Number User Attribute\", -97192120.28716555)
mParticle.Identity.getCurrentUser().setUserAttribute(\"Test Bool User Attribute\", false)
mParticle.Identity.getCurrentUser().setUserAttribute(\"Test Null User Attribute\", null)



// Data Plan Point 15
// User Identities



// Data Plan Point 16
// 

let product = mParticle.eCommerce.createProduct('productName', 'productId', 19.199, 1)
mParticle.eCommerce.logProductAction(mParticle.ProductActionType.AddToCart, [product])
        


// Data Plan Point 17
// 
Not currently supported by Javascript


// Data Plan Point 18
// 
let product = mParticle.eCommerce.createProduct('productName', 'productId', 19.199, 1)

var impression = mParticle.eCommerce.createImpression('impressionName', product);
mParticle.eCommerce.logImpression(impression);



`;

    static readonly wholePython = `\
// Data Plan Point 1
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomAttribution', 'default')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 2
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomNavigation', 'navigation')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 3
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomLocation', 'location')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 4
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomSearch', 'search')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 5
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomTransaction', 'transaction')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 6
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomUserContent', 'user_content')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 7
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomUserPreference', 'user_preference')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 8
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomSocial', 'social')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 9
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomOther', 'other')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 10
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomUnknown', 'unknown')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 11
// 
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomMedia', 'default')
event.timestamp_unixtime_ms = example_timestampbatch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 12
// 
from mparticle.models.screen_view_event import ScreenViewEvent

batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.models.screen_view_event.ScreenViewEvent()batch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e



// Data Plan Point 13
// A custom event with every type of Custom Attribute
batch = mparticle.Batch()
batch.environment = 'development'

event = mparticle.AppEvent('CustomAllAttributes', 'other')
event.timestamp_unixtime_ms = example_timestamp
batch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 14
// User Attributes
batch = mparticle.Batch()
batch.environment = 'development'

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 15
// User Identities
batch = mparticle.Batch()
batch.environment = 'development'
try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print \"Exception while calling mParticle: %s
\" % e


// Data Plan Point 16
// 
batch = mparticle.Batch()
batch.environment = 'development'

product = mparticle.Product()
product.name = 'Example Product'
product.id = 'sample-sku'
product.price = 19.99

product_action = mparticle.ProductAction('add_to_cart')
product_action.products = [product]
product_action.tax_amount = 1.50
product_action.total_amount = 21.49

commerce_event = mparticle.CommerceEvent(product_action)
commerce_event.timestamp_unixtime_ms = example_timestamp

batch.events = [event]

try:
    api_instance.upload_events(batch)
    # you can also send multiple batches at a time to decrease the amount of network calls
    #api_instance.bulk_upload_events([batch, batch])
except mparticle.rest.ApiException as e:
    print "Exception while calling mParticle: %s
" % e


// Data Plan Point 17
// 
Not currently supported by Python


// Data Plan Point 18
// 
Not currently supported by Python


`;
}