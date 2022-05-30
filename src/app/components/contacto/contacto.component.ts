import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/data/Contacto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactoList:Contacto[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
  form: FormGroup;  
  siteKey: string;
  lang: string;

  constructor(private portfolio:PortfolioService,
              private authservice:AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.siteKey = '6LdjX_4fAAAAADor07u8KkTleCCAGLTRB3HJvsx2';
                this.lang = 'esp';
                this.form = this.formBuilder.group({
                  id: [''],
                  nombre: ['', [Validators.required, Validators.maxLength(45)]],
                  email: ['', [Validators.required, Validators.email]],
                  telefono: ['', [Validators.required, Validators.maxLength(45)]],
                  mensaje: ['', [Validators.required, Validators.maxLength(255)]]
                });
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
               }

              onSubmit(event: Event) {
                  this.portfolio.guardarDatosContacto(this.form.value).subscribe(data => {
                      this.contactoList.push();
                      alert("Su mensaje fue enviado exitosamente");
                   
                     this.router.navigate(['/home']);
                    });
              }
              get Nombre() {
                return this.form.get('nombre');
              }
              get Telefono() {
                return this.form.get('telefono');
              }
              get Email() {
                return this.form.get('email');
              }
              get Mensaje() {
                return this.form.get('mensaje');
              }

            
            }
            