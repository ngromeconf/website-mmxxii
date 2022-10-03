import {Component, OnInit, ViewChild} from '@angular/core';
// import {YoutubePlayerWithCoversComponent} from '../../../shared/youtube-player/youtube-player-with-covers/youtube-player-with-covers.component';
import {NgAnimateScrollService} from '../../../shared/services/ng-animate-scroll.service';

@Component({
  selector: 'ngrome-past-edition-video',
  styleUrls: ['past-edition-video.component.scss'],
  templateUrl: 'past-edition-video.component.html'
})
export class PastEditionVideoComponent implements OnInit {
  // @ViewChild(YoutubePlayerWithCoversComponent, {static: true}) player: YoutubePlayerWithCoversComponent;

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  // play() {
  //   this.player.playVideo();
  // }

  scrollTo(el: string, duration?: number) {
    this.animateScrollService.scrollToElement(el, duration);
  }
}
