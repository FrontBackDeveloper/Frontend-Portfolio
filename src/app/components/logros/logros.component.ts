import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
logrosList:any;

  constructor(private datos:DatosService) { }
  guardarItem(){
    alert("Se ha guardado correctamente");
  }
  eliminarItem(){
    alert("Se ha eliminado correctamente");
  }
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.logrosList=data.logros;
    });
  }

}
