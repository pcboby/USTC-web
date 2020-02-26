import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-menu-quick',
  templateUrl: './menu-quick.component.html',
  styleUrls: ['./menu-quick.component.scss']
})
export class MenuQuickComponent implements OnInit {

  dataset = [{
    title: '漫游',
    iconCls: 'fa fa-paper-plane-o'
  }, {
    title: '清除',
    iconCls: 'fa fa-trash-o'
  }];

  constructor(private nav: NavigationService) { }

  ngOnInit() {
  }

}
