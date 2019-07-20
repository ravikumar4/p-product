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
    this.product = this.productService.getProducts()[1];
  }

  deleteProduct(): void {}

  isValid(path?: string): boolean {
    return true;
  }

  saveProduct(): void {}


}
