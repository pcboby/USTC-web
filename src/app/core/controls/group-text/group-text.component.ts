import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-text',
  templateUrl: './group-text.component.html',
  styleUrls: ['./group-text.component.css']
})
export class GroupTextComponent implements OnInit {

  @Input()
  text = null;

  constructor() {}

  ngOnInit() {}

  trance(txt) {
    if (txt) {
      const tmp = [];
      for (let i = 0; i < txt.length; i++) {
        tmp.push(txt.substring(i, i + 1));
      }
      return tmp;
    }
    return null;
  }
}
