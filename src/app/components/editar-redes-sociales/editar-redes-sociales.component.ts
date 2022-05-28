import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RedesSociales } from 'src/app/data/RedesSociales';


@Component({
  selector: 'app-editar-redes-sociales',
  templateUrl: './editar-redes-sociales.component.html',
  styleUrls: ['./editar-redes-sociales.component.css']
})
export class EditarRedesSocialesComponent implements OnInit {
 
  redesList:RedesSociales[] = [];
  isUserLogged: Boolean = false;
  item:any=[];
  form: FormGroup;  
  redes= [{id:1, name: "youtube"},
          {id:2, name: "linkedin"},
          {id:3, name: "facebook"},
          {id:4, name: "instagram"},
          {id:5, name: "telegram"},
          {id:6, name: "twiter"},
          {id:7, name: "whatsapp"},
          {id:8, name: "github"},
        ];
  
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
    }

    reloadData() {
     
      this.portfolio.obtenerDatosRedesSociales().subscribe(
        (data) => {
          this.redesList = data;
          this.router.navigate(['/editarredes'])
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
     
        console.log(redes);
        this.portfolio.editarDatosRedesSociales(redes).subscribe(
          () => {
                  this.reloadData();
           }
        )
      }
      seleccionarYEditar(index: number) {
        let redes: RedesSociales = this.redesList[index];
        this.loadForm(redes);
      }
      seleccionarYBorrar(index: number) {
        let redes: RedesSociales = this.redesList[index];
        if (confirm("¿Está seguro que desea borrar la Red Social seleccionada?")) {
          this.portfolio.borrarDatosRedesSociales(redes.id).subscribe(
            () => {
              this.reloadData();
            }
          )
        }
        this.router.navigate(['editarredes']);
      }
      nuevaRed() {
        this.clearForm();
      }

}
