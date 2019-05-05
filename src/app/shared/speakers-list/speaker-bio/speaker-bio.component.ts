import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Speaker } from 'src/app/shared/services/speaker.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'ngrome-speaker-bio',
  templateUrl: './speaker-bio.component.html',
  styleUrls: ['./speaker-bio.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ],
})
export class SpeakerBioComponent implements OnInit {

  @Input('speaker') speaker: Speaker;

  state = 'hide';

  constructor(public el: ElementRef,
    private storage: AngularFireStorage) { }

  ngOnInit() {
    //console.log(this.speaker);
  }

  getImageBio(){
    //console.log(this.speaker);
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset+400;
      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}
