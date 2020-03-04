import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-pipeline-size-range',
  templateUrl: './check-pipeline-size-range.component.html',
  styleUrls: ['./check-pipeline-size-range.component.css']
})
export class CheckPipelineSizeRangeComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  dataset = [
    { value: [0, 25], checked: true },
    { value: [25, 50], checked: false },
    { value: [50, 75], checked: false },
    { value: [75, 100], checked: false },
    { value: [100, null], checked: false }
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
