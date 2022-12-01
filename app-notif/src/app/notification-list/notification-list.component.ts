import { Component } from '@angular/core';
import { listaNotificacoes } from '../notificacoes-info/informacoes';
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  infoNotific = listaNotificacoes
}
