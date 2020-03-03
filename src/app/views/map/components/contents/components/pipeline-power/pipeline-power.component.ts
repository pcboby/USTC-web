import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipeline-power',
  templateUrl: './pipeline-power.component.html',
  styleUrls: ['./pipeline-power.component.css']
})
export class PipelinePowerComponent implements OnInit {

  default_form_value = {
    keyword: [null],
    pipelineType: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
