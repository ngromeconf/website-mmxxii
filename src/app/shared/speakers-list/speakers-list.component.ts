import { Component, ElementRef, Input } from '@angular/core';
import { SpeakerService } from 'src/app/shared/services/speaker.service';

@Component({
  selector: 'ngrome-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakerListComponent {

  @Input('speakerFilter') speakerFilter: Boolean;

  constructor(
    public el: ElementRef,
    public speakerService: SpeakerService) {
      console.log('speaker-list: filter - ', this.speakerFilter)
    }

}
