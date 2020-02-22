import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {


info: infoPagina= {};
cargada = false;
equipo: any [] = [];

  constructor(private http: HttpClient) { /*injectar servicio de tipo http, que lo usamos para conectar a servidores externos */
/*     console.log('info  pagina cargada'); */

    this.cargarInfo();//mas ordenado, creamos metodo lo llamamos en es constructor
    this.cargarEquipo();
  }

  private cargarInfo(){
    //servicio pegar la peticion http
    this.http.get('assets/data/data-pagina.json')    /* leer el archivo JSON */
    .subscribe( (resp: infoPagina) =>{

      this.cargada = true;
      this.info = resp;
    })
  }

  private cargarEquipo(){
    this.http.get('https://portafolio-75d7e.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) =>{
      this.equipo = resp;
/*       console.log(this.equipo[0]);
      console.log(this.equipo[0]['frase']); */
    })
  }
}
