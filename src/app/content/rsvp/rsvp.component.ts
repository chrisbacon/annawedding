import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormModel } from '../../models/form-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  public formGroup: FormGroup;
  public data: FormModel;
  public showChildren: boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(""),
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
      transport: new FormControl() 
    })
  }

  childrenClick() {
    this.showChildren = !this.showChildren;
  }

  onSubmit({ value, valid }: { value: FormModel, valid: boolean }) {
    if (valid) {
      this.httpClient.post("https://ma833hbsgf.execute-api.eu-west-1.amazonaws.com/v1", value).subscribe(message => console.log(message));      
    }
  }

}