import UIKit
import mParticle_Apple_SDK

class Snippets: NSObject {

            func testFirst() { 
 let eventInfo = [String: Any].init()
MParticle.sharedInstance().logScreen("screen", eventInfo: eventInfo)
 
}


            func testSecond() { 
 var eventInfo = [String: Any].init()
eventInfo["Launch"] = true
MParticle.sharedInstance().logScreen("Video Streams", eventInfo: eventInfo)
 
}

        }