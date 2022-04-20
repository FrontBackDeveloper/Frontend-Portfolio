import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/data/Formacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacionList:Formacion[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
  form: FormGroup;


  constructor(private portfolio:PortfolioService,
              private authservice:AuthService,
              private router: Router,
              private formBuilder: FormBuilder)
               {
                this.form = this.formBuilder.group({
                  titulo: ['', [Validators.required, Validators.maxLength(45)]],
                  institucion: ['', [Validators.required, Validators.maxLength(45)]],
                  lugar: ['', [Validators.required, Validators.maxLength(45)]],
                  fecha: ['', [Validators.required, Validators.maxLength(20)]],
                  imagen: ['', [Validators.maxLength(45)]]
                })
               }
  
  seleccionar(index:number){
    this.item=this.formacionList[index];
  }

  guardarFormacion(event: Event){
    this.portfolio.guardarDatosFormacion(this.form.value).subscribe(formacion => console.log(formacion));
    alert("Se ha guardado correctamente");
    this.router.navigate(['']);
  }

  actualizarFormacion(){
    alert("Se ha eliminado correctamente");
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
