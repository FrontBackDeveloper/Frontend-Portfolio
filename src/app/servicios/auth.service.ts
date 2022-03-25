import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public login(usuario:string , password:string) : Boolean{
    if (usuario == "gustavo") {
      localStorage.setItem("user","gustavo");
    return true;
   } else {
     this.logout();
     return false;
   }
  }
   public logout(){
     localStorage.removeItem("user");
   }
   public isUserLogged(): Boolean {
    return localStorage.getItem("user") !== null;
   }
  
}
