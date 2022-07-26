import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  // function 
  addToCart(product: Product){
    this.items.push(product)
  }
  getItems(){
    return this.items
  }
  getItemById(productId: number){
    this.items.find((item)=> {
      item.id === productId
    })
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json') // get data from json file 
  }

  constructor( private http: HttpClient) { }
}
