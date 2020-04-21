import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SobresDesglosePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sobres-desglose',
  templateUrl: 'sobres-desglose.html',
})
export class SobresDesglosePage {

  private sobre;
  private percepciones=[{monto:3500,nombre:'Pension mensual'},
  {monto:8500,nombre:'Pension mensual'}];

  private deducciones=[{monto:3500,nombre:'Fdo de Pensiones'},
  {monto:8500,nombre:'Seguro de vida'},{monto:3500,nombre:'Vida cara'},
  {monto:8500,nombre:'Imss'}]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sobre = navParams.get("obj");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobresDesglosePage');
  }

}
