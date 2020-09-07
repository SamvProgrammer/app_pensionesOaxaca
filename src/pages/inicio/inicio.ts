import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SobresDesglosePage } from '../sobres-desglose/sobres-desglose';
import { SobresProvider } from '../../providers/sobres/sobres';
import { UsuarioProvider } from '../../providers/usuario/usuario';




@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  public arreglo:any=[];
  private numjpp:string = "";
  private anio:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private sobresPrd:SobresProvider
    ,private loadCtrl:LoadingController,private usuarios:UsuarioProvider) {

    this.numjpp = this.usuarios.getUsuario().verificar;
    this.anio = "2020";
    let cargando = this.loadCtrl.create({content:"Recopilando información"});
    cargando.present();
    this.sobresPrd.getSobres(this.numjpp,this.anio).subscribe(datos =>{
      this.arreglo = datos;
      cargando.dismiss();
    });
  }

  ionViewDidLoad() {
    
  }





  public abrir(item){

       console.log(item);
       let obj = {
        archivo: item.archivo,
        numjpp:this.numjpp,
        anio:this.anio
       }


      this.navCtrl.push(SobresDesglosePage,{obj:obj});
  }


}
