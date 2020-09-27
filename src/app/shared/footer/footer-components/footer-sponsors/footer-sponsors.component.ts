import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngrome-footer-sponsors',
  template: `
    <div class="site-footer__main sponsors-footer">
      <svg
        id="confetti-footer-1"
        width="120"
        height="118"
        viewBox="0 0 120 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="24.3201" width="133" height="35" transform="rotate(44.0158 24.3201 0)" fill="#DD0031" />
      </svg>
      <svg
        id="confetti-footer-2"
        width="120"
        height="118"
        viewBox="0 0 120 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="24.3201" width="133" height="35" transform="rotate(44.0158 24.3201 0)" fill="#DD0031" />
      </svg>

      <div class="site-footer__main__content ">
        <p>Wanto to be a sponsor?</p>
        <a href="mailto:ngromeconf@gmail.com" class="button button--green button--fill-green">Contact Us</a>
      </div>
    </div>
  `,
  styles: [],
})
export class FooterSponsorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
