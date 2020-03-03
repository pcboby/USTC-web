import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipeline-patrol',
  templateUrl: './pipeline-patrol.component.html',
  styleUrls: ['./pipeline-patrol.component.css']
})
export class PipelinePatrolComponent implements OnInit {

  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
