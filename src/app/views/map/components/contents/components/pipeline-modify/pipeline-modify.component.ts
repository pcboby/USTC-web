import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pipeline-modify',
  templateUrl: './pipeline-modify.component.html',
  styleUrls: ['./pipeline-modify.component.css']
})
export class PipelineModifyComponent implements OnInit {

  default_form_value = {
    keyword: [null]
  };

  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group(this.default_form_value);
  }

}
