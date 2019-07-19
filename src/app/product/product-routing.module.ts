import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';



const routes: Routes = [
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    canActivate: [AuthGuard],
    component: ProductDetailComponent
  },
  {
    path: 'products/:id/edit',
    canActivate: [AuthGuard],
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
