import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { Accueil } from './accueil/accueil.component';
import { ErrPage } from './ErrPage/ErrPage.component';
import { AproposComponent } from './apropos/apropos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ActualitesComponent } from './actualites/actualites.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    Accueil,
    ErrPage,
    AproposComponent,
    GalerieComponent,
    ActualitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'actu', component: ActualitesComponent },
      { path: 'galerie', component: GalerieComponent },
      { path: 'apropos', component: AproposComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', component: Accueil },
      { path: '404', component: ErrPage},
      { path: '**', redirectTo: '/404'}
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ContactComponent,
    Accueil,
    ErrPage,
    AproposComponent,
    GalerieComponent
  ]
})
export class AppModule { }
