import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioNuevo } from 'src/app/data/UsuarioNuevo';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
 //usuario: string = "";
  //password: string = "";
  usuariosList:UsuarioNuevo[] = [];

  registroError: Boolean = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.maxLength(45)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        isenabled: ['true']
      })
     }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
      let usuarioNuevo: UsuarioNuevo = this.form.value;
      this.authService.UsuarioNuevo(usuarioNuevo).subscribe(
        (data) => {
          this.usuariosList.push(usuarioNuevo);
         console.log(usuarioNuevo);
         this.router.navigate(['home']);
        }
      );
    
  }
}

