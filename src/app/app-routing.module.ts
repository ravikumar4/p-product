import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing : true})],  // Sample code for enabling trace info in console.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
