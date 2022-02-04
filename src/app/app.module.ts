import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { Accueil } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Accueil
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: '', component: Accueil }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ContactComponent,
    Accueil
  ]
})
export class AppModule { }
