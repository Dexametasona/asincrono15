import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /*-------------------array para alamacenar datos */
  bd:{name:string, apell:string, carrera:string}[]=[]
  /* ------------------------------variable para capturar datos---------------- */
  name='';
  apell='';
  carrera='';
/* --------------------------funcion para registrar datos.------------------------ */
  registrar(){
    this.bd.push({'name':this.name, 'apell':this.apell, 'carrera':this.carrera})
  }
  /* ------------------funcion para eliminar datos---------------------- */
  borrar(id:number){
    /* ------------alerta impotardo de la libreria externa sweetalert2-------------------------- */
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí'
    }).then((result) => {
      /* ------------------------------instruccion que elimina el dato------------------------- */
      if (result.isConfirmed) {
        this.bd.splice(id,1)
      }
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
