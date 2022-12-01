import { Component } from '@angular/core';

interface notificacao {
  titulo: string;
  subtitulo: string;
  data: string 
}
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  infoNotific: notificacao[] = [
    {
    titulo: "Ifood",
    subtitulo: "Promoções imperdíveis" ,
    data: "30/11"
  },
  {
    titulo: "Whatsapp",
    subtitulo: "Nova mensagem!" ,
    data: "29/11"
  },
  {
    titulo: "Twitter",
    subtitulo: "@fulano curtiu seu post." ,
    data: "29/11"
  }
]
}
