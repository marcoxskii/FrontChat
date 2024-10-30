import { NgFor, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgFor, FormsModule, DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})

export class ChatComponent {
  messages: { text: string, timestamp: Date }[] = [];
  userName: string = '';
  hasEnteredName: boolean = false;
  message: string = '';

  constructor(private chatService: ChatService){

  }

  sendMessage() {
    this.chatService
    const inputElement = document.getElementById('messageInput') as HTMLInputElement;
    const message = inputElement.value;
    if (!this.hasEnteredName) {
      if (message.trim()) {
        this.userName = message.trim();
        this.hasEnteredName = true;
        inputElement.value = '';
      } else {
        alert('Por favor, ingresa tu nombre.');
      }
    } else {
      if (message.trim()) {
        this.messages.push({ text: `${this.userName}: ${message}`, timestamp: new Date() });
        inputElement.value = '';
      }
    }
  }
}
