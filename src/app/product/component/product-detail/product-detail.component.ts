import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from 'src/app/product-list.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct = null;
  pageTitle = 'Product Details';
  get filterOn(): string {
    return this.productSvc.message;
  }
  constructor(private route: ActivatedRoute, private router: Router, private productSvc: ProductListService) {

   }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.product = this.productSvc.getProducts().find((p: IProduct) => p.productId === id);
    }
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
