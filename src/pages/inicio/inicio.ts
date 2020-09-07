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
  public anioslista:any = [];
  private numjpp:string = "";
  private anio:string = "";
  private code:string = "";
  private anioseleccinado:string = new Date().getFullYear().toString();

  constructor(public navCtrl: NavController, public navParams: NavParams,private sobresPrd:SobresProvider,private loadCtrl:LoadingController,private usuarios:UsuarioProvider) {

    this.code = this.usuarios.getUsuario().code;
    this.anio = new Date().getFullYear().toString();
    let cargando = this.loadCtrl.create({content:"Recopilando información"});
    cargando.present();
    this.sobresPrd.getSobres(this.code,this.anio).subscribe(datos =>{
      this.arreglo = datos.listasobre;
      this.anioslista = datos.listaanios;
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
        anio:this.anio,
        code:this.code,
        mesnombre:item.mesnombre
       }


      this.navCtrl.push(SobresDesglosePage,{obj:obj});
  }


  public onChange(even){
    this.anio = even;
    let cargando = this.loadCtrl.create({content:"Recopilando información"});
    cargando.present();
    this.sobresPrd.getSobres(this.code,this.anio).subscribe(datos =>{
      this.arreglo = datos.listasobre;
      this.anioslista = datos.listaanios;
      cargando.dismiss();
    });
  }


}
