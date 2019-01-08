import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Speaker } from 'src/app/shared/services/speaker.service';

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
export class BioComponent implements OnInit {

  @Input('speaker') speaker: Speaker;
  @Input('isOdd') isOdd: Boolean;

  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit() {
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
