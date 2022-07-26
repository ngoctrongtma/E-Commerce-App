import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, // ActivatedRoute contains information about the route and the route's parameters.
                                  // By injecting ActivatedRoute, you are configuring the component to use a service
                                  // in this example, it use to get Params in URL.
    private cartService: CartService, // the service use to addProduct, getProduct, clearProduct in cart.
    ){}

  addToCart (product: Product){ // this function use to add product into cart
    alert("run add to card function");
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    // get routeParams 
      const routeParams = this.route.snapshot.paramMap;
    // get the product id from the current route.
      const productIdFromRoute = Number(routeParams.get('productId'));
    // get the product
      this.product = products.find(product => product.id === productIdFromRoute);
  }
}
