import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { PushnotificacionProvider } from '../providers/pushnotificacion/pushnotificacion';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage:Storage,
    private usuarioPrd:UsuarioProvider,public notificacionProvider:PushnotificacionProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.notificacionProvider._init();
    });


    storage.get("usuario").then(dato =>{
      if(dato != undefined || dato != null){
          this.usuarioPrd.setUsuario(dato);
      }
    });


  }
}

