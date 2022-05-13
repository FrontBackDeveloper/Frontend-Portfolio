import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { LogrosComponent } from './components/logros/logros.component';
import { PiedepaginaComponent } from './components/piedepagina/piedepagina.component';
import { EditarRedesSocialesComponent } from './components/editar-redes-sociales/editar-redes-sociales.component';
import { BandejaDeEntradaComponent } from './components/bandeja-de-entrada/bandeja-de-entrada.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
{path: 'login', component:LoginComponent},
{path: 'main', component:MainComponent},
{path: 'editarredes', component:EditarRedesSocialesComponent},
{path: 'bandejadeentrada', component:BandejaDeEntradaComponent},
{path: 'contacto', component:ContactoComponent},
{path: '', redirectTo: '/main', pathMatch: 'full'},
{path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
