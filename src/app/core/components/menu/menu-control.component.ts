import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.scss']
})
export class MenuControlComponent implements OnInit {
  dataset = [
    {
      title: '首页',
      iconCls: 'fa fa-home',
      link: '/map/dashboard'
    }
  ];

  
  get location() {
    return this.nav.getLocation();
  }
  constructor(private route: Router, private nav: NavigationService, private activated: ActivatedRoute) { }


  ngOnInit() {
  }


  isSelected(link) {
    return link ? this.location.indexOf(link.split('?')[0]) > -1 : false;
  }

  go(url) {
    this.route.navigate([url]);
  }
}
