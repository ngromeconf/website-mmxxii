import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  private message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.startMessagingService();
  }



  startMessagingService(){

    const userId = 'User:'+this.guid();
    console.log(userId);
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;

  }

  guid() {

    const nav = window.navigator;
    const screen = window.screen;
    let guid = nav.mimeTypes.length.toString();
    guid += nav.userAgent.replace(/\D+/g, '');
    guid += nav.plugins.length;
    guid += screen.height || '';
    guid += screen.width || '';
    guid += screen.pixelDepth || '';

    return guid;
};

}
