import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Navigation } from '../modules/navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  menu = Navigation;

  getLocation() {
    return window.location.href;
  }

  constructor() {}
}
