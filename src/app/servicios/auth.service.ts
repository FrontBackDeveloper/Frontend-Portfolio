import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginDto } from '../data/LoginDto';
import { UsuarioNuevo } from '../data/UsuarioNuevo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlBase: string = "https://portfoliowebbackend.herokuapp.com";

  constructor(private http: HttpClient) { }

  public login(credentials: LoginDto) : Observable<Boolean> {
    return this.http.post<Boolean>(this.urlBase + "/login", credentials).pipe(
      tap((response: Boolean) => {
        if (response)
          sessionStorage.setItem("user", "gustavo123");
      })
    );
  }

  UsuarioNuevo(form: UsuarioNuevo): Observable<UsuarioNuevo> {
    return this.http.post<UsuarioNuevo>(this.urlBase + "/registro" , form );
  }

  public logout() {
    sessionStorage.removeItem("user");
  }

  public isUserLogged():boolean {
    return sessionStorage.getItem("user") !== null;
  }
}
