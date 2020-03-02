import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  get sub() {
    return this.activated.snapshot.params['sub'];
  }

  get type() {
    return this.activated.snapshot.queryParams['type'];
  }

  constructor(private activated: ActivatedRoute) {}

  ngOnInit() {}
}
