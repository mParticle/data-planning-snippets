import UIKit
import mParticle_Apple_SDK

class Snippets: NSObject {

func testProductAction() {
 let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(action: .addToCart, product: product)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(commerceEvent)
 
}


func testPromotion() {
 let promotion = MPPromotion.init()
let promotionContainer = MPPromotionContainer.init(action: .click, promotion: promotion)
let commerceEvent = MPCommerceEvent.init(promotionContainer: promotionContainer)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo;

MParticle.sharedInstance().logEvent(commerceEvent)
 
}


func testProductImpression() {
 let product = MPProduct.init(name: "productName", sku: "productId", quantity: 1, price: 19.99)
let commerceEvent = MPCommerceEvent.init(impressionName: "impressionName", product: product)
var eventInfo = [String: Any].init()
eventInfo["session_id"] = 12345
eventInfo["canonical_name"] = "Slurm"
eventInfo["is_main_thread"] = true
commerceEvent.customAttributes = eventInfo

MParticle.sharedInstance().logEvent(commerceEvent)
 
}


}