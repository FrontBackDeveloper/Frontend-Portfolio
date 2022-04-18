import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/data/Formacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList:Formacion[] = [];
  item:any=[];

  constructor(private portfolio:PortfolioService) { }
  
  seleccionar(index:number){
    this.item=this.formacionList[index];
  }

 
  guardarFormacion(){
    alert("Se ha guardado correctamente");
  }

  eliminarFormacion(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.portfolio.obtenerDatosFormacion().subscribe(data =>{
      this.formacionList=data;
    });
  }

}
