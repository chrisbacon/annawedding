import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormModel } from '../../models/form-model';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  formGroup: FormGroup;
  data: FormModel;
  showChildren: boolean = false;
  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
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
      transport: new FormControl("") 
    })
  }

  childrenClick() {
    this.showChildren = !this.showChildren;
  }

}