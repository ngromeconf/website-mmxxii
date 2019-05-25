import { Component, Output, EventEmitter, NgZone, OnInit, ElementRef } from '@angular/core';
import { Linear, TimelineLite, TweenLite } from "gsap";

@Component({
  selector: 'ngrome-logo',
  templateUrl: './logo-ngrome.component.html',
  styleUrls: ['./logo-ngrome.component.scss'],
})
export class LogoNgromeComponent implements OnInit{

    @Output()
    public animationToggled = new EventEmitter();

  public get isActive(): boolean {
		return this._active;
	}

	public get isAnimating(): boolean {
		return this._animating;
	}

	private _active: boolean;
  private _animating: boolean;

  /**
   * Return the svg element of logo
   *
   * @readonly
   * @private
   * @type {HTMLElement}
   * @memberof LogoNgromeComponent
   */
  private get logo(): HTMLElement {
		return this.logoElement.nativeElement;
  }

  private _tl = new TimelineLite();


  constructor(
    private ngZone: NgZone,
    private logoElement: ElementRef) {
  }

  ngOnInit() {
    this.setState();
    this.animateLogo();
  }

  private setState() {
		this._active = Math.random() > 0.5;
		if (this.isActive) {
			TweenLite.set(this.logoElement, { className: "active" });
		} else {
			TweenLite.set(this.logoElement, { className: "" });
		}
  }

  private animateLogo(){

    //console.log('animate logo');
    this._animating = true;

    const stagger = 5;

    TweenLite.defaultEase = Linear.easeNone;
    //console.log(this.logo);
    let svgElement = this.logo.querySelector('svg');
    let logoElement: any = svgElement.getElementsByClassName('logo-ng-rome');


    let bounds = logoElement[0].getBBox();
    let blast = this.logo.querySelector('#blast');
    let center = this.getCenter(bounds);
    //check the window height

    var radius = this.getDistance(center, bounds);

    //TweenLite.set(blast, { attr: { r: radius, cx: center.x, cy: center.y }});
    TweenLite.set(blast, { transformOrigin: "center", scale: 0 });

    //this._tl.to(blast, stagger, { scale: 1 }, 0);
    this._tl.to(blast, stagger, { scale: 0, autoAlpha: 1 }, stagger);

    let logoElementsToAnimate = Array.prototype.slice.call( logoElement[0].children );

    logoElementsToAnimate.forEach( (element,i) => {
      //console.log('3-forEach element ',i);
      var element_bbox = element.getBBox();
      var scale = 1;
      var toBlur = false;

      //define the element to blur
      if (i%2==0 && element.className.baseVal === 'toBlur'){
        scale = Math.random() * 3.5 + 1;
        if (scale > 1.7){
          toBlur = true;
          //console.log('4-blur this element ',element);
        }
      }

      //this item should be not visible
      if (element.className.baseVal === 'long'){
        scale = 0;
      }

      var dist = this.getDistance(element_bbox, center);
      //console.log(element, dist);
      var delay = 1.1;

      var scalar = radius / dist;

      //console.log('6-scalar ', scalar);
      var itemRotation = Math.floor(Math.random() * 365);
      //console.log('7-rotate this element ', itemRotation);
      var rotation = itemRotation+"_short";

      this._tl.to(element, 1, {
        autoAlpha: 1,
        x: (element_bbox.x - center.x) * scalar,
        y: (element_bbox.y - center.y) * scalar,
        directionalRotation:rotation,
        scale: scale
      }, delay);


      if(toBlur){
        setTimeout(() => {
          //console.log('show container');
          element.classList.add('blur');
        }, 800);
      }

    });

    let animation = this.activate();

    //this._tl.add(this.toggle(), "start");


    this._active = !this.isActive;

    return new TimelineLite().add(animation).add(() =>
			this.ngZone.run(() => {
        this.animationToggled.emit(true);
        this._animating = false;
        //console.log('animation complete');
			})
		);

  }

  /**
   *
   *
   * @private
   * @param {*} p1
   * @param {*} p2
   * @returns
   * @memberof LogoNgromeComponent
   */
  private getDistance(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }


  //define center of the logo explosion
  /**
   *
   *
   * @private
   * @param {*} bounds
   * @returns
   * @memberof LogoNgromeComponent
   */
  private getCenter(bounds){
    //on mobile we have less space on top...
    //console.log(window.innerHeight);
    let centerY = bounds.x + bounds.width /2;
    //centerY = centerY + 0.25 * centerY;

    let centerX = bounds.x + bounds.width /2;
    //centerX = centerX + 0.55 * centerX;

    return {x: centerX, y: centerY};
  }

  public activate(){
    //console.log('activate');
    return TweenLite.fromTo(this._tl, 2, { className: "" }, { className: "active" });
  }


}
