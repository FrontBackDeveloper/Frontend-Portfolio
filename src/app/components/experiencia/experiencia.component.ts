import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
experienciaList:any;
  constructor(private datos:DatosService) { }

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
