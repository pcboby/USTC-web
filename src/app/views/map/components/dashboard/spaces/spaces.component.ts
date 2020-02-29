import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent implements OnInit {
  colors = [
    'linear-gradient(to right, #dd5f89, #f7ba97)',
    'linear-gradient(to right, #08cfa2, #eaffcc)',
    'linear-gradient(to right, #3a6ef9, #ca84e3)',
    'linear-gradient(to right, #f76e1b, #ffff00)',
    'linear-gradient(to right, #05b1e6, #94ddf4)'
  ];
  legend = [
    {
      label: '教学科研'
    },
    {
      label: '保障服务'
    },
    {
      label: '综合'
    },
    {
      label: '公寓'
    },
    {
      label: '历史建筑'
    }
  ];
  dataset = [
    {
      label: '东校区',
      data: [
        {
          label: '东校区教学科研',
          value: 162
        },
        {
          label: '东校区保障服务',
          value: 52
        },
        {
          label: '东校区综合',
          value: 47
        },
        {
          label: '东校区公寓',
          value: 22
        },
        {
          label: '东校区历史建筑',
          value: 86
        }
      ]
    },
    {
      label: '南校区',
      data: [
        {
          label: '南校区教学科研',
          value: 162
        },
        {
          label: '南校区保障服务',
          value: 52
        },
        {
          label: '南校区综合',
          value: 47
        },
        {
          label: '南校区公寓',
          value: 22
        },
        {
          label: '南校区历史建筑',
          value: 86
        }
      ]
    },
    {
      label: '西校区',
      data: [
        {
          label: '西校区教学科研',
          value: 162
        },
        {
          label: '西校区保障服务',
          value: 52
        },
        {
          label: '西校区综合',
          value: 47
        },
        {
          label: '西校区公寓',
          value: 22
        },
        {
          label: '西校区历史建筑',
          value: 86
        }
      ]
    },
    {
      label: '北校区',
      data: [
        {
          label: '北校区教学科研',
          value: 162
        },
        {
          label: '北校区保障服务',
          value: 52
        },
        {
          label: '北校区综合',
          value: 47
        },
        {
          label: '北校区公寓',
          value: 22
        },
        {
          label: '北校区历史建筑',
          value: 86
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
