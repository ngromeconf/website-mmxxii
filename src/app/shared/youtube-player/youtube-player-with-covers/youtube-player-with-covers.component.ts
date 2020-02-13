import {AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {YouTubePlayer} from '@angular/youtube-player';

@Component({
  selector: 'ngrome-youtube-player-with-covers',
  templateUrl: './youtube-player-with-covers.component.html',
  styleUrls: ['./youtube-player-with-covers.component.scss']
})
export class YoutubePlayerWithCoversComponent implements OnInit, AfterViewInit {
  @Input() videoId: string;
  playerRef: YT.Player;
  playing = false;
  playCount = 0;
  playingChange$ = new EventEmitter<boolean>();

  @ViewChild('container', {static: true}) container: ElementRef;
  fixedHeight: number;
  fixedWidth: number;
  constructor() { }

  ngAfterViewInit(): void {
    this.computePlayerDimensions();
  }

  ngOnInit() {
    // From: https://github.com/angular/components/blob/8.2.3/src/youtube-player/README.md
    // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    this.playingChange$
      .pipe(debounceTime(100))
      .subscribe((playing) => this.playing = playing);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.computePlayerDimensions();
  }

  private computePlayerDimensions() {
    setTimeout(() => {
      this.fixedWidth = this.container.nativeElement.offsetWidth;
      this.fixedHeight = Math.trunc(this.fixedWidth * 9 / 16); /* 16:9 Aspect Ratio */
    }, 1);
  }

  onReady($evt: YT.PlayerEvent) {
    console.log('player-ready', $evt);
    this.playerRef = $evt.target;
  }

  onStateChange($evt: YT.OnStateChangeEvent) {
    console.log('player-state-change', $evt);
    this.playingChange$.emit(($evt.data === YT.PlayerState.PLAYING || $evt.data === YT.PlayerState.BUFFERING));

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
        this.playerRef.stopVideo();
        break;
    }
  }

  public playVideo() {
    if (this.playerRef) {
      this.playerRef.playVideo();
    }
  }
}
