import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  @Input()
  sub = null;
  @Input()
  type = null;

  constructor() { }

  ngOnInit() {
  }

}
