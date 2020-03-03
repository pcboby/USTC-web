import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-pipeline-material',
  templateUrl: './check-pipeline-material.component.html',
  styleUrls: ['./check-pipeline-material.component.scss']
})
export class CheckPipelineMaterialComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  dataset = [
    { label: 'PE', value: 'PE', checked: true },
    { label: 'PVC', value: 'PVC', checked: false },
    { label: '水泥', value: '水泥', checked: false },
    { label: '铁', value: '铁', checked: false },
    { label: '砖混', value: '砖混', checked: false }
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
