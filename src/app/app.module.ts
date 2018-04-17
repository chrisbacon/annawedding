import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasePageComponent } from './layouts/base-page/base-page.component';
import { NavMenuComponent } from './content/nav-menu/nav-menu.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { WelcomeComponent } from './content/welcome/welcome.component';
import { RsvpComponent } from './content/rsvp/rsvp.component';
import { DirectionsComponent } from './content/directions/directions.component';
import { MainPanelComponent } from './layouts/base-page/main-panel/main-panel.component';
import { SidePanelComponent } from './layouts/base-page/side-panel/side-panel.component';
import { ImageCarouselComponent } from './widgets/image-carousel/image-carousel.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'main', component: MainContentComponent },
  { path: 'venue', component: DirectionsComponent },
  { path: 'rsvp', component: RsvpComponent }
]

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpClientModule],
  declarations: [AppComponent, BasePageComponent, NavMenuComponent, MainContentComponent, WelcomeComponent, RsvpComponent, DirectionsComponent, MainPanelComponent, SidePanelComponent, ImageCarouselComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

