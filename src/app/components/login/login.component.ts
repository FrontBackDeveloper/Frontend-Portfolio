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
  username:string = "";
  password:string = "";

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Inicio de sesion: " + this.username + " " + this.password);
    let responde = this.authService.login(this.username, this.password); 
  }
}
