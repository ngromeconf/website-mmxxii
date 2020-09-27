import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'ngrome-about',
  template: `
    <div class="site-about">
      <header class="site-about__header">
        <h1>About</h1>
      </header>
      <div class="about-text site-about__main">
        <p>
          NG-Rome is a <b>non-profit community</b> conference run by a team of volunteers. We are all active
          members of the tech community, and run or contribute to various free local meetups, workshops, and
          education initiatives.
        </p>
        <p>
          NG-Rome event is the <b>biggest International Angular Conference</b>
          in Italy, helping bring together ideas and developers from all the corners of Italy and Europe.
        </p>
        <p>
          The community is born by a group of passionate devs, JavaScript lovers, and enthusiastic developer
          that use the Angular framework.
        </p>
        <p>
          Our mission is to connect Italian developers to the
          <b>global community</b>.
        </p>
        <p>
          Fostering new relationships within Italy, and across borders. Simultaneously develop new skills and
          having
          <b>moments of fun</b>.
        </p>
      </div>
      <div class="site-about__twitter">
        <blockquote class="twitter-tweet" data-lang="en">
          <p lang="en" dir="ltr">
            A taste of
            <a href="https://twitter.com/hashtag/NGRomeMMXIX?src=hash&amp;ref_src=twsrc%5Etfw"
              >#NGRomeMMXIX</a
            >
            🇮🇹
            <a href="https://t.co/9gaoN3AJer">pic.twitter.com/9gaoN3AJer</a>
          </p>
          &mdash; NGRomeConf (@ngromeconf)
          <a href="https://twitter.com/ngromeconf/status/1131316168487317505?ref_src=twsrc%5Etfw"
            >May 22, 2019</a
          >
        </blockquote>
        <div class="site-about__twitter__text">STAY INFORMED</div>
      </div>
      <div class="site-about__team">
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
          <div>
            <a href="https://twitter.com/ermannobattista" target="_blank">
              <img src="./assets/images/team/ermanno_battista.jpg" /><br />
            </a>
            <a href="https://twitter.com/ermannobattista" target="_blank">
              <span>@ermannobattista</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/laurenziello" target="_blank">
              <img src="./assets/images/team/laurenziello_cesare.jpg" /><br />
            </a>
            <a href="https://twitter.com/laurenziello" target="_blank">
              <span>@laurenziello</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/elliotttran" target="_blank">
              <img src="./assets/images/team/elliot_tranye.jpg" /><br />
            </a>
            <a href="https://twitter.com/elliotttran" target="_blank">
              <span>@elliotttran</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/ryan-jherome-burgos" target="_blank">
              <img src="./assets/images/team/ryanburgos.jpg" /><br />
            </a>
            <a href="https://www.linkedin.com/in/ryan-jherome-burgos" target="_blank">
              <span>@ryanjheromeburgos</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets> -->
  `,
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef, private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.generateTags({
      title: 'About page: NG-Rome a non-profit community conference run by a team of volunteers.',
    });
  }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://platform.twitter.com/widgets.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
