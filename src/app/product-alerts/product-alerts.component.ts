import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product; // this product will receive from parent component
  @Output() notify = new EventEmitter(); // this function will pass to parent component
  constructor() { }

  ngOnInit(): void {
  }

}
