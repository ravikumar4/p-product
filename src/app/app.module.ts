import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    ProductModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
