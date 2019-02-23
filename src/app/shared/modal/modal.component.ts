import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'ngrome-modal',
  template:
  `<div class="modal">
      <div class="modal-body">
          <ng-content></ng-content>
      </div>
  </div>
  <div class="modal-background"></div>`,
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {

    // ensure id attribute exists
    if (!this.id) {
        console.error('modal must have an id');
        return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e:any) => {
        if (e.target.className === 'modal') {
            console.log('close modal');
            this.modalService.close(e.currentTarget.id);
        }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
      this.element.style.display = 'block';
      this.element.classList.add('opened');
      document.body.classList.add('site-menu--show');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('site-menu--show');
  }

}
