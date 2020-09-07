import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { GeneralPage } from '../pages/general/general';
import { InicioPage } from "../pages/inicio/inicio";
import { TabsPage } from '../pages/tabs/tabs';
import { SobresDesglosePage } from '../pages/sobres-desglose/sobres-desglose';
import { LoginPage } from '../pages/login/login';
import { SobresProvider } from '../providers/sobres/sobres';
import { UsuarioProvider } from '../providers/usuario/usuario';



@NgModule({
  declarations: [
    MyApp,
    GeneralPage,
    InicioPage,
    TabsPage,
    SobresDesglosePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GeneralPage,
    InicioPage,
    TabsPage,
    SobresDesglosePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SobresProvider,
    InAppBrowser,
    BarcodeScanner,
    UsuarioProvider
  ]
})
export class AppModule {}
