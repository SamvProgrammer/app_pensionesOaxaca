import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { GeneralPage } from '../general/general';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = GeneralPage;
  tab2 = InicioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
