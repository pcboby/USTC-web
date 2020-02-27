import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-chart-point',
  templateUrl: './group-chart-point.component.html',
  styleUrls: ['./group-chart-point.component.scss']
})
export class GroupChartPointComponent implements OnInit {
  @Input()
  dataset = null;

  constructor() {}

  ngOnInit() {}

  prece(d, v) {
    if (d) {
      let s = 0;
      for (const i of d) {
        s += i.value;
      }
      return s ? v / s * 100 + '%' : '100%';
    }
    return '100%';
  }
}
