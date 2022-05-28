import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Logros } from 'src/app/data/Logros';
import { AuthService } from 'src/app/servicios/auth.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logrosList:Logros[] = [];
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
                  url: ['', [Validators.maxLength(40)]],
                  imagen: ['', [Validators.maxLength(45)]]
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                this.reloadData();
              }

              reloadData() {
                this.portfolio.obtenerDatosLogros().subscribe(
                  (data) => {
                    this.logrosList = data;
                    console.log(data);
                  }
                );
              }
              clearForm() {
                this.form.setValue({
                  id: '',
                  titulo: '',
                  institucion: '',
                  lugar: '',
                  fecha: '',
                  url: '',
                  imagen: ''
                })
              }
            
              loadForm(logros: Logros) {
                this.form.setValue({
                  id: logros.id,
                  titulo: logros.titulo,
                  institucion: logros.institucion,
                  lugar: logros.lugar,
                  fecha: logros.fecha,
                  url: logros.url,
                  imagen: logros.imagen
                })
              }

              onSubmit() {
                let logros: Logros = this.form.value;
                if (this.form.get('id')?.value == '') {
                  this.portfolio.guardarDatosLogros(logros).subscribe(
                    (newLogro: Logros) => {
                      this.logrosList.push(newLogro);
                      this.reloadData();
                    }
                  );
                } else {
                  console.log(logros);
                  this.portfolio.editarDatosLogros(logros).subscribe(
                    () => {
                            this.reloadData();
                     }
                  )
                }
              }
             
            
              nuevoLogro() {
                this.clearForm();
              }
            
              seleccionarYEditar(index: number) {
                let logros: Logros = this.logrosList[index];
                this.loadForm(logros);
              }
            
              seleccionarYBorrar(index: number) {
                let logros: Logros = this.logrosList[index];
                if (confirm("¿Está seguro que desea borrar el logro seleccionado?")) {
                  this.portfolio.borrarDatosLogros(logros.id).subscribe(
                    () => {
                      this.reloadData();
                    }
                  )
                }
              }
            
            }
            