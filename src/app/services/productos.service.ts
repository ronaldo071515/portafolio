import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFilter: Producto[] = [];

  constructor(private http: HttpClient) {

    this.cargarProductos();
  }

  private cargarProductos(){
    /* colocar el metodo asincrono, utilizando promesas de emc6 */

    return new Promise( (resolve, reject ) =>{

    this.http.get('https://portafolio-75d7e.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[]) =>{

      this.productos = resp;
      this.cargando = false;
      resolve();
    });

    });
  }

  getProducto(id: string) {
    return this.http.get(`https://portafolio-75d7e.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0){
      /* //cargar productos */
      this.cargarProductos().then(()=>{
/*         //ejecuta despues de tenenr los productos
        //aplicar filtro */
        this.filtrarProducto(termino);
      });
    }else{
/*       //aplicar el filtro */
      this.filtrarProducto(termino);
    }
  }

  private filtrarProducto(termino: string){

    this.productoFilter = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ){
        this.productoFilter.push(prod);
      }
    });
/*     console.log(this.productos); */
  }

}
