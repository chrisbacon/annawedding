import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormModel } from '../../models/form-model';
import { HttpClient } from '@angular/common/http';
import { style, state, animate, transition, trigger } from '@angular/animations';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

enum DeliveryState {
  Unsent = "unsent",
  Pending = "pending",
  Successful = "successful",
  Failed = "failed"
}

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
  animations: [
    trigger('collapseExpand', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({height: 0}),
        animate(500, style({height: "*"})) ,
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({height: 0}))
      ])
    ]),
  ]
})
export class RsvpComponent implements OnInit {

  public formGroup: FormGroup;
  public data: FormModel;
  public showChildren: boolean = false;
  public state: DeliveryState = DeliveryState.Unsent 
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.initialiseForm();
  }

  private initialiseForm(): void {
    this.formGroup = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      adults: new FormGroup({
        all: new FormControl(true),
        missing: new FormControl("")
      }),
      children: new FormGroup({
        number: new FormControl(1),
        dietary: new FormControl(""),
        highChairs: new FormControl(0)
      }),
      dietary: new FormControl(""),
      transport: new FormControl(null, Validators.required) 
    })
  }

  public reset(event): void {
    event.preventDefault();
    this.state = DeliveryState.Unsent;
    this.initialiseForm();
  }

  childrenClick() {
    this.showChildren = !this.showChildren;
  }

  onSubmit({ value, valid }: { value: FormModel, valid: boolean }) {
    if (valid) {
      this.state = DeliveryState.Pending;
      this.httpClient.post("https://ma833hbsgf.execute-api.eu-west-1.amazonaws.com/v1", value)
      .subscribe(message => {
        this.state = DeliveryState.Successful
      },
      err => this.state = DeliveryState.Failed)      
    }
  }

}