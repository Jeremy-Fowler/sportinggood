import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";

function _drawItems(){
    let template =''
    ProxyState.items.forEach(i => template += i.Template)
    document.getElementById('items').innerHTML = template
}


export class ItemsController{
    constructor(){
        console.log("this is the controller, hello")
        console.log(ProxyState.items)
        _drawItems()
    }

    moveToCart(itemId){
        
        event.preventDefault()
        itemsService.moveToCart(itemId);
        
        
    }
    
}

