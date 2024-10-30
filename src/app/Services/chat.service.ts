import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { message } from '../Models/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor() {
    const socket = io('http://localhost:3000');

    // Escuchar mensajes del servidor
    socket.on('mensaje', (msg: message) => {

    });

    // Enviar mensaje al servidor
    function enviarMensaje(Messagge: message) {
      const input = document.getElementById('mensajeInput') as HTMLInputElement;
      const mensaje = input.value;
      socket.emit('mensaje', mensaje);
      input.value = '';
    }
  }
}
