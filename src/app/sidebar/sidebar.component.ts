import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { SideBarService } from '../shared/services/sidebar.service';

declare var TweenMax: any;

@Component({
  selector: 'ngrome-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isSidebarOpen = false;
  private el;
  private detailsItems;
  private totalDetailItems;
  private isAnimating;

  constructor(
    public sidebarService: SideBarService,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.sidebarService.toggleSidebarStatus(true);
  }

  ngOnInit() {}

  ngAfterContentInit(){
    this.el = this.elementRef.nativeElement;
    // The details boxes.
    this.detailsItems = Array.from(this.el.querySelectorAll('.details__item'));
    console.log(this.detailsItems);
    this.totalDetailItems = this.detailsItems.length;
    console.log(this.totalDetailItems);
  }
  openCloseSidebar() {

    this.sidebarService.toggleSidebarStatus();
    this.sidebarService.sidebarStatus$.subscribe(value => {
      console.log('openCloseSidebar: ' + value);
      this.isSidebarOpen = value === 'hidden' ? true : false;
      if (value === 'visible') {
        this.el.querySelector('.details-wrap').classList.add('details-wrap--open');
        this.el.querySelector('.details').classList.add('details--current');
        this.showDetails().then(() => this.isAnimating = false);
      } else {
        this.el.querySelector('.details-wrap').classList.remove('details-wrap--open');
        this.el.querySelector('.details').classList.remove('details--current');
        this.hideDetails().then(() => this.isAnimating = false);
      }
    });

  }
  // Show the details boxes.
  showDetails() {
    return new Promise((resolve, reject) => {
        // If open already then do nothing.
        if ( this.isSidebarOpen ) {
            resolve();
            return false;
        }

        // We want to achieve here the same reveal/unreveal effect of the slideshow.
        // The item animates from 100% to 0% (top,bottom,left or right) while its inner element does the reverse movement.
        const processItem = (item,pos) => {
            return new Promise((resolve, reject) => {
                // The duration and easing for the last 3 elements will be different to create a different feeling for the animation.
                const duration = pos >= this.totalDetailItems-3 ? 0.7 : 0.2;
                const ease = pos >= this.totalDetailItems-3 ? 'Expo.easeOut' : 'Power2.easeInOut';
                // Every box will have a delay.
                const delay = pos*0.08;
                // The direction to animate the box.
                // We can specify this as a data attribute otherwise we assume a
                // default of rtl ("right to left")
                // right to left (rtl) | left to right (ltr) | bottom to top (btt) | top to bottom (ttb).
                const direction = item.dataset.direction || 'rtl';

                let itemAnimOpts = {
                    ease: ease,
                    delay: delay,
                    x: '0%',
                    y: '0%',
                    startAt: {x: '', y: ''}
                };

                let innerAnimOpts = {
                    ease: ease,
                    delay: delay,
                    x: '0%',
                    y: '0%',
                    onComplete: resolve,
                    startAt: {x: '', y: ''}
                };

                if ( direction === 'rtl' || direction === 'ltr' ) {
                    itemAnimOpts.startAt = direction === 'rtl' ? {x: '100%', y: '0%'} : {x: '-100%', y: '0%'};
                    innerAnimOpts.startAt= direction === 'rtl' ? {x: '-100%', y: '0%'} : {x: '100%', y: '0%'};
                }
                else {
                    itemAnimOpts.startAt = direction === 'btt' ? {x: '0%', y: '100%'} : {x: '0%',y: '-100%'};
                    innerAnimOpts.startAt = direction === 'btt' ? {x: '0%', y: '-100%'} : {x: '0%', y: '100%'};
                }

                TweenMax.to(item, duration, itemAnimOpts);
                TweenMax.to(item.querySelector('.details__inner'), duration, innerAnimOpts);
            });
        };

        // Process each one of the boxes..
        let processing = [];
        this.detailsItems.forEach((item,pos) => processing.push(processItem(item,pos)));
        Promise.all(processing).then(() => {
            this.isSidebarOpen = true;
            resolve();
        });
    });
  }

  hideDetails(){

    //copy

    return new Promise((resolve, reject) => {

      if ( !this.isSidebarOpen ) {
          resolve();
          return false;
      }

      const processItem = (item,pos) => {
          return new Promise((resolve, reject) => {
              const duration = pos === 0 ? 0.7 : 0.2;
              const ease = pos === 0 ? 'Expo.easeOut' : 'Power2.easeInOut';
              const delay = (this.totalDetailItems-pos-1)*0.08;
              const direction = item.dataset.direction || 'rtl'; // right to left (rtl) | left to right (ltr) | bottom to top (btt) | top to bottom (ttb).

              let itemAnimOpts = {
                  ease: ease,
                  delay: delay,
                  x: '',
                  y: ''
              };

              let innerAnimOpts = {
                  ease: ease,
                  delay: delay,
                  onComplete: resolve,
                  x: '',
                  y: ''
              };

              if ( direction === 'rtl' || direction === 'ltr' ) {
                  itemAnimOpts.x = direction === 'rtl' ? '100%' : '-100%';
                  itemAnimOpts.y = '0%';
                  innerAnimOpts.x= direction === 'rtl' ? '-100%' : '100%';
                  innerAnimOpts.y = '0%';
              }
              else {
                  itemAnimOpts.y = direction === 'btt' ? '100%' : '-100%';
                  itemAnimOpts.x = '0%';
                  innerAnimOpts.y= direction === 'btt' ? '-100%' : '100%';
                  innerAnimOpts.x = '0%';
              }

              TweenMax.to(item, duration, itemAnimOpts);
              TweenMax.to(item.querySelector('.details__inner'), duration, innerAnimOpts);
          });
      };

      let processing = [];
      this.detailsItems.forEach((item,pos) => processing.push(processItem(item,pos)));
      Promise.all(processing).then(() => {
          this.isSidebarOpen = false;
          resolve();
      });

    });

    // end copy


  }
}
