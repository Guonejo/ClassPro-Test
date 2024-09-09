import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  messages: Message[] = [];
  userInput = '';

  constructor(private navCtrl: NavController) {}

  // Método para enviar el mensaje
  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';

      // Simulación de respuesta del bot
      setTimeout(() => {
        this.messages.push({ text: 'Respuesta del bot', sender: 'bot' });
      }, 1000);
    }
  }

  // Método para navegar al Home
  goToHome() {
    this.navCtrl.navigateRoot('/home'); // Navega al home
  }
}
