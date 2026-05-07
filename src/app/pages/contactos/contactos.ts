import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  imports: [FormsModule],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  submitForm() {
    alert('Mensaje enviado correctamente 🚀');
  }
}
