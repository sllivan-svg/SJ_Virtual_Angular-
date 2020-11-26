import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

//models
import { MedicoModel } from 'src/app/models/medico.model';

//database
import { BaseDatosFirebaseService } from '../../services/base-datos-firebase.service'

//services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  medicos: MedicoModel = new MedicoModel();

  constructor(  private db: BaseDatosFirebaseService, private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
    this.db.getMedicos();
  }

  onSubmit( form:NgForm ){
    if ( form.invalid ){ return }
     //alerta
     Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Por favor espere'
    });
    Swal.showLoading();

      this.db.registerMedicos(this.medicos).then( resp =>  {
        this.auth.nuevoMedico(this.medicos).subscribe( resp2 => {
          Swal.close();
          this.router.navigateByUrl('/home')
        });
      });
  }

}
