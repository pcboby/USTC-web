import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-print-special',
  templateUrl: './print-special.component.html',
  styleUrls: ['./print-special.component.css']
})
export class PrintSpecialComponent implements OnInit {

  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
