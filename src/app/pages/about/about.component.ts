import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'ngrome-about',
  template: `
  <section id="intro" class="site-content__section">
    <div class="site-content__wrap">
      <div class="site-content__intro">
        <header class="site-content__intro__head__inner">
          <h1 class="site-content__intro__title">About</h1>
        </header>
        <div class="site-content__intro__info__inner">
          <p>NG-Rome is a <b>non-profit community</b> conference run by a team of volunteers.
          We are all active members of the tech community, and run or contribute to various free
          local meetups, workshops, and education initiatives.</p>
          <p>NG-Rome event is the biggest <b>International</b> Angular Conference in Italy,
          helping bring together ideas and developers from all the <b>corners of Italy</b> and Europe.</p>
          <p>The community is born by a group of passionate devs, JavaScript lovers,
          and enthusiastic developer that use the <b>Angular</b> framework.</p>
          <p>Our mission is to connect Italian developers to the <b>global community</b>.</p>
          <p>Fostering new relationships within Italy, and across borders.
          Simultaneously develop new skills and having <b>moments of fun</b>.</p>
          <div class="content__intro__info__inner__yolo">
            <blockquote class="twitter-tweet" data-lang="en">
              <p lang="en" dir="ltr">A taste of
              <a href="https://twitter.com/hashtag/NGRomeMMXIX?src=hash&amp;ref_src=twsrc%5Etfw">#NGRomeMMXIX</a> 🇮🇹
              <a href="https://t.co/9gaoN3AJer">pic.twitter.com/9gaoN3AJer</a></p>&mdash; NGRomeConf (@ngromeconf)
              <a href="https://twitter.com/ngromeconf/status/1131316168487317505?ref_src=twsrc%5Etfw">May 22, 2019</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <div class="site-content__wrap"></div>
  </section>


  <section class="site-content__section">
    <div class="site-content__wrap">
      <div class="site-content__description">
        <h1 class="site-content__section__title">The TEAM</h1>
        <ul class="team__list">
          <li>
            <img src="./assets/images/team/zizzamia.png"><br>
            <span>Leonardo Zizzamia</span>
          </li>
          <li>
            <img src="./assets/images/team/kraus.png"><br>
            <span>Martina Kraus</span>
          </li>
          <li>
            <img src="./assets/images/team/murruni.png"><br>
            <span>Luciano Murruni</span>
          </li>
          <li>
            <img src="./assets/images/team/bertaina.png"><br>
            <span>Michela Bertaina</span>
          </li>
          <li>
            <img src="./assets/images/team/carducci.png"><br>
            <span>Luca Carducci</span>
          </li>
          <li>
            <img src="./assets/images/team/franceschini.png"><br>
            <span>Lorenzo Franceschini</span>
          </li>
          <li>
            <img src="./assets/images/team/matascioli.png"><br>
            <span>Marco Matascioli</span>
          </li>
          <li>
            <img src="./assets/images/team/natili.png"><br>
            <span>Giorgio Natili</span>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <ngrome-tickets class="site-content__section" id="tickets"></ngrome-tickets>
  `,
  styles: [`
    .site-content {
      &__wrap{
        img{
          width: 100%;
        }
      }
      &__description{
        max-width: 700px;
        margin: auto;
        h1 {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.1;
        }
        @media only screen and (min-width: 768px) {
          h1 {
            font-size: 32px;
            flex-basis: 40%;
            padding-right: 80px;
          }
        }
      }
    }
    .content__intro__info__inner__yolo {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {}

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://platform.twitter.com/widgets.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
