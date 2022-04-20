import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../data/Personas';
import { Acercade } from '../data/Acercade';
import { Formacion } from '../data/Formacion';
import { Experiencia } from '../data/Experiencia';
import { Logros } from '../data/Logros';
import { Proyectos } from '../data/Proyectos';
import { Aptitudes } from '../data/Aptitudes';
import { RedesSociales } from '../data/RedesSociales';
import { Contacto } from '../data/Contacto';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  obtenerDatosPersonas(): Observable<Personas> {
    return this.http.get<Personas>("http://localhost:8080/personas/traer");
  }
  
  obtenerDatosFormacion(): Observable<Formacion[]> {
    return this.http.get<any>("http://localhost:8080/formacion/traer");
  }
  guardarDatosFormacion(formacion: Formacion): Observable<Formacion> {
    return this.http.post<Formacion>("http://localhost:8080/formacion/crear" , formacion )
  }
  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>("http://localhost:8080/experiencia/traer");
  }
  obtenerDatosLogros(): Observable<Logros[]> {
    return this.http.get<any>("http://localhost:8080/logros/traer");
  }
  obtenerDatosAcercade(): Observable<Acercade> {
    return this.http.get<any>("http://localhost:8080/acercade/traer");
  }
  obtenerDatosProyectos(): Observable<Proyectos[]> {
    return this.http.get<any>("http://localhost:8080/proyectos/traer");
  }
  obtenerDatosAptitudes(): Observable<Aptitudes[]> {
    return this.http.get<any>("http://localhost:8080/aptitudes/traer");
  }
  obtenerDatosRedesSociales(): Observable<RedesSociales[]> {
    return this.http.get<any>("http://localhost:8080/redessociales/traer");
  }
  obtenerDatosContacto(): Observable<Contacto[]> {
    return this.http.get<any>("http://localhost:8080/contacto/traer");
  }

  
}
