import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { direcciones } from '../../assets/direcciones';

/*
  Generated class for the SobresProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SobresProvider {


  private direccion:string = "";
  constructor(public http: HttpClient) {
    console.log('Hello SobresProvider Provider');
    console.log(direcciones);
    this.direccion = direcciones.empleados;
  }

  public getSobres(numjpp,anio):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let url = `${this.direccion}/${numjpp}/sobres?anio=${anio}`;
    console.log(url);
     return this.http.get(url,httpOptions);
  }

  public getdesglosesobre(numjpp,aniomes,tipo_nomina){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    let url = `${this.direccion}/${numjpp}/sobres/${aniomes}?tiponomina=${tipo_nomina}`;
     return this.http.get(url,httpOptions);
  }



}
