import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  get dataset() {
    return this.nav.menu;
  }

  get location() {
    return this.nav.getLocation();
  }
  constructor(private route: Router, private nav: NavigationService, private activated: ActivatedRoute) { }


  ngOnInit() {
  }

  go(url) {
    this.route.navigate([url]);
  }

  isSelected(link) {
    return this.location.indexOf(link.split('?')[0]) > -1;
  }

}
