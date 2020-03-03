import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-pipeline-appendages',
  templateUrl: './check-pipeline-appendages.component.html',
  styleUrls: ['./check-pipeline-appendages.component.css']
})
export class CheckPipelineAppendagesComponent implements OnInit {
  allChecked = false;
  indeterminate = true;
  dataset = [
    { label: '变材点', value: '变材点', checked: true },
    { label: '变径点', value: '变径点', checked: false },
    { label: '变埋点', value: '变埋点', checked: false },
    { label: '变深点', value: '变深点', checked: false },
    { label: '出地', value: '出地', checked: false },
    { label: '出水口', value: '出水口', checked: false },
    { label: '地下消防栓', value: '地下消防栓', checked: false },
    { label: '堵头', value: '堵头', checked: false },
    { label: '阀门', value: '阀门', checked: false },
    { label: '阀门井', value: '阀门井', checked: false },
    { label: '非普查区去向', value: '非普查区去向', checked: false },
    { label: '非普查去向', value: '非普查去向', checked: false },
    { label: '检修井', value: '检修井', checked: false },
    { label: '深测点', value: '深测点', checked: false },
    { label: '消防栓', value: '消防栓', checked: false }
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
