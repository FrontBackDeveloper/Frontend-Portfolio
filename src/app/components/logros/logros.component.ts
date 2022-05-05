import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Logros } from 'src/app/data/Logros';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

item:any=[];
logrosList:Logros[] = [];
isUserLogged: Boolean = false;

  constructor(private portfolioservice:PortfolioService,
              private authservice: AuthService) { }

  seleccionar(index:number){
    this.item = this.logrosList[index];
  }

  guardarLogros(){
    alert("Se ha guardado correctamente");
  }
  eliminarLogros(){
    alert("Se ha eliminado correctamente");
  }
  
  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolioservice.obtenerDatosLogros().subscribe(data =>{
      this.logrosList=data;
      console.log(data);  
    });
  }

}
