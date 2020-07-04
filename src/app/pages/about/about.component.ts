import { Component, OnInit, ElementRef } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'ngrome-about',
  template: `
    <div class="flex-container">
      <header>
        <h1 class="about-title">About</h1>
      </header>
      <div class="about-text">
        <p>
          NG-Rome is a <b>non-profit community</b> conference run by a team of
          volunteers. We are all active members of the tech community, and run
          or contribute to various free local meetups, workshops, and education
          initiatives.
        </p>
        <p>
          NG-Rome event is the <b>biggest International Angular Conference</b>
          in Italy, helping bring together ideas and developers from all the
          corners of Italy and Europe.
        </p>
        <p>
          The community is born by a group of passionate devs, JavaScript
          lovers, and enthusiastic developer that use the Angular framework.
        </p>
        <p>
          Our mission is to connect Italian developers to the
          <b>global community</b>.
        </p>
        <p>
          Fostering new relationships within Italy, and across borders.
          Simultaneously develop new skills and having
          <b>moments of fun</b>.
        </p>
      </div>
      <div class="about-twitter">
        <blockquote class="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">
            A taste of
            <a
              href="https://twitter.com/hashtag/NGRomeMMXIX?src=hash&amp;ref_src=twsrc%5Etfw"
              >#NGRomeMMXIX</a
            >
            🇮🇹
            <a href="https://t.co/9gaoN3AJer">pic.twitter.com/9gaoN3AJer</a>
          </p>
          &mdash; NGRomeConf (@ngromeconf)
          <a
            href="https://twitter.com/ngromeconf/status/1131316168487317505?ref_src=twsrc%5Etfw"
            >May 22, 2019</a
          >
        </blockquote>
        <div class="about-twitter-hide">
          STAY INFORMED
        </div>
      </div>
      <div class="about-team">
        <h1>The TEAM</h1>
        <div>
          <div>
            <a href="https://twitter.com/zizzamia" target="_blank">
              <img src="./assets/images/team/zizzamia.png" />
            </a>
            <a href="https://twitter.com/zizzamia" target="_blank">
              <span>@zizzamia</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/MartinaKraus11" target="_blank">
              <img src="./assets/images/team/kraus.png" /><br />
            </a>
            <a href="https://twitter.com/MartinaKraus11" target="_blank">
              <span>@MartinaKraus11</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/lucianomurruni" target="_blank">
              <img src="./assets/images/team/murruni.png" />
            </a>
            <a href="https://twitter.com/lucianomurruni" target="_blank">
              <span>@lucianomurruni</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/BertainaMichela" target="_blank">
              <img src="./assets/images/team/bertaina.png" /><br />
            </a>
            <a href="https://twitter.com/BertainaMichela" target="_blank">
              <span>@BertainaMichela</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/soniyj" target="_blank">
              <img src="./assets/images/team/matascioli.png" /><br />
            </a>
            <a href="https://twitter.com/soniyj" target="_blank">
              <span>@soniyj</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets> -->
  `,
  styles: [
    `
      .flex-container {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
      }

      @media only screen and (min-width: 768px) {
        .flex-container {
          padding-left: 100px;
          padding-top: 100px;
        }
      }

      .about-title {
        font-weight: bold;
        font-size: 80px;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #de0031;
        padding: 20px;
      }
      .about-text {
        background-image: url('/assets/images/about-bckg.jpg');
        background-repeat: no-repeat;
        background-position: bottom right;
        height: 150%;
      }
      .about-text > p {
        padding: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 25px;
        line-height: 148.6%;
        /* or 53px */
        letter-spacing: -0.02em;
      }

      @media only screen and (min-width: 768px) {
        .about-text > p {
          margin-right: 250px;
        }
      }
      .about-text > p:first-child {
        font-size: 36px;
        color: #dd0031;
      }
      .about-text > p:last-child {
        margin-bottom: 200px;
      }
      .about-twitter {
        display: flex;
        justify-content: center;
      }

      .about-twitter > div {
        padding-left: 50px;
        padding-top: 150px;
        font-style: normal;
        font-weight: bold;
        font-size: 80px;
        line-height: 118.6%;
        /* or 90px */

        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #dd0031;
      }

      @media only screen and (max-width: 1224px) {
        .about-twitter > div {
          display: none;
        }
      }

      .about-team {
        display: flex;
        flex-direction: column;
        padding-top: 50px;
      }

      .about-team h1 {
        font-weight: bold;
        font-size: 37px;
        line-height: 148.6%;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        color: #dd0031;
        text-align: center;
      }
      .about-team > div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .about-team > div > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
      }

      .about-team > div > div > a {
        text-align: center;
        padding-top: 20px;
      }

      .about-team img {
        border-radius: 50%;
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  constructor(private elementRef: ElementRef, private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.generateTags({
      title:
        'About page: NG-Rome a non-profit community conference run by a team of volunteers.',
    });
  }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://platform.twitter.com/widgets.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
