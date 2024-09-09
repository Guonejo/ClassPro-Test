import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  profile = {
    nombre: '',
    apellido: '',
    edad: null,
    genero: '',
    carrera: ''
  };

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {
    this.loadProfile();
  }

  // Cargar el perfil desde localStorage si existe
  loadProfile() {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
  }

  // Guardar perfil en localStorage y navegar inmediatamente a home
  saveProfile() {
    // Guardar los datos en localStorage
    localStorage.setItem('profile', JSON.stringify(this.profile));

    // Redirigir inmediatamente al home
    this.navCtrl.navigateRoot('/home').then(() => {
      // Después de redirigir, mostramos el toast
      this.showToast();
    });
  }

  // Función para mostrar el toast
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Perfil guardado exitosamente',
      duration: 2000, // Duración del mensaje (2 segundos)
      position: 'bottom',
      color: 'success',
    });

    await toast.present();
  }

  // Navegar hacia atrás sin guardar
  goBack() {
    this.navCtrl.back();
  }
}
