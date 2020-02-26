import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout-mini',
  templateUrl: './layout-mini.component.html',
  styleUrls: ['./layout-mini.component.scss']
})
export class LayoutMiniComponent implements OnInit {

  get type() {
    return this.activeated.snapshot.data.type;
  }

  constructor(private activeated: ActivatedRoute) { }

  ngOnInit() {
  }

}
