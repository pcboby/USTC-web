import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  get type() {
    return this.activated.snapshot.queryParams['type'];
  }

  constructor(private activated: ActivatedRoute) { }

  ngOnInit() {
  }

}
