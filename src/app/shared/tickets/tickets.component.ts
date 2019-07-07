import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'ngrome-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit {

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }

}
