import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-box',
  templateUrl: './panel-box.component.html',
  styleUrls: ['./panel-box.component.css']
})
export class PanelBoxComponent implements OnInit {
  @Input()
  title = null;

  @Input()
  type = null; // null | 'MINI'

  constructor() { }

  ngOnInit() {
  }

}
