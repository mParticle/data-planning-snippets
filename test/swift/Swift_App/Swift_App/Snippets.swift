import UIKit
import mParticle_Apple_SDK

class Snippets: NSObject {

            func testFirst() { 
 MParticle.sharedInstance().logScreen("screen", eventInfo: nil)
 
}


            func testSecond() { 
 var eventInfo = [String: Any].init()
eventInfo["Launch"] = true
MParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)
 
}

        }