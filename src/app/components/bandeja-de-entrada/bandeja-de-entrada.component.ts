import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/data/Contacto';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeja-de-entrada',
  templateUrl: './bandeja-de-entrada.component.html',
  styleUrls: ['./bandeja-de-entrada.component.css']
})
export class BandejaDeEntradaComponent implements OnInit {
  correoList:Contacto[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
 
  

  constructor(private portfolio:PortfolioService,
              private authservice:AuthService,
              private router: Router) {
              
               }

               ngOnInit(): void {
                this.isUserLogged = this.authservice.isUserLogged();
                this.reloadData();
              }

              reloadData() {
                this.portfolio.obtenerDatosContacto().subscribe(
                  (data) => {
                    this.correoList = data;
                    console.log(data);
                  
                  }
                );
              }
            
              seleccionarYBorrar(index: number) {
                console.log(index);
                let correo: Contacto = this.correoList[index];
                if (confirm("¿Está seguro que desea borrar el correo seleccionado?")) {
                  this.portfolio.borrarDatosContacto(correo.id).subscribe(
                    () => {
                      this.reloadData();
                      this.router.navigate(['/bandejadeentrada']);
                    }
                  )
                }
              }
            
            }
            
