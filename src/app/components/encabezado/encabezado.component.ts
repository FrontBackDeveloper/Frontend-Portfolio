import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesSociales } from 'src/app/data/RedesSociales';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  isUserLogged: boolean = false;
  datosEncabezado:RedesSociales[] = [];
  constructor(private portfolio:PortfolioService,
              private authservice:AuthService) { }

  ngOnInit(): void {
    this.isUserLogged = this.authservice.isUserLogged();
    this.portfolio.obtenerDatosRedesSociales().subscribe(data =>{
       this.datosEncabezado=data;
       console.log(data);
    });
  }
  logout(): void {
    this.authservice.logout();
    this.isUserLogged = false;
    window.location.reload();
  }
}
