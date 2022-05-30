import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Personas } from 'src/app/data/Personas';
import { Formacion } from 'src/app/data/Formacion';
import { Experiencia } from 'src/app/data/Experiencia';
import { Logros } from 'src/app/data/Logros';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  infoPersonal:Personas[] = [];
  formacionList:Formacion[] = [];
  experienciaList:Experiencia[] = [];
  logrosList:Logros[] = [];

  constructor(private portfolio:PortfolioService,
               private router: Router) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosPersonas().subscribe(data =>{
      this.infoPersonal=data;
    
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
  descargarCV(){

    const pdf = new jsPDF(); 

    pdf.save("curriculum.pdf");

    alert("Se ha descargado correctamente");
    this.router.navigate(['/home']);
  }
}

