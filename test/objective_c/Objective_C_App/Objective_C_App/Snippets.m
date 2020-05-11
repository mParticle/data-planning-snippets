#import "Snippets.h"
@import mParticle_Apple_SDK;
@implementation Snippets 

        - (void)testFirst { 
 [[MParticle sharedInstance] logScreen:@"screen" eventInfo: nil];
 
 }


        - (void)testSecond { 
 NSMutableDictionary *eventInfo = [[NSMutableDictionary alloc] init];
eventInfo[@"Launch"] = @true;

[[MParticle sharedInstance] logScreen:@"Video Streams" eventInfo: eventInfo];
 
 }


        @end