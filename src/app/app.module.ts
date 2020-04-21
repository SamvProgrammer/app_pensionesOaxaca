import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GeneralPage } from '../pages/general/general';
import { InicioPage } from "../pages/inicio/inicio";
import { TabsPage } from '../pages/tabs/tabs';
import { SobresDesglosePage } from '../pages/sobres-desglose/sobres-desglose';


@NgModule({
  declarations: [
    MyApp,
    GeneralPage,
    InicioPage,
    TabsPage,
    SobresDesglosePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GeneralPage,
    InicioPage,
    TabsPage,
    SobresDesglosePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
