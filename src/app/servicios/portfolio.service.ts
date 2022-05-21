import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personas } from '../data/Personas';
import { Acercade } from '../data/Acercade';
import { Formacion } from '../data/Formacion';
import { Experiencia } from '../data/Experiencia';
import { Logros } from '../data/Logros';
import { Proyectos } from '../data/Proyectos';
import { RedesSociales } from '../data/RedesSociales';
import { Contacto } from '../data/Contacto';
import { Habilidades } from '../data/Habilitades';

@Injectable({
  providedIn: 'root'
})


export class PortfolioService {

urlBase: string = "https://portfoliowebbackend.herokuapp.com";
  constructor(private http: HttpClient) { }
 
  // -------CRUD PERFIL------ //


  obtenerDatosPersonas(): Observable<Personas[]> {
    return this.http.get<any>(this.urlBase + "/personas/traer");
  }

  guardarDatosPersonas(form: Personas): Observable<Personas> {
    return this.http.post<Personas>(this.urlBase + "/personas/crear" , form );
  }

  editarDatosPersonas(personas: Personas): Observable<Personas> {
    
    return this.http.put<Personas>(this.urlBase + "/personas/editar", personas);
  }

  // -------CRUD ACERCA DE------ //
  obtenerDatosAcercade(): Observable<Acercade[]> {
    return this.http.get<any>(this.urlBase + "/acercade/traer");
  }

// -------CRUD FORMACION------ //

  obtenerDatosFormacion(): Observable<Formacion[]> {
    return this.http.get<any>(this.urlBase + "/formacion/traer");
  }
  
  guardarDatosFormacion(form: Formacion): Observable<Formacion> {
    return this.http.post<Formacion>(this.urlBase + "/formacion/crear" , form );
  }

  editarDatosFormacion(formacion: Formacion): Observable<Formacion> {
    
    return this.http.put<Formacion>(this.urlBase + "/formacion/editar", formacion);
  }

  borrarDatosFormacion(id: number): Observable<unknown> {
  const url = `${this.urlBase + "/formacion/borrar"}/${id}`; 
  return this.http.delete(url);
  }

// -------CRUD EXPERIENCIA------ //

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>(this.urlBase + "/experiencia/traer");
  }
  guardarDatosExperiencia(form: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.urlBase + "/experiencia/crear" , form );
  }

  editarDatosExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(this.urlBase + "/experiencia/editar", experiencia);
  }

  borrarDatosExperiencia(id: number): Observable<unknown> {
  const url = `${this.urlBase + "/experiencia/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD LOGROS------ //
  obtenerDatosLogros(): Observable<Logros[]> {
    return this.http.get<any>(this.urlBase + "/logros/traer");
  }
  guardarDatosLogros(form: Logros): Observable<Logros> {
    return this.http.post<Logros>(this.urlBase + "/logros/crear" , form );
  }

  editarDatosLogros(logros: Logros): Observable<Logros> {
    return this.http.put<Logros>(this.urlBase + "/logros/editar", logros);
  }

  borrarDatosLogros(id: number): Observable<unknown> {
    const url = `${this.urlBase + "/logros/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD PROYECTOS------ //
  obtenerDatosProyectos(): Observable<Proyectos[]> {
    return this.http.get<any>(this.urlBase + "/proyectos/traer");
  }
  guardarDatosProyectos(form: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(this.urlBase + "/proyectos/crear" , form );
  }

  editarDatosProyectos(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(this.urlBase + "/proyectos/editar", proyectos);
  }

  borrarDatosProyectos(id: number): Observable<unknown> {
    const url = `${this.urlBase + "/proyectos/borrar"}/${id}`; 
  return this.http.delete(url);
  }

  // -------CRUD HABILIDADES------ //
 
  obtenerDatosHabilidades(): Observable<Habilidades[]> {
    return this.http.get<any>(this.urlBase + "/aptitudes/traer");
  }
  
  guardarDatosHabilidades(form: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(this.urlBase + "/aptitudes/crear" , form );
  }

  editarDatosHabilidades(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.put<Habilidades>(this.urlBase + "/aptitudes/editar", habilidades);
  }

  borrarDatosHabilidades(id: number): Observable<unknown> {
  const url = `${this.urlBase + "/aptitudes/borrar"}/${id}`; 
  return this.http.delete(url);
  }

// -------CRUD REDES------ //

obtenerDatosRedesSociales(): Observable<RedesSociales[]> {
  return this.http.get<any>(this.urlBase + "/redessociales/traer");
}

guardarDatosRedesSociales(form: RedesSociales): Observable<RedesSociales> {
  return this.http.post<RedesSociales>(this.urlBase + "/redessociales/crear" , form );
}

editarDatosRedesSociales(redes: RedesSociales): Observable<RedesSociales> {
  
  return this.http.put<RedesSociales>(this.urlBase + "/redessociales/editar", redes);
}

borrarDatosRedesSociales(id: number): Observable<unknown> {
const url = `${this.urlBase + "/redessociales/borrar"}/${id}`; 
return this.http.delete(url);
}

  // -------CRUD CONTACTO------ //

  obtenerDatosContacto(): Observable<Contacto[]> {
    return this.http.get<any>(this.urlBase + "/contacto/traer");
  }
  
  guardarDatosContacto(form: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.urlBase + "/contacto/crear" , form );
  }

  borrarDatosContacto(id: number): Observable<unknown> {
  const url = `${this.urlBase + "/contacto/borrar"}/${id}`; 
  return this.http.delete(url);
  }


  
}
