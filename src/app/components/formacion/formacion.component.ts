import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList:any;
  item:any=[];

  constructor(private datos:DatosService) { }
  
  seleccionar(index:number){
    this.item=this.formacionList[index];
  }

  nuevoItem(){
    alert("agregar nuevo Formacion");
  }
  guardarItem(){
    alert("Se ha guardado correctamente");
  }

  eliminarItem(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.formacionList=data.formacion;
    });
  }

}
