import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipeline-point',
  templateUrl: './pipeline-point.component.html',
  styleUrls: ['./pipeline-point.component.css']
})
export class PipelinePointComponent implements OnInit {

  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
