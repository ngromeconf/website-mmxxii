import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'ngrome-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  modalOpened = false;
  constructor(private modalService:ModalService) { }

  openModal(id: string) {
    this.modalOpened = true;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalOpened = false;
    this.modalService.close(id);
  }

}
