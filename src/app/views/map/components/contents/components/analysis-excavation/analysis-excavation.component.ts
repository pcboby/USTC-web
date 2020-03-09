import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-analysis-excavation',
  templateUrl: './analysis-excavation.component.html',
  styleUrls: ['./analysis-excavation.component.css']
})
export class AnalysisExcavationComponent implements OnInit {

  defaultCheckedKeys = ['0-0-0'];
  defaultSelectedKeys = ['0-0-0'];
  defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];

  nodes = [
    {
      title: '挖填方',
      key: '0-0',
      expanded: true,
        children: [
          { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
          { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
          { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true },
          { title: '0-0-1-0', key: '0-0-1-3', isLeaf: true },
          { title: '0-0-1-1', key: '0-0-1-4', isLeaf: true },
          { title: '0-0-1-2', key: '0-0-1-5', isLeaf: true }
        ] 
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
  }

}
