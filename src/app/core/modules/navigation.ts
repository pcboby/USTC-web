export const Navigation = [
  {
    title: '图层控制',
    link: '/map/layer',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '矢量数据',
        link: '/map/layer?type=vector',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '模型数据',
        link: '/map/layer?type=model',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '管线数据',
        link: '/map/layer?type=pipeline',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '影像数据',
        link: '/map/layer?type=image',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '地图操作',
    link: '/map/control',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '测量工具',
        link: '/map/control?type=measure',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '标注工具',
        link: '/map/control?type=tagging',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '定位工具',
        link: '/map/control?type=location',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '管线查询',
    link: '/map/pipeline',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '点击查询',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '管径',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '材质',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '附属物',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '复合查询',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '管点使用状态录入',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '能源系统图录入',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '巡视管理',
        link: '/map/pipeline?type=click',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '管线统计',
    link: '/map/statistics',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '分类统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '分段统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '附属物统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '长度统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '条数统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '维修改造统计',
        link: '/map/statistics?type=classify',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '综合分析',
    link: '/map/analysis',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '横断面分析',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '爆管分析',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '连通分析',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '挖方分析',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '水平净距',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '垂直净距',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '健康分析',
        link: '/map/analysis?type=section',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '房属管理',
    link: '/map/house',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '属性挂接',
        link: '/map/house?type=attrib',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '信息查询',
        link: '/map/house?type=attrib',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '信息修改',
        link: '/map/house?type=attrib',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '能源系统',
    link: '/map/energy',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '监测计量',
        link: '/map/energy?type=monitor',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '能源系统图',
        link: '/map/energy?type=monitor',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '打印出图',
    link: '/map/print',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '专题图输出',
        link: '/map/print/special',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  },
  {
    title: '系统管理',
    link: '/system',
    iconCls: 'fa fa-cog',
    promise: '',
    data: [
      {
        title: '机构管理',
        link: '/system/organ',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '权限管理',
        link: '/system/authority',
        iconCls: 'fa fa-cog',
        promise: ''
      },
      {
        title: '日志管理',
        link: '/system/log',
        iconCls: 'fa fa-cog',
        promise: ''
      }
    ]
  }
];
