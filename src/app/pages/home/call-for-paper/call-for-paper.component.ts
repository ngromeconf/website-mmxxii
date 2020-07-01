import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-call-for-paper',
  template: `<section>
    <div class="site-content__wrap">
      <div class="candidate">
        <div class="candidate__affordance">
          <svg
            width="172"
            height="237"
            viewBox="0 0 172 237"
            preserveAspectratio="xMinYMin"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              stroke="#FFF"
              stroke-width="11"
              transform="translate(6)"
            >
              <path
                d="M160.467 80.682v28.655c0 39.564-32.656 71.637-72.94 71.637H72.94C32.656 180.974 0 148.9 0 109.337V80.682"
              />
              <rect
                width="89.292"
                height="139.438"
                x="35.083"
                y="5.5"
                rx="44.646"
              />
              <path d="M79.59 184.947v43.117M118.654 230.924H38.996" />
            </g>
          </svg>
        </div>

        <div class="candidate__info">
          <h1>Interested in being a speaker for NGRome MMXX?</h1>

          <p>
            Applications for NGRome MMXIX was closed on April 18th. Be one of
            the heroes for 2020 and send us your paper.
            <br />
          </p>

          <a
            rel="noopener"
            class="button button--white"
            href="https://forms.gle/CDaLhFVAUENeQ1we6"
            target="_blank"
            title="Candidate now for NGRome MMXX"
          >
            <span>NGRome MMXX</span>

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
  </section> `,
})
export class CallForPaperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
