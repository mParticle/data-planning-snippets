#import "Snippets.h"
@import mParticle_Apple_SDK;
@implementation Snippets 

        - (void)testFirst { 
 [[MParticle sharedInstance] logScreen:@"screen" eventInfo: nil];
 
 }


        @end