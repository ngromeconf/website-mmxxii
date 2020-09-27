import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntersectionObserverService {
  private _observedElement: HTMLElement;
  private _elementToHide: HTMLElement;
  private _observer: IntersectionObserver;

  constructor() {}

  public hideElementWhenObservedIsInView(): void {
    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            this._elementToHide.style.display = 'none';
          } else {
            this._elementToHide.style.display = 'block';
          }
        });
      },
      {
        threshold: 0.01,
      }
    );
    this._observer.observe(this._observedElement);
  }

  public disconnectObserver() {
    this._observer.disconnect();
    this._elementToHide.style.display = 'block';
  }

  public setObservedElement(observedElement: HTMLElement): void {
    this._observedElement = observedElement;
  }

  public setElementToHide(elementToHide: HTMLElement): void {
    this._elementToHide = elementToHide;
  }
}
