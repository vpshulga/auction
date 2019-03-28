import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApplicationComponent implements OnInit {

  products: Array<Product> =[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
  }

}
