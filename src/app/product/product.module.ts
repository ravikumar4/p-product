import { NgModule } from '@angular/core';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductRoutingModule } from './product-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from '../convert-to-space.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
