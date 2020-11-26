import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

//models
import { MedicoModel } from "../models/medico.model";

@Injectable({
  providedIn: 'root'
})
export class BaseDatosFirebaseService {

  constructor( private db: AngularFireDatabase, private http:HttpClient ) { }

  medicosList: AngularFireList<any>;
  url: string = 'https://sjvirtualtour.firebaseio.com/'


  getMedicos(){
    return this.medicosList = this.db.list('tb_usuarios');
  }

  getMedico( id: string ){
    return this.http.get(`${this.url}/tb_usuarios/${id}.json`)
  }

  deleteMedico( id: string ){
    this.medicosList.remove(id); 
  }

  registerMedicos( medico: MedicoModel ){
    return this.medicosList.push({
      nombre: medico.nombre,
      apellido:medico.apellido,
      email: medico.email,
      password: medico.password,
      telefono: medico.telefono,
      fechaRegistro: medico.fechaRegistro = new Date().getTime().toString()
    });
  }

  updateMedico( medico: MedicoModel){
    return this.medicosList.update( medico.id, 
      {
        nombre: medico.nombre,
        apellido:medico.apellido,
        email: medico.email,
        password: medico.password,
        telefono: medico.telefono,
    }).then( ( respuesta: any ) => {      
      return medico
    });
  }

}
