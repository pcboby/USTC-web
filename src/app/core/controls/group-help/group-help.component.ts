import { Component, OnInit, Input } from '@angular/core';
import { Help } from '../../modules/help';

@Component({
  selector: 'app-group-help',
  templateUrl: './group-help.component.html',
  styleUrls: ['./group-help.component.css']
})
export class GroupHelpComponent implements OnInit {

  @Input()
  code = null;

  get dataset() {
    return this.code ? Help[this.code] : null;
  }

  constructor() { }

  ngOnInit() {
  }

  afterClose(): void {
    console.log('close');
  }

}
