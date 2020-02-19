import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* En el costructor se injectan los servicios */
  constructor(public infoPaginaService :  InfoPaginaService){

  }
}
