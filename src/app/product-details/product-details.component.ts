import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute) {
    console.log(1)
   }

  ngOnInit(): void {
    console.log(2)
    // get routeParams 
      const routeParams = this.route.snapshot.paramMap;
    // get the product id from the current route.
      const productIdFromRoute = Number(routeParams.get('productId'));
    // find the product
      this.product = products.find(product => product.id === productIdFromRoute);
  }

}
