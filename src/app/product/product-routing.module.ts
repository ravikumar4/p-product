import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { ProductTagsComponent } from './component/product-tags/product-tags.component';
import { ProductResolverService } from './product-resolver.service';



const routes: Routes = [
   {
    path: 'products',
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: { pageTitle: 'Test Product Data'}
      },
      {
        path: ':id',
        component: ProductDetailComponent,
        // resolve: { resolvedData: ProductResolverService },
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolverService },
        children: [
          { path: '', redirectTo: 'info', pathMatch: 'full' },
          { path: 'info', component: ProductInfoComponent },
          { path: 'tags', component: ProductTagsComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
