#import "Snippets.h"
@import mParticle_Apple_SDK;
@implementation Snippets 

- (void)testProductAction { 
 MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithAction:MPCommerceEventActionAddToCart product:product];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];
 
 }


- (void)testPromotion { 
 MPPromotion *promotion = [[MPPromotion alloc] init];
MPPromotionContainer *promotionContainer = [[MPPromotionContainer alloc] initWithAction:MPPromotionActionClick promotion:promotion];
MPCommerceEvent *commerceEvent = [[MPCommerceEvent alloc] initWithPromotionContainer:promotionContainer];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];
 
 }


- (void)testProductImpression { 
 MPProduct *product = [[MPProduct alloc] initWithName:@"ProductName" sku:@"ProductId" quantity:@1 price:@19.99];
MPCommerceEvent * commerceEvent = [[MPCommerceEvent alloc] initWithImpressionName:@"ImpressionName" product:product];
NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"session_id"] = @12345;
eventInfo[@"canonical_name"] = @"Slurm";
eventInfo[@"is_main_thread"] = @true;

commerceEvent.customAttributes = eventInfo;

[[MParticle sharedInstance] logEvent:commerceEvent];
 
 }


@end