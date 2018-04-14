import { Component, AfterViewInit, OnDestroy, OnInit, HostBinding } from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";

@Component({
  selector: "app-image-carousel",
  templateUrl: "./image-carousel.component.html",
  styleUrls: ["./image-carousel.component.scss"]
})
export class ImageCarouselComponent implements AfterViewInit, OnDestroy, OnInit {
  private sub: Subscription;

  ngAfterViewInit(): void {
    this.sub = Observable.interval(2000)
    .do(() => console.log(this.labelOrder))
    .do(() => this.rotate())
    .delay(2000)
    .subscribe(() => this.shouldSlide = true);
  }

  public totalImages = 4;
  public shown = 3;

  public labelOrder = [];

  @HostBinding('class.slide') shouldSlide: boolean;

  constructor() {
  }

  ngOnInit() {
    for (let i=0; i < this.totalImages ; i++) {
      this.labelOrder.push(i);
    }
  }

  rotate() {
    this.labelOrder = this.labelOrder.map(val => (val + 1) % this.totalImages);
    this.shouldSlide = false;
  }


  getStyle(label): any {
    const index = this.labelOrder.findIndex(orderedLabel => orderedLabel == label) + 1;
    return {"grid-column-start": `${index}`, "grid-row-start": 1};
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
