import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { RedesSociales } from 'src/app/data/RedesSociales';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
 
  redesList:RedesSociales[] = [];
  item:any=[];
  isUserLogged: Boolean = false;
  form: FormGroup;  
  
  constructor(private portfolio:PortfolioService,
    private authservice:AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        id: [''],
        nombre: ['', [Validators.required, Validators.maxLength(45)]],
        url: ['', [Validators.required, Validators.maxLength(45)]]
      });
     }

     ngOnInit(): void {
      this.isUserLogged = this.authservice.isUserLogged();  
      this.reloadData();
      this.router.navigate(['home']);
    }

    reloadData() {
      this.portfolio.obtenerDatosRedesSociales().subscribe(
        (data) => {
          this.redesList = data;
        }
      );
    }
    clearForm() {
      this.form.setValue({
        id: '',
        nombre: '',
        url: ''
      })
    }
  
    loadForm(redes: RedesSociales) {
      this.form.setValue({
        id: redes.id,
        nombre: redes.nombre,
        url: redes.url
      })
    }

    onSubmit() {
      let redes: RedesSociales = this.form.value;
      if (this.form.get('id')?.value == '') {
        this.portfolio.guardarDatosRedesSociales(redes).subscribe(
          (newRed: RedesSociales) => {
            this.redesList.push(newRed);
            this.reloadData();
          }
        );
      } else {
        console.log(redes);
        this.portfolio.editarDatosRedesSociales(redes).subscribe(
          () => {
                  this.reloadData();
           }
        )
      }
    }
   
  
    nuevaRedSocial() {
      this.clearForm();
    }
  
    seleccionarYEditar(index: number) {
      let redes: RedesSociales = this.redesList[index];
      this.loadForm(redes);
    }
  
    seleccionarYBorrar(index: number) {
      let redes: RedesSociales = this.redesList[index];
      if (confirm("¿Está seguro que desea borrar la Red social seleccionada?")) {
        this.portfolio.borrarDatosRedesSociales(redes.id).subscribe(
          () => {
            this.reloadData();
          }
        )
      }
    }
  logout(): void {
    this.authservice.logout();
    this.isUserLogged = false;
    window.location.reload();
    
  }
}
