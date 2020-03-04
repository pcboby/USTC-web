import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-appendages',
  templateUrl: './statistics-appendages.component.html',
  styleUrls: ['./statistics-appendages.component.css']
})
export class StatisticsAppendagesComponent implements OnInit {

  default_form_value = {
    ranges: [null],
    pipelineType: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
