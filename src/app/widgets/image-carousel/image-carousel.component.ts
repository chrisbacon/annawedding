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

  private position: number = -1; 
  private delta: number = 1;
  private imgNo: number = 6;
  public imgPrefix: string = "couple";
  public numbers = Array(this.imgNo + 1).fill(0).map((x,i)=>i);

  @ViewChild('carousel') carousel: NgxSlideshowComponent;

  ngAfterViewInit(): void {
    this.carousel.goTo(this.position);
    this.sub = Observable.interval(2000)
    .delay(2000)
    .subscribe(() => this.rotate());
  }

  constructor() {
  }

  ngOnInit() {
  }

  rotate() {
    this.position = (this.position + this.delta);
    this.delta = !(this.position === -1 || (this.position === this.imgNo - 1)) ? this.delta : -this.delta;
    this.carousel.goTo(this.position);
  } 

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
