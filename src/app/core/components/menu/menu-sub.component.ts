import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services';

@Component({
  selector: 'app-menu-sub',
  templateUrl: './menu-sub.component.html',
  styleUrls: ['./menu-sub.component.scss']
})
export class MenuSubComponent implements OnInit {


  get dataset() {
    const l = this.location.split('#')[1].split('?')[0];
    const d = this.nav.menu.find(item => item.link.indexOf(l) > -1);
    return d ? d['data'] : null;
  }
  get location() {
    return this.nav.getLocation();
  }

  constructor(private nav: NavigationService, private route: Router, private activated: ActivatedRoute) {}

  ngOnInit() {}

  go(item) {
    const e = item.data ? item.data[0] : item;
    this.route.navigate([e.link], { queryParams: e.queryParams});
  }

  isSelected(item) {
    return item.queryParams ? item.queryParams.type === this.activated.snapshot.queryParams['type'] : false;
  }


}
