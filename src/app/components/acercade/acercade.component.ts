import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { Acercade } from 'src/app/data/Acercade';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  infoPersonal: any;
  isUserLogged: Boolean = false;
  
  constructor(private portfolioservice:PortfolioService, 
              private authService:AuthService) { 
   
  }

  guardarAcercade(){
    alert("Se ha guardado correctamente");
  }
  
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();

    this.portfolioservice.obtenerDatosAcercade().subscribe(data =>{
        this.infoPersonal=data;
        
    });
   

  }

}

