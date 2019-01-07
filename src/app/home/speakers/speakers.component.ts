import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { SpeakerService } from 'src/app/shared/services/speaker.service';

@Component({
  selector: 'ngrome-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakerComponent {

  state = 'hide';

  constructor(
    public el: ElementRef,
    public speakerService: SpeakerService) {}

}
