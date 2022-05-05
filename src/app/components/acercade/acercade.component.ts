import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Personas } from 'src/app/data/Personas';
import { Acercade } from 'src/app/data/Acercade';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  infoPersonal:Personas[] = [];
  infoPersonalAcercade: any =[];
  isUserLogged: Boolean = false;
  item:any=[];
  
  constructor(private portfolio:PortfolioService, 
              private authservice:AuthService) { 
   
              }

 
  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolio.obtenerDatosPersonas().subscribe(data =>{
      this.infoPersonal=data;
      console.log(data);
    });
    this.portfolio.obtenerDatosAcercade().subscribe(data =>{
      this.infoPersonalAcercade=data;   
      console.log(data);   
  });
   
  }
  guardarAcercade(){
    alert("Se ha guardado correctamente");
  }
 
   

}

