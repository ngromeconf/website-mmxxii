import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { EventDateType, EVENT_DATE, TICKET, TicketType } from 'src/app/constants';

@Component({
  selector: 'ngrome-menu',
  template: `
  <a [routerLink]="['/']" routerLinkActive="router-link-active" title="Go to NGRome Homepage">
  <h1 class="site-menu__logo">
    <img src="assets/logo/logo-white-text.svg" height="110 0" />
    <span>Ng Rome the largest italian Angular conference</span>
  </h1>
</a>
<ul class="site-menu__nav">
  <li *ngFor="let menuItem of menuList$ | async">
    <a [routerLink]="menuItem.url" [title]="menuItem.title">
      <img src="assets/icons/site-icons/{{ menuItem.icon }}" />
      {{ menuItem.name }}
    </a>
  </li>
</ul>
<div class="site-menu__info">
  <p>{{conferenceInfo.when}}</p>
  <a *ngIf="ticketData.showButton"
    class="button button--white button--fill"
    rel="noopener"
    target="_blank"
    [href]="ticketData.url"
    title="Go to Tickets Page"
  >
    <svg width="20" height="14">
      <g fill="none" fill-rule="evenodd" stroke="#EE0C3E" stroke-width="2">
        <path
          d="M18.422 9.819c-1.12-.422-1.91-1.53-1.91-2.819s.79-2.397 1.91-2.819V1H1.312v3.181c1.119.422 1.91 1.53 1.91 2.819s-.791 2.397-1.91 2.819V13h17.11V9.819zM7 1.462V13"
        />
      </g>
    </svg>
    Get your ticket
  </a>
</div>
<button
  (click)="toggleSidebarStatus($event)"
  alt="Close Menu"
  class="site-menu--close"
  type="button"
  name="site menu close"
  aria-label="Close Menu"
>
  <svg width="21" height="21">
    <g fill="#FFF" fill-rule="evenodd">
      <path d="M.368 18.717L18.753.332l1.414 1.415L1.782 20.13z" />
      <path d="M1.782.869l18.385 18.384-1.414 1.415L.368 2.283z" />
    </g>
  </svg>
</button>
`
})
export class MenuComponent implements OnInit {
  @Output() toggleSidebar = new EventEmitter();

  menuList$: Observable<any[]>;
  conferenceInfo: EventDateType;
  ticketData: TicketType;

  constructor(private afs: AngularFirestore) {
    this.menuList$ = afs
      .collection('configuration2020', (ref) => {
        let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        query = query.where('active', '==', true);
        // query = query.orderBy('startTime', 'asc');
        return query;
      })
      .valueChanges();
  }

  ngOnInit(): void {
    this.conferenceInfo = EVENT_DATE;
    this.ticketData = TICKET;
  }


  toggleSidebarStatus($event) {
    this.toggleSidebar.emit($event);
  }
}
