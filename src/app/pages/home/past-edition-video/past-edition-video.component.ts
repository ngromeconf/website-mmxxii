import {Component, OnInit, ViewChild} from '@angular/core';
import {YoutubePlayerWithCoversComponent} from '../../../shared/youtube-player/youtube-player-with-covers/youtube-player-with-covers.component';
import {NgAnimateScrollService} from '../../../shared/services/ng-animate-scroll.service';

@Component({
  selector: 'ngrome-past-edition-video',
  styles: [],
  template: `
    <div class="site-content__wrap">
      <div class="site-content__intro">
        <ngrome-youtube-player-with-covers videoId="8XqmTwuxGd0">
          <div intro-cover (click)="play()"><img src="https://via.placeholder.com/1000x396/EE0C3E/FFFFFF?text=Click me to start" width="100%"></div>
          <div end-cover>
            <p>
            <a class="button" id="go-to-tickets" (click)="scrollTo('tickets', 300)"
               title="Get Ticket Now">
              <span id="go-to-tickets-text-video">Get Ticket Now</span>
              <svg width="11" height="12" id="go-to-tickets-svg">
                <path fill="none" fill-rule="evenodd" stroke="#0086FF"
                      stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </a>
            </p>
            <p>
            <a class="button" (click)="play()"
               title="Replay Video">
              <span id="go-to-tickets-text">Replay Video</span>
              <svg width="11" height="12" id="go-to-tickets-svg">
                <path fill="none" fill-rule="evenodd" stroke="#EE0C3E"
                      stroke-width="2" d="M1 1l7.358 5L1 11"/>
              </svg>
            </a>
            </p>
          </div>
        </ngrome-youtube-player-with-covers>
      </div>
    </div>`
})
export class PastEditionVideoComponent implements OnInit {
  @ViewChild(YoutubePlayerWithCoversComponent, {static: true}) player;

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  play() {
    this.player.playVideo();
  }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }

}
