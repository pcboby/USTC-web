import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-number',
  templateUrl: './statistics-number.component.html',
  styleUrls: ['./statistics-number.component.css']
})
export class StatisticsNumberComponent implements OnInit {

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
