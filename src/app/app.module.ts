import { Routes }  from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DisqusModule } from 'ngx-disqus';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageComponent } from './page.component';


export const routes:Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HelloComponent
  },
  {
    path: 'page',
    component: PageComponent
  }
];

@NgModule({
  declarations: [AppComponent, HelloComponent, PageComponent],
  imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routes),
  DisqusModule.forRoot('loveisfan')
],
  bootstrap: [AppComponent]
})
export class AppModule { }
