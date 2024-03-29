import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'ngrome-footer-links-section',
  template: `
    <div class="site-content__wrap">
      <nav class="site-footer__menu">
        <p class="site-footer__logo">
          <svg width="55" height="58">
            <g fill="#DD0031" fill-rule="evenodd">
              <path
                d="M27.044.149L.942 9.319 0 9.649l.115.98 3.98 34 .075.634.566.31 22.121 12.07.61.332.61-.332 22.12-12.07.567-.31.074-.633 3.981-34.001.115-.98-.942-.33L27.89.149 27.467 0l-.423.149zM5.346 44.488l-3.98-34.001 26.101-9.17 26.102 9.17-3.981 34-22.121 12.07-22.12-12.07z"
              />
              <path
                d="M31.977 31.499c.16 0 .31.061.422.172a.58.58 0 0 1 .176.416h1.228c0-.48-.19-.932-.536-1.272a1.828 1.828 0 0 0-1.29-.526h-.001c-1.007 0-1.825.808-1.825 1.8v1.194l1.229-.001v-1.194c-.001-.325.267-.589.597-.59M18.21 11.775H9.296v1.21h9.622zM30.295 22.53h-3.29l.067-.04-1.727-2.953h-1.418l1.75 2.992h-5.524v-1.122a.58.58 0 0 1 .174-.417.598.598 0 0 1 .423-.172c.16 0 .31.06.422.172.113.111.176.259.176.416h1.228c0-.481-.19-.933-.536-1.272a1.828 1.828 0 0 0-1.29-.526h-.001c-.488 0-.946.187-1.29.527-.346.34-.535.792-.535 1.272v1.122h-4.382v-1.12c0-.324.267-.588.597-.589.33 0 .598.265.598.59l1.228-.001c0-.992-.82-1.798-1.826-1.798-1.008 0-1.826.807-1.826 1.8v1.118h-1.635v-2.992H10.45v2.992H9.296v1.21h21.706l-.707-1.21zM24.274 17.152h-3.196l-1.71-2.925h-1.419l1.711 2.925h-7.982v-2.925H10.45v2.925H9.296v1.21h15.685zM35.79 27.907h-2.772l.032-.019-1.728-2.954h-1.418l1.739 2.973h-5.877v-1.193a.58.58 0 0 1 .175-.417.598.598 0 0 1 .422-.172c.16 0 .31.06.423.172a.58.58 0 0 1 .175.416h1.228c0-.48-.19-.933-.535-1.272a1.828 1.828 0 0 0-1.29-.526h-.002c-.487 0-.946.187-1.29.527-.345.34-.535.792-.534 1.272v1.193h-4.383v-1.19a.58.58 0 0 1 .175-.417.598.598 0 0 1 .422-.172c.33 0 .598.263.598.588h1.228c0-.992-.82-1.798-1.825-1.798h-.001c-.488 0-.947.187-1.291.527-.345.34-.535.792-.534 1.272v1.19h-4.383V26.72c0-.325.268-.59.597-.59.33 0 .598.264.598.59l1.228-.002c0-.991-.82-1.797-1.825-1.797h-.001c-1.007 0-1.826.808-1.825 1.8v1.186h-1.638V24.98H10.45v2.926H9.296v1.21h27.202l-.707-1.21zM46.06 23.74v-1.21H31.75l.707 1.21zM43.678 24.981v2.926h-6.455l.707 1.21h8.13v-1.21h-1.154V24.98z"
              />
              <path
                d="M44.906 33.284v-2.927h-1.228v2.927h-4.997l-1.67-2.855h-1.417l1.67 2.855H25.769V32.09a.58.58 0 0 1 .174-.416.598.598 0 0 1 .423-.173c.16 0 .31.061.423.172.112.111.175.26.175.416h1.228c0-.48-.19-.932-.536-1.272a1.828 1.828 0 0 0-1.29-.526c-.489 0-.947.188-1.292.527-.344.34-.534.792-.534 1.273v1.192h-4.382v-1.19a.58.58 0 0 1 .174-.417.598.598 0 0 1 .423-.172c.33 0 .598.264.598.588h1.228c0-.992-.82-1.798-1.826-1.798-.489 0-.947.187-1.292.527-.344.34-.534.792-.534 1.273v1.189h-4.382v-1.187c0-.325.267-.589.597-.59a.598.598 0 0 1 .598.59l1.228-.001c0-.48-.19-.932-.535-1.272a1.828 1.828 0 0 0-1.29-.526h-.002c-1.007 0-1.825.808-1.825 1.8l.001 1.186h-1.67v-2.855h-1.227v2.855h-5.12l.141 1.21h44.048l.141-1.21h-4.726zM17.738 36.308v13.523l1.228.67V36.308zM20.775 36.308v15.18l1.229.67v-15.85zM14.7 36.308v11.866l1.229.67V36.308zM11.663 36.308v10.209l1.228.67V36.308zM5.656 36.308l.867 7.404.293.16v-7.564zM26.85 36.308v18.495l.617.337.611-.334V36.308zM8.626 36.308v8.551l1.228.67v-9.22zM23.813 36.308v16.838l1.228.67V36.308zM45.075 36.308v9.224l1.228-.67v-8.554zM29.888 36.308V53.82l1.228-.67v-16.84zM42.037 36.308V47.19l1.229-.67V36.307zM48.112 36.308v7.567l.3-.163.866-7.404zM39 36.308v12.539l1.228-.67V36.308zM32.925 36.308v15.854l1.228-.67V36.308zM35.963 36.308v14.196l1.228-.67V36.308z"
              />
            </g>
          </svg>
          <span>NG-Rome</span>
        </p>
        <div class="site-footer__copy">
          <p>Copyright 2020 © SATYRICON FACTORY LTD - All Rights Reserved.</p>
          <ul class="site-footer__nav">
            <li>
              <a (click)="openModal('ngrome-conduct')" title="Code of Conduct">Code of Conduct</a>
            </li>
            <li>
              <a (click)="openModal('ngrome-terms')" title="Terms & Privacy">Terms & Privacy</a>
            </li>
            <li>
              <a [routerLink]="['/diversity']" title="Go to NGRome Diversity page">Diversity</a>
            </li>
            <li>
              <a [routerLink]="['/sponsors']" title="Go to NGRome Sponsors page">Sponsors</a>
            </li>
            <!-- <li>
          <a [routerLink]="['/speakers']" title="Go to NGRome Speakers page">Speakers</a>
        </li> -->
            <!-- <li>
          <a [routerLink]="['/workshops']" title="Go to NGRome Workshops page">Workshops</a>
        </li> -->
            <li>
              <a [routerLink]="['/about']" title="Go to NGRome About page">About</a>
            </li>
            <li>
              <a [routerLink]="['/info']" title="Go to NGRome Info page">Info</a>
            </li>
          </ul>
        </div>
        <ul class="site-footer__nav site-footer__nav--social">
          <li>
            <a rel="noopener" href="https://www.facebook.com/ngromeconf" target="_blank" title="Facebook">
              <svg width="20" height="20">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#FFF" d="M-1075-4687H365V72h-1440z" />
                  <path d="M-15-15h50v50h-50z" />
                  <path
                    fill="#4469B0"
                    d="M1.598 19.444a1.043 1.043 0 0 1-1.042-1.042V1.598c0-.576.466-1.042 1.042-1.042h16.804c.576 0 1.042.466 1.042 1.042v16.804c0 .576-.466 1.042-1.042 1.042h-4.813V12.13h2.455l.368-2.851h-2.823v-1.82c0-.825.229-1.388 1.412-1.388h1.51V3.52a20.18 20.18 0 0 0-2.2-.113c-2.176 0-3.666 1.329-3.666 3.769v2.102H8.183v2.85h2.462v7.315H1.598z"
                  />
                </g>
              </svg>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a rel="noopener" href="https://twitter.com/ngromeconf" target="_blank" title="Twitter">
              <svg width="21" height="20">
                <g fill="none" fill-rule="evenodd">
                  <path fill="#FFF" d="M-1150-4689H290V70h-1440z" />
                  <path d="M-15-17h50v50h-50z" />
                  <path
                    fill="#2BA3EF"
                    d="M20.904 2.639a7.8 7.8 0 0 1-2.448.75c.881-.59 1.557-1.524 1.875-2.637a7.997 7.997 0 0 1-2.709 1.156C16.847.98 15.738.403 14.512.403c-2.353 0-4.262 2.135-4.262 4.768 0 .374.037.737.11 1.086-3.543-.2-6.683-2.096-8.787-4.984a5.202 5.202 0 0 0-.577 2.4c0 1.654.752 3.113 1.896 3.969a3.927 3.927 0 0 1-1.931-.595v.059c0 2.31 1.47 4.239 3.42 4.675a3.75 3.75 0 0 1-1.123.168c-.274 0-.542-.029-.802-.085.542 1.894 2.116 3.273 3.982 3.31-1.459 1.28-3.298 2.043-5.294 2.043a7.83 7.83 0 0 1-1.018-.066c1.887 1.35 4.129 2.14 6.535 2.14 7.842 0 12.128-7.264 12.128-13.566 0-.207-.003-.415-.01-.618a9.262 9.262 0 0 0 2.125-2.468"
                  />
                </g>
              </svg>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a
              rel="noopener"
              href="https://join.slack.com/t/ngrome/shared_invite/enQtNzIzNTAzNzMzNDI2LTliODkyZmI1ZDNjYmJkNzYyYzIxOTlmNzc2MTRlMTk2NDVhNDllMWU2Y2RjNDFmZGJkNjc2ZDFlMGQxYWViNmU"
              target="_blank"
              title="Slack"
            >
              <svg
                width="21"
                height="21"
                class="c-nav--footer__svgicon c-slackhash"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
                    fill="#36C5F0"
                  ></path>
                  <path
                    d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
                    fill="#2EB67D"
                  ></path>
                  <path
                    d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
                    fill="#ECB22E"
                  ></path>
                  <path
                    d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
                    fill="#E01E5A"
                  ></path>
                </g>
              </svg>
              <span>Slack</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ngrome-modal id="ngrome-terms">
      <input
        type="image"
        width="20"
        src="./assets/icons/error.svg"
        class="close"
        (click)="closeModal('ngrome-terms')"
      />
      <ngrome-terms></ngrome-terms>
    </ngrome-modal>
    <ngrome-modal id="ngrome-conduct">
      <input
        type="image"
        width="20"
        src="./assets/icons/error.svg"
        class="close"
        (click)="closeModal('ngrome-conduct')"
      />
      <ngrome-conduct></ngrome-conduct>
    </ngrome-modal>
  `,
  styles: [
    `
      .site-footer__nav img {
        height: 22px;
        width: 22px;
      }
      .site-footer__nav img.img--slack {
        height: 24px;
        width: 24px;
      }
    `,
  ],
})
export class FooterLinksSectionComponent {
  modalOpened = false;
  constructor(private modalService: ModalService) {}

  openModal(id: string) {
    this.modalOpened = true;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalOpened = false;
    this.modalService.close(id);
  }
}
