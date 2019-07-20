import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-product-tags',
  templateUrl: './product-tags.component.html',
  styleUrls: ['./product-tags.component.scss']
})
export class ProductTagsComponent implements OnInit {

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

}
