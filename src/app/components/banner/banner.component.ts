import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  infoPersonalList:any;
  constructor(private datos:DatosService) { }

  descargarCV(){
    alert("Se ha descargado correctamente")
  }

  ngOnInit(): void {
   this.datos.obtenerDatos().subscribe(data =>{
  
    this.infoPersonalList=data;
   });
  }
}
