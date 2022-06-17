import { Component, OnInit } from '@angular/core';
import { EVENT_DATE } from 'src/app/constants';

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
            <!-- <h2>
            We are going to announce the official schedule by the end of
            August
            </h2> -->

            <p>
              Applications for NG Rome {{romanicYear}} are open.
              <br />
            </p>

            <a
              rel="noopener"
              class="button button--white"
              href="https://forms.gle/J7Kr9hMiscduco6L9"
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
  constructor() {}
  romanicYear: string;
  ngOnInit() {
    this.romanicYear = EVENT_DATE.romanYear;
  }
}
