import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/data/Formacion';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
              private formBuilder: FormBuilder) {
                this.form = this.formBuilder.group({
                  id: [''],
                  titulo: ['', [Validators.required, Validators.maxLength(45)]],
                  institucion: ['', [Validators.required, Validators.maxLength(45)]],
                  lugar: ['', [Validators.required, Validators.maxLength(45)]],
                  fecha: ['', [Validators.required, Validators.maxLength(20)]],
                  imagen: ['', [Validators.maxLength(45)]]
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                
                this.reloadData();
              }

              private reloadData() {
                this.portfolio.obtenerDatosFormacion().subscribe(
                  (data) => {
                    this.formacionList = data;
                  }
                );
              }
              private clearForm() {
                this.form.setValue({
                  id: '',
                  titulo: '',
                  institucion: '',
                  lugar: '',
                  fecha: '',
                  imagen: ''
                })
              }
            
              private loadForm(formacion: Formacion) {
                this.form.setValue({
                  id: formacion.id,
                  titulo: formacion.titulo,
                  institucion: formacion.institucion,
                  lugar: formacion.lugar,
                  fecha: formacion.fecha,
                  imagen: formacion.imagen
                })
              }

              onSubmit() {
                let formacion: Formacion = this.form.value;
                if (this.form.get('id')?.value == '') {
                  this.portfolio.guardarDatosFormacion(formacion).subscribe(
                    (newFormacion: Formacion) => {
                      this.formacionList.push(newFormacion);
                    }
                  );
                } else {
                  console.log(formacion);
                  this.portfolio.editarDatosFormacion(formacion).subscribe(
                    () => {
                            this.reloadData();
                     }
                  )
                }
              }
             
            
              nuevaFormacion() {
                this.clearForm();
              }
            
              seleccionarYEditar(index: number) {
                let formacion: Formacion = this.formacionList[index];
                this.loadForm(formacion);
              }
            
              seleccionarYBorrar(index: number) {
                let formacion: Formacion = this.formacionList[index];
                if (confirm("¿Está seguro que desea borrar la formación seleccionada?")) {
                  this.portfolio.borrarDatosFormacion(formacion.id).subscribe(
                    () => {
                      this.reloadData();
                    }
                  )
                }
              }
            
            }
            