import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

//services
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(  private auth: AuthService, private location: Location ) { }

  ngOnInit(): void {
  }

  salir(){
       
    this.auth.logout();
   
    Swal.fire({
          icon: 'success',
          title: 'Se cerro la sesion',
        });

    this.location.replaceState('/login');
    location.reload();
  }

}
