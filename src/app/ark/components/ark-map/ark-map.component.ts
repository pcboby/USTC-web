import { Component, OnInit } from '@angular/core';
import { ArkMapService } from '../../services';

@Component({
  selector: 'app-ark-map',
  templateUrl: './ark-map.component.html',
  styleUrls: ['./ark-map.component.css']
})
export class ArkMapComponent implements OnInit {

  get roam() {
    return this.map.ROAM;
  }

  constructor(private map: ArkMapService) { }

  ngOnInit() {
  }

}
