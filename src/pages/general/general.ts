import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the GeneralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  private usuario:any;
  private numerojubilado:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private loadCtrl:LoadingController,private usuarioPrd:UsuarioProvider) {
     this.usuario =  this.usuarioPrd.getUsuario();
     switch(this.usuario.jpp){
        case "JUB":
          this.numerojubilado = "JUBILADO" + " "+this.usuario.num;
          break;
          case "PTA":
            this.numerojubilado = "PENSIONISTA" + " "+this.usuario.num;
          break;
          case "PDO":
            this.numerojubilado = "PENSIONADO" + " "+this.usuario.num;
          break;
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }

}
