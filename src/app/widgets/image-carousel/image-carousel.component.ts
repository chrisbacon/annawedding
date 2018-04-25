import { Component, AfterViewInit, OnDestroy, OnInit, HostBinding, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs/Rx";
import { NgxSlideshowComponent } from "ngx-slideshow";

@Component({
  selector: "app-image-carousel",
  templateUrl: "./image-carousel.component.html",
  styleUrls: ["./image-carousel.component.scss"]
})
export class ImageCarouselComponent implements AfterViewInit, OnDestroy, OnInit {
  private sub: Subscription;

  private position: number = 0; 

  @ViewChild('carousel') carousel: NgxSlideshowComponent;

  ngAfterViewInit(): void {
    this.sub = Observable.interval(2000)
    .delay(2000)
    .subscribe(() => this.rotate());
  }


  constructor() {
  }

  ngOnInit() {
  }

  rotate() {
    this.position = (this.position + 1) % 4;
    this.carousel.goTo(this.position);
  } 

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
