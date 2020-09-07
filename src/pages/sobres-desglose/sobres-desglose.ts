import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SobresProvider } from '../../providers/sobres/sobres';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ip } from '../../assets/direcciones';

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
  private cantidad_total:number = 0;
  private totalpercepcion:number = 0;
  private totaldeduccion:number = 0;
  private percepciones=[];

  private deducciones=[];
  private tipo_nomina:string = "";
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private sobresPrd:SobresProvider,
    private Abrowse:InAppBrowser,private loadCtrl:LoadingController) {
    this.sobre = navParams.get("obj");
    this.tipo_nomina = "N";


    let cargando = this.loadCtrl.create({content:"Recopilando información"});
    cargando.present();
    this.sobresPrd.getdesglosesobre(this.sobre.code,this.sobre.archivo,this.tipo_nomina).subscribe(datos =>{
      cargando.dismiss();
      let arreglo:any = datos;
      for(let item of arreglo){
            if(item.clave <= 69){
                this.percepciones.push(item);
                this.totalpercepcion = this.totalpercepcion + item.monto;
            }else{
                this.deducciones.push(item);
                this.totaldeduccion = this.totaldeduccion + item.monto;
            }
      }

      this.cantidad_total = this.totalpercepcion - this.totaldeduccion;

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobresDesglosePage');
  }


  public imprimir(){

    let url = `https://docs.google.com/viewer?url=${ip}/empleados/${this.sobre.code}/sobres/${this.sobre.archivo}/tiponomina/${this.tipo_nomina}/visualizar`;
    console.log("lo que se va a visualziar");
    console.log(url);
   this.Abrowse.create(url,"_system")
  }

}
