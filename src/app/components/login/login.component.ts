import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router'

import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  

  constructor() { }

  guardarPerfil(){
    alert("Su perfil se ha guardado correctamente")
  }

  ngOnInit(): void {
  }
}
