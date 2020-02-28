import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errors = {
    '403': {
      title: '对不起，您没有权限使用此功能页面，如有需要，请联系系统管理员。'
    },
    '404': {
      title: '对不起，您输入的页面未找到，请重新选择页面或联系系统管理员。'
    },
    '500': {
      title: '对不起，服务器正在维护，请稍候刷新面页重试或联系系统管理员。'
    },
  }

  @Input()
  code = null;

  get errorCode() {
    return this.activated.snapshot.params['code'] || this.code;
  }

  constructor(private route: Router, private activated: ActivatedRoute) { }

  ngOnInit() {
  }

  go(url) {
    this.route.navigate([url]);
  }

}
