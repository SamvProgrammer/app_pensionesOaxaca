import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ip } from '../../assets/direcciones';
import { Observable } from 'rxjs/observable';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  private datosusuario:any;

  constructor(private http:HttpClient,private storage:Storage) {
    
  }


  public getUsuario(){
    return this.datosusuario;
  }

  public setUsuario(obj){
    this.storage.set("usuario",obj);
    this.datosusuario = obj;
    console.log(this.datosusuario);
  }


  public ingresandoSistema(obj):Observable<any>{
    let url = ip+"/empleados/ingresar";
    console.log(url);
    console.log("ESTOS LA URL");
    console.log(obj);

    let json = JSON.stringify(obj);

    console.log(json);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

   
     return this.http.post(url,json,httpOptions);

  }

}
