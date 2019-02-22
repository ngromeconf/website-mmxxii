import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'ngrome-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  modalOpened = false;
  constructor(private modalService:ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalOpened = true;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalOpened = false;
    this.modalService.close(id);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.openModal('ticket');
    }, 800);

  }



}
