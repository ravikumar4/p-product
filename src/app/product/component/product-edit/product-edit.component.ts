import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/product';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  pageTitle = 'Product Edit';
  errorMessage: string;

  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductListService
              ) { }

  ngOnInit() {
    // temp code .. will be removed.
    // this.product = this.productService.getProducts()[1];
    this.route.data.subscribe(data => {
      this.product = data[ 'resolvedData' ];
      console.log('data retrived');
      console.log(this.product);
     });
  }

  deleteProduct(): void {}

  isValid(path?: string): boolean {
    return true;
  }

  saveProduct(): void {
    //  if the product code id  == 0 , create new product.
    //  else update the existing product.
    if ( this.product.productId === 0) {
      console.log('new product');
      this.productService.createProduct(this.product);
    } else {
      console.log('update product');
    }
  }


}
