import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";

class ItemsService{
    constructor(){

    }
    moveToCart(itemId){
        let foundItem = ProxyState.items.find(i => i.id == itemId)
        ProxyState.cart = [...ProxyState.cart, new Item(foundItem)]
        console.log(foundItem.price)
        ProxyState.cartTotal += foundItem.price
        

        console.log(ProxyState.cartTotal)   

        
        document.getElementById('cart-total').innerText = ProxyState.cartTotal.toString()
    }

}

export const itemsService = new ItemsService();