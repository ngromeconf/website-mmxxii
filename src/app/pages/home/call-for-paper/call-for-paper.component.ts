import { Component, OnInit } from '@angular/core';
import { CALLFORPAPER, EVENT_DATE, TicketType } from 'src/app/constants';

@Component({
  selector: 'ngrome-call-for-paper',
  template: `
    <section class="site-content__section--full">
      <div class="site-content__wrap">
        <div class="candidate">
          <div class="candidate__affordance">
            <img src="assets/icons/site-icons/studio-microphone.svg" />
          </div>

          <div class="candidate__info">
            <h2>Interested in being a speaker for NGRome {{romanicYear}}?</h2>

            <p>
              Applications for NGRome {{romanicYear}} will be closed on September 18th.
              Be one of the heroes for 2022 and send us your paper.
              <br />
            </p>

            <a *ngIf="callForPaper.showButton"
              rel="noopener"
              class="button button--white"
              href="{{callForPaper.url}}"
              target="_blank"
              title="Candidate now for NG Rome {{romanicYear}}"
            >
              <span>Candidate now NG Rome {{romanicYear}}</span>

              <svg width="11" height="12">
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke="#0086FF"
                  stroke-width="2"
                  d="M1 1l7.358 5L1 11"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
  .site-content__section--full {
    margin-bottom: 80px;
  }
  `],
})
export class CallForPaperComponent implements OnInit {
  romanicYear: string;
  callForPaper: TicketType
  constructor() {}
  ngOnInit() {
    this.romanicYear = EVENT_DATE.romanYear;
    this.callForPaper = CALLFORPAPER;
  }
}
