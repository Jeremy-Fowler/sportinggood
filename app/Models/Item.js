import { generateId } from "../Utils/generateId.js";

export default class Item{
    constructor(itemData){
        this.id = itemData.id || generateId()
        this.name = itemData.name
        this.price = itemData.price
        this.qty = itemData.qty
        this.img = itemData.img
    }

    get Template(){
        return /*html*/`
        <div class="col-lg-3">
            <div class="card my-3 text-center" style="width: 18rem;">
            <div class="card-body">
                <img class="card-img-top tall" src="${this.img}" alt="Card image cap">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">$ ${this.price}</p>
                <div class="d-flex">
                    <span><input type="number" class="form-control" name="qty" id="qty"></span>
                    <span><a href="#" class="btn btn-primary" onclick="app.itemsController.moveToCart('${this.id}')">
                    <span class="material-icons-outlined">
                        Buy</span></a></span>
                </div>
                </div>
            </div>
        </div>
        `
    }

}