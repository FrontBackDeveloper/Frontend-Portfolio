import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  infoPersonal:any;
  formacionList:any;
  experienciaList:any;

  constructor(private datos:DatosService) { }

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data =>{
      this.infoPersonal=data;
      this.formacionList=data.formacion;
      this.experienciaList=data.experiencia;
    });
  }

}

