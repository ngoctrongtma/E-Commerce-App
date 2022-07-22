import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [...products];

  share(name: String){
    alert('shared product: ' + name)
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale(notified event from child component)');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
