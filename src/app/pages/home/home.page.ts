import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'; // Importa el servicio MenuController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private menuController: MenuController // Inyecta el controlador del menú
  ) {}

  // Función para cerrar sesión y cerrar el menú lateral
  logout() {
    // Cerrar el menú lateral
    this.menuController.close();

    // Aquí puedes añadir la lógica de cerrar sesión
    this.router.navigate(['/login']);
  }
}
