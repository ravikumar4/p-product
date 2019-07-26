import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  pageTitle = 'Product Edit';
  errorMessage: string;

  public product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductListService
              ) { }

  ngOnInit() {

    this.route.parent.data.subscribe(data => {
     this.product = data[ 'resolvedData' ];
    });
    // this.product = this.route.parent.snapshot.data['resolvedData'];
    // console.log(id);
    // this.product = this.productService.getProducts()[id];

    console.log(this.product);
  }



}
