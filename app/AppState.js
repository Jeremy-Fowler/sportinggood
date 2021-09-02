import Item from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Item').Item[]} */
  
  cart = []
  items = [
    new Item({name: "Bat", qty: 1, price: 50, img: "https://shop.slugger.com/media/catalog/product/cache/40/image/1800x/040ec09b1e35df139433887a97daa66f/9/1/9111f5a8905d47e7da8f1eaf62c826668e494f89_WTLW3AMIXA16_0_GENUINE_S3X_MIX_NAT_Front_2019.jpg"}),
    new Item({name: "Baseball", qty: 1, price: 10, img: "https://upload.wikimedia.org/wikipedia/en/1/1e/Baseball_%28crop%29.jpg" }),
    new Item({name: "Football", qty: 1, price: 12, img:"https://hudsonreporter.com/wp-content/uploads/sites/15/2019/08/Football.jpg"}),
    new Item({name: "Soccer Ball", qty: 1, price: 8, img:"https://i5.walmartimages.com/asr/87fc487b-86fc-45bb-b6bc-90bdb1a24e95_1.a97559437e67f0b4933c77599d353842.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff"}),
    new Item({name: "Tennis Ball", qty: 1, price: 36, img:"https://shop.wimbledon.com/media/catalog/product/cache/547f30c8484c363d8725d9ba08f784c4/s/l/slazenger_giant_yellow_1_1000.jpg"}),
    new Item({name: "Racquet Ball", qty: 1, price: 11, img:"https://www.pythonracquetball.com/mm5/graphics/00000001/pythonblueballbag_355x237.jpg"}),
    new Item({name: "Rugby Ball", qty: 1, price: 70, img:"https://usa.rhinorugby.com/media/catalog/product/cache/1/image/700x/9df78eab33525d08d6e5fb8d27136e95/r/e/reflex_1-better.jpg"}),
  ]
  cartTotal = 0
}
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
