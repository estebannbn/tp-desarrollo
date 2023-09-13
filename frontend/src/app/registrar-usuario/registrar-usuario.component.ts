import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  nombre: string;
  apellido: string;
  dni: string;
  telefono: string;
  mail: string;
  verificarMail: string;
  contrasenia: string;
  verificarContrasenia: string;



}
