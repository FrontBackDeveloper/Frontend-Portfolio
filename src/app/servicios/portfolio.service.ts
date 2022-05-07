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
import { LoginComponent } from '../components/login/login.component';

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

  constructor(private http: HttpClient) { }
 
  // -------CRUD PERSONA------ //
  obtenerDatosPersonas(): Observable<Personas[]> {
    return this.http.get<any>("http://localhost:8080/personas/traer");
  }

  // -------CRUD ACERCA DE------ //
  obtenerDatosAcercade(): Observable<Acercade[]> {
    return this.http.get<any>("http://localhost:8080/acercade/traer");
  }

// -------CRUD FORMACION------ //

  obtenerDatosFormacion(): Observable<Formacion[]> {
    return this.http.get<any>("http://localhost:8080/formacion/traer");
  }
  
  guardarDatosFormacion(form: Formacion): Observable<Formacion> {
    return this.http.post<Formacion>("http://localhost:8080/formacion/crear" , form );
  }

  editarDatosFormacion(formacion: Formacion): Observable<Formacion> {
    
    return this.http.put<Formacion>("http://localhost:8080/formacion/editar", formacion);
  }

  borrarDatosFormacion(id: number): Observable<unknown> {
  const url = `${"http://localhost:8080/formacion/borrar"}/${id}`; 
  return this.http.delete(url);
  }

// -------CRUD EXPERIENCIA------ //

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>("http://localhost:8080/experiencia/traer");
  }
  guardarDatosExperiencia(form: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>("http://localhost:8080/experiencia/crear" , form );
  }

  editarDatosExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>("http://localhost:8080/experiencia/editar", experiencia);
  }

  borrarDatosExperiencia(id: number): Observable<unknown> {
  const url = `${"http://localhost:8080/experiencia/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD LOGROS------ //
  obtenerDatosLogros(): Observable<Logros[]> {
    return this.http.get<any>("http://localhost:8080/logros/traer");
  }
  guardarDatosLogros(form: Logros): Observable<Logros> {
    return this.http.post<Logros>("http://localhost:8080/logros/crear" , form );
  }

  editarDatosLogros(logros: Logros): Observable<Logros> {
    return this.http.put<Logros>("http://localhost:8080/logros/editar", logros);
  }

  borrarDatosLogros(id: number): Observable<unknown> {
    const url = `${"http://localhost:8080/logros/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD PROYECTOS------ //
  obtenerDatosProyectos(): Observable<Proyectos[]> {
    return this.http.get<any>("http://localhost:8080/proyectos/traer");
  }
  guardarDatosProyectos(form: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>("http://localhost:8080/proyectos/crear" , form );
  }

  editarDatosProyectos(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>("http://localhost:8080/proyectos/editar", proyectos);
  }

  borrarDatosProyectos(id: number): Observable<unknown> {
    const url = `${"http://localhost:8080/proyectos/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD APTITUDES------ //
  obtenerDatosAptitudes(): Observable<Aptitudes[]> {
    return this.http.get<any>("http://localhost:8080/aptitudes/traer");
  }

// -------CRUD REDES------ //
  obtenerDatosRedesSociales(): Observable<RedesSociales[]> {
    return this.http.get<any>("http://localhost:8080/redessociales/traer");
  }

  // -------CRUD CONTACTO------ //
  obtenerDatosContacto(): Observable<Contacto[]> {
    return this.http.get<any>("http://localhost:8080/contacto/traer");
  }

  
}
