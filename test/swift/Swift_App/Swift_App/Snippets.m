import UIKit
import mParticle_Apple_SDK

class Snippets: NSObject {
func test() {
 let customEvent = MPEvent.init(name: "event name", type: .transaction)
var eventInfo = [String: Any].init()
eventInfo["A_String_Key"] = "string"
eventInfo["A Date Key"] = "date-time"
eventInfo["A Number Key"] = "string"
customEvent?.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(customEvent!)
 
}
}