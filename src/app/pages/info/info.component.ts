import { Component, OnInit } from '@angular/core';
import { EventDateType, EVENT_DATE, TICKET, TicketType } from 'src/app/constants';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'ngrome-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  modalOpened = false;
  eventInfo: EventDateType;
  ticketData: TicketType;

  constructor(private modalService:ModalService) {
    this.eventInfo = EVENT_DATE;
    this.ticketData = TICKET;
  }

  openModal(id: string) {
    this.modalOpened = true;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalOpened = false;
    this.modalService.close(id);
  }

  ngOnInit() {

  }

  addToCalendar(){
    console.log('event added to calendar');
  }



}
