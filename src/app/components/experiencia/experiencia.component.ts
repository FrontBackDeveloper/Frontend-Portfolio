import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Experiencia } from 'src/app/data/Experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienciaList:Experiencia[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
  form: FormGroup;  
  

  constructor(private portfolio:PortfolioService,
              private authservice:AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.form = this.formBuilder.group({
                  id: [''],
                  puesto: ['', [Validators.required, Validators.maxLength(45)]],
                  lugar: ['', [Validators.required, Validators.maxLength(45)]],
                  desde: ['', [Validators.required, Validators.maxLength(10)]],
                  hasta: ['', [Validators.required, Validators.maxLength(10)]],
                  imagen: ['', [Validators.maxLength(45)]]
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                
                this.reloadData();
              }

              reloadData() {
                this.portfolio.obtenerDatosExperiencia().subscribe(
                  (data) => {
                    this.experienciaList = data;
                    console.log(data);
                  }
                );
              }
              clearForm() {
                this.form.setValue({
                  id: '',
                  puesto: '',
                  lugar: '',
                  desde: '',
                  hasta: '',
                  imagen: ''
                })
              }
            
              loadForm(experiencia: Experiencia) {
                this.form.setValue({
                  id: experiencia.id,
                  puesto: experiencia.puesto,
                  lugar: experiencia.lugar,
                  desde: experiencia.desde,
                  hasta: experiencia.hasta,
                  imagen: experiencia.imagen
                })
              }

              onSubmit() {
                let experiencia: Experiencia = this.form.value;
                if (this.form.get('id')?.value == '') {
                  this.portfolio.guardarDatosExperiencia(experiencia).subscribe(
                    (newExperiencia: Experiencia) => {
                      this.experienciaList.push(newExperiencia);
                      this.reloadData();
                    }
                  );
                } else {
                  console.log(experiencia);
                  this.portfolio.editarDatosExperiencia(experiencia).subscribe(
                    () => {
                            this.reloadData();
                     }
                  )
                }
              }
                         
              nuevaExperiencia() {
                this.clearForm();
              }
            
              seleccionarYEditar(index: number) {
                let experiencia: Experiencia = this.experienciaList[index];
                this.loadForm(experiencia);
              }
            
              seleccionarYBorrar(index: number) {
                let experiencia:Experiencia = this.experienciaList[index];
                if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
                  this.portfolio.borrarDatosExperiencia(experiencia.id).subscribe(
                    () => {
                      this.reloadData();
                    }
                  )
                }
              }
            
            }
            