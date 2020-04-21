import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SobresDesglosePage } from '../sobres-desglose/sobres-desglose';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  arreglo=[
    {nombre:'Abril'},
    {nombre:'Marzo'},
    {nombre:'Febrero'},
    {nombre:'Enero'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }


  doInfinite(): Promise<any> {
    console.log("Se ejecuta");
    return new Promise((resolve) => {
      //this.offset = this.offset + 10;
    setTimeout(() => {
      resolve();
    }, 1000);
    })
  }


  public abrir(obj){
      this.navCtrl.push(SobresDesglosePage,{obj:obj});
  }


}
