import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemsService{
    constructor(){

    }
    moveToCart(itemId){
        console.log(itemId)
        let foundItem = ProxyState.items.find(i => i.id == itemId)
        ProxyState.cart = [...ProxyState.cart, new Item(foundItem)]
        console.log(ProxyState.cart)
    }
}

export const itemsService = new ItemsService();