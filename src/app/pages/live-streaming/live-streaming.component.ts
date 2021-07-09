import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ngrome-live-streaming',
  template: `<section class="site-content__section">
      <div class="site-content__wrap">
        <div class="site-content__intro">
          <header class="site-content__intro__head__inner-sub">
            <h1 class="site-content__intro__title-sub">Live Streaming MMXXI</h1>
          </header>
          <div class="site-content__intro__info__inner">
            <p>
              One track, three hours, filled with talks of the
              <strong>Angular</strong> engineers who build the most <strong>performant</strong> apps and web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="site-content__wrap">
      <h1 class="site-content__section__title">July 9th 2021</h1>
      <div #container style="width: 100%; height: 500px">
        <youtube-player
          #playerYt
          style.display="'block'"
          videoId="8XqmTwuxGd0"
          [width]="fixedWidth"
          [height]="fixedHeight"
        ></youtube-player>
      </div>
    </div>`,
  styleUrls: ['./live-streaming.component.scss'],
})
export class LiveStreamingComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: true }) container: ElementRef;
  @ViewChild('playerYt', { static: true }) playerYt: YouTubePlayer;

  fixedHeight: number;
  fixedWidth: number;

  playing = false;
  playCount = 0;

  playingChange$ = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
    // From: https://github.com/angular/components/blob/8.2.3/src/youtube-player/README.md
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.playingChange$.pipe(debounceTime(100)).subscribe((playing) => (this.playing = playing));
  }

  ngAfterViewInit(): void {
    this.computePlayerDimensions();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.computePlayerDimensions();
  }

  private computePlayerDimensions() {
    setTimeout(() => {
      this.fixedWidth = this.container.nativeElement.offsetWidth;
      this.fixedHeight = Math.trunc((this.fixedWidth * 9) / 16); /* 16:9 Aspect Ratio */
    }, 1);
  }

  onStateChange($evt: YT.OnStateChangeEvent) {
    console.log('player-state-change', $evt);
    this.playingChange$.emit($evt.data === YT.PlayerState.PLAYING || $evt.data === YT.PlayerState.BUFFERING);

    switch ($evt.data) {
      case YT.PlayerState.PLAYING:
        this.playCount++;
        console.log('youtube playing');
        break;
      case YT.PlayerState.PAUSED:
        console.log('youtube paused');
        break;
      case YT.PlayerState.ENDED:
        console.log('youtube stop');
        // Stop the video on ending so recommended videos don't pop up
        this.playerYt.stopVideo();
        break;
    }
  }

  public playVideo() {
    if (this.playerYt) {
      this.playerYt.playVideo();
    } else {
      console.log('reference to player is missing');
    }
  }

  onError($event: YT.OnErrorEvent) {
    console.log('Error YT player', $event);
  }
}
