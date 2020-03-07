import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArkMapService {
  // 漫游
  ROAM = true;
  // 透明度
  ALPHA = 100;
  // 鼠标位置（坐标）
  LOCALE = [0, 0, 0];

  constructor() {}

  toggleRoam() {
    this.ROAM = !this.ROAM;
  }

  clear() {}
}
