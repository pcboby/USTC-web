
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  value = 50;

  get sub() {
    return this.activated.snapshot.params['sub'];
  }


  constructor(private activated: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
