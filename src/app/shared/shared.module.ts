import { NgModule } from '@angular/core';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    StarRatingComponent
  ]
})
export class SharedModule { }
