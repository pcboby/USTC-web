import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer-mini',
  templateUrl: './footer-mini.component.html',
  styleUrls: ['./footer-mini.component.css']
})
export class FooterMiniComponent implements OnInit {

  get copyrights() {
    return environment.productionCopyrights;
  }

  constructor() { }

  ngOnInit() {
  }

}
