import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-breaking',
  templateUrl: './statistics-breaking.component.html',
  styleUrls: ['./statistics-breaking.component.css']
})
export class StatisticsBreakingComponent implements OnInit {

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
