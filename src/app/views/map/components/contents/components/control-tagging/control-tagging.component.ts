import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-control-tagging',
  templateUrl: './control-tagging.component.html',
  styleUrls: ['./control-tagging.component.css']
})
export class ControlTaggingComponent implements OnInit {


  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }



}
