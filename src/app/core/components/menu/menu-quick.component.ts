import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';
import { ArkMapService } from 'src/app/ark/services';

@Component({
  selector: 'app-menu-quick',
  templateUrl: './menu-quick.component.html',
  styleUrls: ['./menu-quick.component.scss']
})
export class MenuQuickComponent implements OnInit {

  get roam() {
    return this.map.ROAM;
  }
  set roam(val) {
    this.map.ROAM = val;
  }

  // dataset = [{
  //   title: '漫游',
  //   iconCls: 'fa fa-paper-plane-o'
  // }, {
  //   title: '清除',
  //   iconCls: 'fa fa-trash-o'
  // }];

  constructor(private nav: NavigationService, private map: ArkMapService) { }

  ngOnInit() {
  }

  mapClear() {
    this.map.clear();
  }

}
