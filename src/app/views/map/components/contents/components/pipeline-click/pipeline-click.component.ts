import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipeline-click',
  templateUrl: './pipeline-click.component.html',
  styleUrls: ['./pipeline-click.component.css']
})
export class PipelineClickComponent implements OnInit {

  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
