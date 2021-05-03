import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { ViewMeComponent } from './view-me/view-me.component';
import { ViewMyLifeComponent } from './view-my-life/view-my-life.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ViewMeComponent,
    ViewMyLifeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'First-Angular-Site'),
    AngularFirestoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
