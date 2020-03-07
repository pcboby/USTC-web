import { Component, OnInit } from '@angular/core';
import { ArkMapService } from '../../services';

@Component({
  selector: 'app-ark-control-alpha',
  templateUrl: './ark-control-alpha.component.html',
  styleUrls: ['./ark-control-alpha.component.css']
})
export class ArkControlAlphaComponent implements OnInit {


  get value() {
    return this.map.ALPHA;
  }
  set value(val) {
    this.map.ALPHA = val;
  }

  constructor(private map: ArkMapService) { }

  ngOnInit() {
  }

}
