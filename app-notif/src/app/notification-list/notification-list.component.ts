import { Component } from '@angular/core';
import { listaNotificacoes } from '../notificacoes-info/informacoes';
@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  infoNotific = listaNotificacoes

  statusLido(titulo: string) {
    this.infoNotific.forEach(element => {
      if (element.titulo === titulo) {
        element.lido ? element.lido = false : element.lido = true
      }
    });
  }
}
