import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyDdaOvudIsUmsaBHZMkKNU6Nw4xSItZElE",
  authDomain: "ami-ionic.firebaseapp.com",
  projectId: "ami-ionic",
  storageBucket: "ami-ionic.appspot.com",
  messagingSenderId: "803969664739",
  appId: "1:803969664739:web:5e07ffa4080078ec04a7d6"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //! { provide: FirestoreSettingsToken, useValue: {} }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
