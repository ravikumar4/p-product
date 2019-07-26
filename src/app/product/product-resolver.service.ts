import { Injectable } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProduct> {

  constructor(private productService: ProductListService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<IProduct> {
    const id = route.paramMap.get('id');
    console.log(this.productService.getProduct(+id));
    console.log('ProductResolverService -> ' + id);

    return of(this.productService.getProduct(+id));

  }

}
