import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarRatingComponent,
    ConvertToSpacePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
