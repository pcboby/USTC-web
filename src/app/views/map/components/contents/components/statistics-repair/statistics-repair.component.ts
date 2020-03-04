import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-repair',
  templateUrl: './statistics-repair.component.html',
  styleUrls: ['./statistics-repair.component.css']
})
export class StatisticsRepairComponent implements OnInit {

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
