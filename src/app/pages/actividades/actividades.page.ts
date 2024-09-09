import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Activity {
  title: string;
  date: Date;
  color: string;
  completed: boolean;
}

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage {
  activities: Activity[] = []; // Lista de actividades
  newActivityTitle = ''; // Título de la nueva actividad

  constructor(private navCtrl: NavController) {
    this.loadActivities(); // Cargar actividades al iniciar la página
  }

  // Navegar al Home
  goToHome() {
    this.navCtrl.navigateRoot('/home');
  }

  // Agregar una nueva actividad
  addActivity() {
    if (this.newActivityTitle.trim().length > 0) {
      const newActivity: Activity = {
        title: this.newActivityTitle,
        date: new Date(), // Añadimos la fecha actual
        color: 'primary', // Puedes modificar este valor si deseas permitir la selección de color
        completed: false,
      };

      this.activities.push(newActivity);
      this.activities.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Ordenar por fecha
      this.newActivityTitle = ''; // Limpiar el campo de entrada
      this.saveActivities(); // Guardar en localStorage después de agregar
    } else {
      alert('Por favor ingresa un título para la actividad.');
    }
  }

  // Eliminar una actividad
  deleteActivity(activity: Activity) {
    const index = this.activities.indexOf(activity);
    if (index > -1) {
      this.activities.splice(index, 1);
      this.saveActivities(); // Guardar en localStorage después de eliminar
    }
  }

  // Guardar actividades en localStorage
  saveActivities() {
    localStorage.setItem('activities', JSON.stringify(this.activities));
  }

  // Cargar actividades desde localStorage
  loadActivities() {
    const storedActivities = localStorage.getItem('activities');
    if (storedActivities) {
      this.activities = JSON.parse(storedActivities);
      this.activities.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()); // Ordenar por fecha
    } else {
      // Si no hay actividades almacenadas, agregar algunas por defecto
      this.activities = [
        { title: 'Estudiar para el examen de matemáticas', date: new Date(), color: 'primary', completed: false },
        { title: 'Entregar el proyecto de ciencias', date: new Date(), color: 'secondary', completed: false },
      ];
      this.saveActivities(); // Guardar las actividades por defecto en localStorage
    }
  }
}
