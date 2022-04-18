import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/data/Aptitudes';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  item:any=[];
aptitudesList:Aptitudes[] = [];
isUserLogged: Boolean = false;

  constructor(private portfolioservice:PortfolioService) { }

  seleccionar(index:number){
    this.item = this.aptitudesList[index];
  }

  guardarAptitudes(){
    alert("Se ha guardado correctamente");
  }
  eliminarAptitudes(){
    alert("Se ha eliminado correctamente");
  }
  
  ngOnInit(): void {
    this.portfolioservice.obtenerDatosAptitudes().subscribe(data =>{
      this.aptitudesList=data;
      console.log(data);  
    });
  }

}
