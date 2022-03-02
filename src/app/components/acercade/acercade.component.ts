import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  infoPersonalList:any;
  mostrarBotonEditar:boolean;
  
  constructor(private datos:DatosService) { 
    this.mostrarBotonEditar=true;
  }

  guardarItem(){
    alert("Se ha guardado correctamente");
  }
  
 
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
        this.infoPersonalList=data.acercade;
        
    });
   

  }

}
