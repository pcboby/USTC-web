import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-length',
  templateUrl: './statistics-length.component.html',
  styleUrls: ['./statistics-length.component.css']
})
export class StatisticsLengthComponent implements OnInit {

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
