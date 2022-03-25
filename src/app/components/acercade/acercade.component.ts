import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  infoPersonalList:any;
  mostrarBotonEditar:any;
  
  constructor(private datos:DatosService, private authService:AuthService) { 
   
  }

  guardarItem(){
    alert("Se ha guardado correctamente");
  }
  
  ngOnInit(): void {
    this.mostrarBotonEditar = this.authService.isUserLogged();

    this.datos.obtenerDatos().subscribe(data =>{
        this.infoPersonalList=data.acercade;
        
    });
   

  }

}
