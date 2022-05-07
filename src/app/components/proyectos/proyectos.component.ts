import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/data/Proyectos';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectosList:Proyectos[] = [];
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
                  tipo: ['', [Validators.required, Validators.maxLength(20)]],
                  creado: ['', [Validators.required, Validators.maxLength(20)]],
                  herramientas: ['', [Validators.required, Validators.maxLength(45)]],
                  estado: ['', [Validators.required, Validators.maxLength(20)]],
                  url: ['', [Validators.maxLength(20)]],
                  imagen: ['', [Validators.maxLength(45)]]
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                
                this.reloadData();
              }

              private reloadData() {
                this.portfolio.obtenerDatosProyectos().subscribe(
                  (data) => {
                    this.proyectosList = data;
                  }
                );
              }
              private clearForm() {
                this.form.setValue({
                  id: '',
                  titulo: '',
                  tipo: '',
                  creado: '',
                  herramientas: '',
                  estado: '',
                  url: '',
                  imagen: ''
                })
              }
            
              private loadForm(proyecto: Proyectos) {
                this.form.setValue({
                  id: proyecto.id,
                  titulo: proyecto.titulo,
                  tipo: proyecto.tipo,
                  creado: proyecto.creado,
                  herramientas: proyecto.herramientas,
                  estado: proyecto.estado,
                  url: proyecto.url,
                  imagen: proyecto.imagen
                })
              }

              onSubmit() {
                let proyecto: Proyectos = this.form.value;
                if (this.form.get('id')?.value == '') {
                  this.portfolio.guardarDatosProyectos(proyecto).subscribe(
                    (newProyecto: Proyectos) => {
                      this.proyectosList.push(newProyecto);
                    }
                  );
                } else {
                  console.log(proyecto);
                  this.portfolio.editarDatosProyectos(proyecto).subscribe(
                    () => {
                            this.reloadData();
                     }
                  )
                }
              }
             
            
              nuevoProyecto() {
                this.clearForm();
              }
            
              seleccionarYEditar(index: number) {
                let proyecto: Proyectos = this.proyectosList[index];
                this.loadForm(proyecto);
              }
            
              seleccionarYBorrar(index: number) {
                let proyecto: Proyectos = this.proyectosList[index];
                if (confirm("¿Está seguro que desea borrar el proyecto seleccionado?")) {
                  this.portfolio.borrarDatosProyectos(proyecto.id).subscribe(
                    () => {
                      this.reloadData();
                    }
                  )
                }
              }
            
            }
            
