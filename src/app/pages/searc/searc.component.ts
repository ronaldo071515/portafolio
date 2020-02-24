import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-searc',
  templateUrl: './searc.component.html',
  styleUrls: ['./searc.component.css']
})
export class SearcComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              public productoServicio: ProductosService) 
              { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        console.log(params['termino']);
        this.productoServicio.buscarProducto( params['termino'] );
      });
  }

}
