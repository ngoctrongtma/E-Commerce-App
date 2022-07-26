import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total = this.cartService.getItems().reduce((totalTemp, item)=> { return totalTemp + item.price}, 0);
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor( 
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    console.warn('Form has been submitted value is:', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
