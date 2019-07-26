import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextComponent } from './text/text.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'text',
        component: TextComponent,
        outlet: 'popup'
      }
    ])
  ]
})
export class MessageModule { }
