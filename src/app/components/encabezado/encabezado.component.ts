import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miportfolio:any;
  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
  
      this.miportfolio=data;
    });

  }
}
