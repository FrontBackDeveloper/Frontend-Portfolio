import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Personas } from 'src/app/data/Personas';
import { Formacion } from 'src/app/data/Formacion';
import { Experiencia } from 'src/app/data/Experiencia';
import { Logros } from 'src/app/data/Logros';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  infoPersonal:any;
  formacionList:Formacion[] = [];
  experienciaList:Experiencia[] = [];
  logrosList:Logros[] = [];

  constructor(private portfolio:PortfolioService) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosAcercade().subscribe(data =>{
      this.infoPersonal =data;
    });

    this.portfolio.obtenerDatosFormacion().subscribe(data =>{
      this.formacionList=data;
    });
    this.portfolio.obtenerDatosExperiencia().subscribe(data =>{
      this.experienciaList=data;
    });
    this.portfolio.obtenerDatosLogros().subscribe(data =>{
      this.logrosList=data;
    });
  }
}

