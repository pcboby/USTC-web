
import { Component, OnInit } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { SystemOrganUserDetailComponent } from './components/system-organ-user-detail/system-organ-user-detail.component';

@Component({
  selector: 'app-system-organ-user',
  templateUrl: './system-organ-user.component.html',
  styleUrls: ['./system-organ-user.component.css']
})
export class SystemOrganUserComponent implements OnInit {
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData = [];
  listOfAllData = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(
      item => this.mapOfCheckedId[item.id]
    );
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(
      item => (this.mapOfCheckedId[item.id] = value)
    );
    this.refreshStatus();
  }

  constructor(
    // private api: ApiAssetsService,
    private modal: NzModalService,
    private msg: NzMessageService
  ) {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`
      });
    }
  }

  detail(data) {
    const modal = this.modal.create({
      nzTitle: '详情',
      nzContent: SystemOrganUserDetailComponent,
      nzComponentParams: {
        // dataset: data
      },
      nzWidth: 720,
      nzFooter: null
    });
  }
}
