import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'ngrome-footer',
  template: `
    <footer class="site-footer" role="contentinfo">
      <ngrome-footer-sponsors *ngIf="route === '/sponsors'; else common"></ngrome-footer-sponsors>
      <ng-template #common>
        <ngrome-footer-common></ngrome-footer-common>
      </ng-template>
      <ngrome-footer-links-section></ngrome-footer-links-section>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  public route: string;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        startWith(this.router),
        filter((event) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      )
      .subscribe((route: string) => {
        this.route = route;
      });
  }
}
