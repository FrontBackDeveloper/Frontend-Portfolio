import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Experiencia } from 'src/app/data/Experiencia';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  item:any=[];
  experienciaList:Experiencia[]=[];

  constructor(private portfolio:PortfolioService) { }

  seleccionar(index:number){
    this.item = this.experienciaList[index];
  }

  guardarExperiencia(){
    alert("Se ha guardado correctamente");
  }
  eliminarExperiencia(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.portfolio.obtenerDatosExperiencia().subscribe(data =>{
      this.experienciaList=data;
    });
  }

}
