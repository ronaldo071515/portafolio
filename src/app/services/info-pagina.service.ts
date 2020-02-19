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


  constructor(private http: HttpClient) { /*injectar servicio de tipo http, que lo usamos para conectar a servidores externos */
/*     console.log('info  pagina cargada'); */

    /* leer el archivo JSON */
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: infoPagina) =>{

        this.cargada = true;
        this.info = resp;
          console.log(resp);
      })
  }
}
