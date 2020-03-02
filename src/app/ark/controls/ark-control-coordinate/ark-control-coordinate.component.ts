import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ark-control-coordinate',
  templateUrl: './ark-control-coordinate.component.html',
  styleUrls: ['./ark-control-coordinate.component.css']
})
export class ArkControlCoordinateComponent implements OnInit {

  x = 0;
  y = 0;
  z = 0;

  constructor() { }

  ngOnInit() {
  }

}
