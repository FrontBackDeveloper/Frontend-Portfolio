import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  item:any;
experienciaList:any;
  constructor(private datos:DatosService) { }

  seleccionar(index:number){
    alert("el index es:" + index );
    this.experienciaList[index] = this.item;
  }

  guardarItem(){
    alert("Se ha guardado correctamente");
  }
  eliminarItem(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.experienciaList=data.experiencia;
    });
  }

}
