import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { LogrosComponent } from './components/logros/logros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { PortfolioService } from './servicios/portfolio.service';
import { AuthService } from './servicios/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CVComponent } from './components/cv/cv.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    BannerComponent,
    ContactoComponent,
    EncabezadoComponent,
    ExperienciaComponent,
    FormacionComponent,
    LogrosComponent, 
    PiedepaginaComponent,
    LoginComponent,
    MainComponent,
    CVComponent,
    AptitudesComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfolioService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
