import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArkMapService {
  ROAM = true;

  constructor() {}

  toggleRoam() {
    this.ROAM = !this.ROAM;
  }

  clear() {}
}
