import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Logros } from 'src/app/data/Logros';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

item:any=[];
logrosList:Logros[] = [];

  constructor(private portfolioservice:PortfolioService) { }

  seleccionar(index:number){
    this.item = this.logrosList[index];
  }

  guardarLogros(){
    alert("Se ha guardado correctamente");
  }
  eliminarLogros(){
    alert("Se ha eliminado correctamente");
  }
  
  ngOnInit(): void {
    this.portfolioservice.obtenerDatosLogros().subscribe(data =>{
      this.logrosList=data;
    });
  }

}
