import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpeakerService } from 'src/app/shared/services/speaker.service';

@Component({
  selector: 'ngrome-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.scss']
})
export class SpeakerListComponent {

  @Input('speakerFilter') speakerFilter: Boolean;

  public actualPage;

  constructor(
    public el: ElementRef,
    public speakerService: SpeakerService,
    private router:Router) {
      this.actualPage = this.router.url;
    }

}
