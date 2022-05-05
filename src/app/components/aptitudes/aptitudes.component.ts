import { Component, OnInit } from '@angular/core';
import { Aptitudes } from 'src/app/data/Aptitudes';
import { AuthService } from 'src/app/servicios/auth.service';
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

  constructor(private portfolioservice:PortfolioService,
              private authservice: AuthService) { }

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
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolioservice.obtenerDatosAptitudes().subscribe(data =>{
      this.aptitudesList=data;
      console.log(data);  
    });
  }

}
