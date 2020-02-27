import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-card',
  templateUrl: './panel-card.component.html',
  styleUrls: ['./panel-card.component.css']
})
export class PanelCardComponent implements OnInit {

  @Input()
  title = 'panel-card';

  @Input()
  type = null; // null | 'RIGHT'

  @Input()
  width = null;

  constructor() { }

  ngOnInit() {
  }

}
