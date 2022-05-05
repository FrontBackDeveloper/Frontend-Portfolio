import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Personas } from 'src/app/data/Personas';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  infoPersonal:Personas[] = [];
  constructor(private portfolio:PortfolioService) { }
 
  descargarCV(){
    alert("Se ha descargado correctamente")
  }

  ngOnInit(): void {
   this.portfolio.obtenerDatosPersonas().subscribe(data =>{
    this.infoPersonal=data;
    console.log(data);
   });
  }
}
