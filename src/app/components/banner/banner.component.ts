import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  infoPersonal:any;
  constructor(private portfolio:PortfolioService) { }

  descargarCV(){
    alert("Se ha descargado correctamente")
  }

  ngOnInit(): void {
   this.portfolio.obtenerDatosAcercade().subscribe(data =>{
  
    this.infoPersonal=data;
   });
  }
}
