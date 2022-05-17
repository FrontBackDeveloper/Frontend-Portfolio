import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Personas } from 'src/app/data/Personas';
import { RedesSociales } from 'src/app/data/RedesSociales';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  infoPersonal:Personas[] = [];
  infoPersonalAcercade: any =[];
  redesList:RedesSociales[] = [];
  isUserLogged: Boolean = false;
  item:any=[];
  form: FormGroup;  
  
  constructor(private portfolio:PortfolioService,
    private authservice:AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        id: [''],
        nombrecompleto: ['', [Validators.required, Validators.maxLength(45)]],
        edad: ['', [Validators.required, Validators.maxLength(2)]],
        puesto: ['', [Validators.required, Validators.maxLength(45)]],
        titulo: ['', [Validators.required, Validators.maxLength(45)]],
        fotoperfil: ['', [Validators.required, Validators.maxLength(45)]],
        ciudad: ['', [Validators.required, Validators.maxLength(45)]],
        pais: ['', [Validators.required, Validators.maxLength(45)]],
        email: ['', [Validators.required, Validators.maxLength(45)]],
        telefono: ['', [Validators.required, Validators.maxLength(45)]],
        hobby: ['', [Validators.required, Validators.maxLength(45)]],
        descripcion: ['', [Validators.required, Validators.maxLength(255)]]
      });
     }

     ngOnInit(): void {
      this.isUserLogged = this.authservice.isUserLogged();
      
      this.reloadData();
    }

    reloadData() {
      this.portfolio.obtenerDatosPersonas().subscribe(
        (data) => {
          this.infoPersonal = data;
          console.log(data);
        }
      );
      this.portfolio.obtenerDatosAcercade().subscribe(
        (data) => {
          this.infoPersonalAcercade = data;
          console.log(data);
        }
      );
      this.portfolio.obtenerDatosRedesSociales().subscribe(
        (data) => {
          this.redesList = data;
        }
      );

    }
    clearForm() {
      this.form.setValue({
        id: '',
        nombrecompleto: '',
        edad: '',
        puesto: '',
        titulo: '',
        fotoperfil: '',
        ciudad: '',
        pais: '',
        email: '',
        telefono: '',
        hobby: '',
        descripcion: ''
      })
    }
  
    loadForm(personas: Personas) {
      this.form.setValue({
        id: personas.id,
        nombrecompleto: personas.nombrecompleto,
        edad: personas.edad,
        puesto: personas.puesto,
        titulo: personas.titulo,
        fotoperfil: personas.fotoperfil,
        ciudad: personas.ciudad,
        pais: personas.pais,
        email: personas.email,
        telefono: personas.telefono,
        hobby: personas.hobby,
        descripcion: personas.descripcion
      })
    }

    onSubmit() {
      let personas: Personas = this.form.value;
     
        console.log(personas);
        this.portfolio.editarDatosPersonas(personas).subscribe(
          () => {
                  this.reloadData();
           }
        )
      }
      seleccionarYEditar(index: number) {
        let personas: Personas = this.infoPersonal[index];
        this.loadForm(personas);
      }
      nuevaDescripcion() {
        console.log("editar descripcion");
      }

      editarRedesSociales(){
        console.log("ir a panel de edicion...");
        this.router.navigate(['/editarredes']);
      }

    }
  
   
  
  
  