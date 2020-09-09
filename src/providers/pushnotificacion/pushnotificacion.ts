import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

/*
  Generated class for the PushnotificacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificacionProvider {

  constructor(private oneSignal: OneSignal,private platform:Platform) {
  }

  public _init() {

    if(this.platform.is('cordova')){
      this.oneSignal.startInit('61686193-ee56-4e7a-804c-91252a7ad2f1', '568414671725');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
  
      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });
  
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });
  
      this.oneSignal.endInit();
    }else{
      console.log("Notificaciones push no disponibles para web");
    }
  }

}
