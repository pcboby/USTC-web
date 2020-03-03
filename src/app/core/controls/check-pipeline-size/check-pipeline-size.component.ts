import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-pipeline-size',
  templateUrl: './check-pipeline-size.component.html',
  styleUrls: ['./check-pipeline-size.component.scss']
})
export class CheckPipelineSizeComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  dataset = [
    { label: '20', value: '20', checked: true },
    { label: '40', value: '40', checked: false },
    { label: '80', value: '80', checked: false }
  ];

  constructor() {}

  ngOnInit() {}

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.dataset = this.dataset.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      this.dataset = this.dataset.map(item => {
        return {
          ...item,
          checked: false
        };
      });
    }
  }

  updateSingleChecked(): void {
    if (this.dataset.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.dataset.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }
}
