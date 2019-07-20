import { NgModule } from '@angular/core';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { ProductTagsComponent } from './component/product-tags/product-tags.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    ProductEditComponent,
    ProductInfoComponent,
    ProductTagsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
