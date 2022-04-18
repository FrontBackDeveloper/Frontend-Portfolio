import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesSociales } from 'src/app/data/RedesSociales';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  datosEncabezado:RedesSociales [] = [];
  constructor(private portfolio:PortfolioService) { }

  ngOnInit(): void {
    this.portfolio.obtenerDatosRedesSociales().subscribe(data =>{
  
      this.datosEncabezado=data;
    });

  }
}
