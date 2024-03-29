import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Points } from '../pages/points/points';
import { Redeem } from '../pages/redeem/redeem';
import { Login } from '../pages/login/login';

import { BusinessDetails } from '../providers/business-details';
import { LaasEndpoint } from '../providers/laas-endpoint';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBQNNPknNbL21FqtJLDbZpd9DvC3Nqudnk",
  authDomain: "laas-1.firebaseapp.com",
  databaseURL: "https://laas-1.firebaseio.com",
  projectId: "laas-1",
  storageBucket: "laas-1.appspot.com",
  messagingSenderId: "622638005740"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Points,
    Redeem,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Points,
    Redeem,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BusinessDetails,
    LaasEndpoint,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
