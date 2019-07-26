import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../../models/product';
import { ProductListService } from 'src/app/product-list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = '';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    console.log('filter string: ' + value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productSvc: ProductListService,
              private route: ActivatedRoute) {
    this.products = this.productSvc.getProducts();
    this.filteredProducts = this.products;
  }

  onFilterChange(event: any): void {
    console.log('onFilterChange');
    console.log(event);
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    this.productSvc.message = filterBy;
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {

    this.pageTitle = this.route.snapshot.data['pageTitle'];
  }
}
