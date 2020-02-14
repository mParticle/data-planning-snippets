#import "Snippets.h"
@import mParticle_Apple_SDK;
@implementation Snippets 

        - (void)testFirst { 
 NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];

[[MParticle sharedInstance] logScreen:@"screen" eventInfo: eventInfo];
 
 }


        - (void)testSecond { 
 NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Launch"] = @true;

[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];
 
 }


        @end