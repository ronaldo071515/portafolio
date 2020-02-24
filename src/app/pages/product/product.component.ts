import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

/* servicio activate, para poder leer las rutas */
  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametros =>  {
      /* console.log(parametros['id']); */
      this.productoService.getProducto(parametros['id'])
        .subscribe( (producto: ProductoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
/*           console.log(producto); */
        });
      });
    }
}
