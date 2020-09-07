import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, TextInput, AlertController, ToastController, LoadingController, Platform } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild("usuario") usuarioElement:TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams,private br:BarcodeScanner,
    private alertCtrl:AlertController,private toastCtrl:ToastController,private loadCtrl:LoadingController,
    private usuariosPrd:UsuarioProvider,private platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public seleccionarUsuario(){
    //this.usuarioElement.value = "JUB5";
    if(this.platform.is('cordova')){
      let alerta = this.alertCtrl.create({subTitle:"Buscar el QR en el sobre",message:"El QR para ingresar a la APP se encuentra en su recibo de pago que se envia por correo o los fisicos. Coloque la cámara en el cuadro y disfrute de esta aplicación",buttons:[
        {text:"Entendido",handler:()=>{
          this.br.scan().then(escaneado =>{
            let toast = this.toastCtrl.create({message:"Escaneado con exito",duration:1500});
            toast.present();
            this.usuarioElement.value = escaneado.text;
          });
        }}
      ]});
      alerta.present();
    }else{
      this.usuarioElement.value = "2e4779e14d58731845749aa2";
    }
  }

  public ingresar(cadena){

    let obj = {
      code:cadena.value
    };

    let load = this.loadCtrl.create({content:"Ingresando al sistema"});
    load.present();

   this.usuariosPrd.ingresandoSistema(obj).subscribe(datos =>{
      load.dismiss();
      this.usuariosPrd.setUsuario(datos);
      let toast = this.toastCtrl.create({message:"Validado con exito",duration:1500});
      toast.present();
      this.navCtrl.setRoot(TabsPage);
   },err =>{
    load.dismiss();
     let toast = this.toastCtrl.create({message:err.error.Message,closeButtonText:"Entendido",showCloseButton:true});
     toast.present();

     console.log("Error en el documento");
     console.log(err);
   });
     
  }

}
