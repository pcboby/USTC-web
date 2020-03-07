import { Component, OnInit } from '@angular/core';
import { ArkMapService } from '../../services';

@Component({
  selector: 'app-ark-control-coordinate',
  templateUrl: './ark-control-coordinate.component.html',
  styleUrls: ['./ark-control-coordinate.component.css']
})
export class ArkControlCoordinateComponent implements OnInit {

  get x() {
    return this.map.LOCALE[0] || 0;
  }
  get y() {
    return this.map.LOCALE[1] || 0;
  }
  get z() {
    return this.map.LOCALE[2] || 0;
  }

  constructor(private map: ArkMapService) { }

  ngOnInit() {
  }

}
