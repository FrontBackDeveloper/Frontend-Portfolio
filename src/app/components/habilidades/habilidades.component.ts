import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/data/Habilitades';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadesList:Habilidades[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
  form: FormGroup;  
  niveles= [{id:"10%", name: "Principiante"},
            {id:"25%", name: "Básico"},
            {id:"50%", name: "Medio"},
            {id:"75%", name: "Avanzado"},
            {id:"100%", name: "Experto"},];
  

  constructor(private portfolio:PortfolioService,
              private authservice:AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.form = this.formBuilder.group({
                  id: [''],
                  titulo: ['', [Validators.required, Validators.maxLength(45)]],
                  nivel: ['']
                  
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                
                this.reloadData();
              }

              reloadData() {
                this.portfolio.obtenerDatosHabilidades().subscribe(
                  (data) => {
                    this.habilidadesList = data;
                    console.log(data);
                  }
                );
              }
              clearForm() {
                this.form.setValue({
                  id: '',
                  titulo: '',
                  nivel: ''
                })
              }
            
              loadForm(habilidades: Habilidades) {
                this.form.setValue({
                  id: habilidades.id,
                  titulo: habilidades.titulo,
                  nivel: habilidades.nivel
                 
                })
              }

              onSubmit() {
                let habilidades: Habilidades = this.form.value;
                if (this.form.get('id')?.value == '') {
                  this.portfolio.guardarDatosHabilidades(habilidades).subscribe(
                    (newHabilidad: Habilidades) => {
                      this.habilidadesList.push(newHabilidad);
                      console.log(habilidades);
                      this.ngOnInit();
                    }
                  );
                
                 
                } else {
                  console.log(habilidades);
                  this.portfolio.editarDatosHabilidades(habilidades).subscribe(
                    () => {
                            this.reloadData();
                     }
                  )
                }
              }
             
            
              nuevaHabilidad() {
                this.clearForm();
              }
            
              seleccionarYEditar(index: number) {
                let habilidades: Habilidades = this.habilidadesList[index];
                this.loadForm(habilidades);
              }
            
              seleccionarYBorrar(index: number) {
                let habilidades: Habilidades = this.habilidadesList[index];
                if (confirm("¿Está seguro que desea borrar la habilidad seleccionada?")) {
                  this.portfolio.borrarDatosHabilidades(habilidades.id).subscribe(
                    () => {
                      this.reloadData();
                    }
                  )
                }
              }
            

}
