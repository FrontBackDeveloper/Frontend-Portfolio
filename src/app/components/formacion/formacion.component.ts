import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/data/Formacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList:Formacion[] = [];
  item:any=[];
  isUserLogged: Boolean = false;

  constructor(private portfolio:PortfolioService, private authservice:AuthService) { }
  
  seleccionar(index:number){
    this.item=this.formacionList[index];
  }

 
  guardarFormacion(){
    alert("Se ha guardado correctamente");
  }

  eliminarFormacion(){
    alert("Se ha eliminado correctamente");
  }

  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolio.obtenerDatosFormacion().subscribe(data =>{
      this.formacionList=data;
      console.log(data);
    });
  }

}
