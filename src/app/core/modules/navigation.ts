export const Navigation = [
  {
    title: '图层控制',
    link: '/map/layer',
    iconCls: 'icon-menu-layer',
    promise: '',
    data: [
      {
        title: '矢量数据',
        link: '/map/layer',
        queryParams: {type: '矢量数据'},
        iconCls: 'icon-menu-layer-vector',
        promise: ''
      },
      {
        title: '模型数据',
        link: '/map/layer',
        queryParams: {type: '模型数据'},
        iconCls: 'icon-menu-layer-module',
        promise: ''
      },
      {
        title: '管线数据',
        link: '/map/layer',
        queryParams: {type: '管线数据'},
        iconCls: 'icon-menu-layer-pipeline',
        promise: ''
      },
      {
        title: '影像数据',
        link: '/map/layer',
        queryParams: {type: '影像数据'},
        iconCls: 'icon-menu-layer-image',
        promise: ''
      },
      {
        title: '监控数据',
        link: '/map/layer',
        queryParams: {type: '监控数据'},
        iconCls: 'icon-menu-layer-vadio',
        promise: ''
      }
    ]
  },
  {
    title: '地图操作',
    link: '/map/control',
    iconCls: 'icon-menu-control',
    promise: '',
    data: [
      {
        title: '测量工具',
        link: '/map/control',
        queryParams: {type: '测量工具'},
        iconCls: 'icon-menu-control-measure',
        promise: ''
      },
      {
        title: '标注工具',
        link: '/map/control',
        queryParams: {type: '标注工具'},
        iconCls: 'icon-menu-control-tagging',
        promise: ''
      },
      {
        title: '定位工具',
        link: '/map/control',
        queryParams: {type: '定位工具'},
        iconCls: 'icon-menu-control-location',
        promise: ''
      }
    ]
  },
  {
    title: '管线查询',
    link: '/map/pipeline',
    iconCls: 'icon-menu-pipeline',
    promise: '',
    data: [
      {
        title: '点击查询',
        link: '/map/pipeline',
        queryParams: {type: '点击查询'},
        iconCls: 'icon-menu-pipeline-click',
        promise: ''
      },
      {
        title: '管径',
        link: '/map/pipeline',
        queryParams: {type: '管径'},
        iconCls: 'icon-menu-pipeline-size',
        promise: ''
      },
      {
        title: '材质',
        link: '/map/pipeline',
        queryParams: {type: '材质'},
        iconCls: 'icon-menu-pipeline-material',
        promise: ''
      },
      {
        title: '附属物',
        link: '/map/pipeline',
        queryParams: {type: '附属物'},
        iconCls: 'icon-menu-pipeline-appendages',
        promise: ''
      },
      {
        title: '复合查询',
        link: '/map/pipeline',
        queryParams: {type: '复合查询'},
        iconCls: 'icon-menu-pipeline-combination',
        promise: ''
      },
      {
        title: '空间查询',
        link: '/map/pipeline',
        queryParams: {type: '空间查询'},
        iconCls: 'icon-menu-pipeline-space',
        promise: ''
      },
      {
        title: '维修改造信息录入',
        link: '/map/pipeline',
        queryParams: {type: '维修改造信息录入'},
        iconCls: 'icon-menu-pipeline-modify',
        promise: ''
      },
      {
        title: '管点使用状态录入',
        link: '/map/pipeline',
        queryParams: {type: '管点使用状态录入'},
        iconCls: 'icon-menu-pipeline-point',
        promise: ''
      },
      {
        title: '能源系统图录入',
        link: '/map/pipeline',
        queryParams: {type: '能源系统图录入'},
        iconCls: 'icon-menu-pipeline-power',
        promise: ''
      },
      {
        title: '巡视管理',
        link: '/map/pipeline',
        queryParams: {type: '巡视管理'},
        iconCls: 'icon-menu-pipeline-patrol',
        promise: ''
      }
    ]
  },
  {
    title: '管线统计',
    link: '/map/statistics',
    iconCls: 'icon-menu-statistics',
    promise: '',
    data: [
      {
        title: '分类统计',
        link: '/map/statistics',
        queryParams: {type: '分类统计'},
        iconCls: 'icon-menu-statistics-classify',
        promise: ''
      },
      {
        title: '分段统计',
        link: '/map/statistics',
        queryParams: {type: '分段统计'},
        iconCls: 'icon-menu-statistics-breaking',
        promise: ''
      },
      {
        title: '附属物统计',
        link: '/map/statistics',
        queryParams: {type: '附属物统计'},
        iconCls: 'icon-menu-statistics-appendages',
        promise: ''
      },
      {
        title: '长度统计',
        link: '/map/statistics',
        queryParams: {type: '长度统计'},
        iconCls: 'icon-menu-statistics-length',
        promise: ''
      },
      {
        title: '条数统计',
        link: '/map/statistics',
        queryParams: {type: '条数统计'},
        iconCls: 'icon-menu-statistics-number',
        promise: ''
      },
      {
        title: '维修改造统计',
        link: '/map/statistics',
        queryParams: {type: '维修改造统计'},
        iconCls: 'icon-menu-statistics-repair',
        promise: ''
      }
    ]
  },
  {
    title: '综合分析',
    link: '/map/analysis',
    iconCls: 'icon-menu-analysis',
    promise: '',
    data: [
      {
        title: '横断面分析',
        link: '/map/analysis',
        queryParams: {type: '横断面分析'},
        iconCls: 'icon-menu-analysis-cross',
        promise: ''
      },
      {
        title: '爆管分析',
        link: '/map/analysis',
        queryParams: {type: '爆管分析'},
        iconCls: 'icon-menu-analysis-tube',
        promise: ''
      },
      {
        title: '连通分析',
        link: '/map/analysis',
        queryParams: {type: '连通分析'},
        iconCls: 'icon-menu-analysis-connected',
        promise: ''
      },
      {
        title: '挖方分析',
        link: '/map/analysis',
        queryParams: {type: '挖方分析'},
        iconCls: 'icon-menu-analysis-excavation',
        promise: ''
      },
      {
        title: '水平净距',
        link: '/map/analysis',
        queryParams: {type: '水平净距'},
        iconCls: 'icon-menu-analysis-horizontal',
        promise: ''
      },
      {
        title: '垂直净距',
        link: '/map/analysis',
        queryParams: {type: '垂直净距'},
        iconCls: 'icon-menu-analysis-vertical',
        promise: ''
      },
      {
        title: '健康分析',
        link: '/map/analysis',
        queryParams: {type: '健康分析'},
        iconCls: 'icon-menu-analysis-healthy',
        promise: ''
      }
    ]
  },
  {
    title: '房属管理',
    link: '/map/house',
    iconCls: 'icon-menu-house',
    promise: '',
    data: [
      {
        title: '属性挂接',
        link: '/map/house',
        queryParams: {type: '属性挂接'},
        iconCls: 'icon-menu-house-attrib',
        promise: ''
      },
      {
        title: '信息查询',
        link: '/map/house',
        queryParams: {type: '信息查询'},
        iconCls: 'icon-menu-house-information',
        promise: ''
      },
      {
        title: '信息修改',
        link: '/map/house',
        queryParams: {type: '信息修改'},
        iconCls: 'icon-menu-house-modify',
        promise: ''
      }
    ]
  },
  {
    title: '能源系统',
    link: '/map/energy',
    iconCls: 'icon-menu-energy',
    promise: '',
    data: [
      {
        title: '监测计量',
        link: '/map/energy',
        queryParams: {type: '监测计量'},
        iconCls: 'icon-menu-energy-monitoring',
        promise: ''
      },
      {
        title: '能源系统图',
        link: '/map/energy',
        queryParams: {type: '能源系统图'},
        iconCls: 'icon-menu-energy-map',
        promise: ''
      }
    ]
  },
  {
    title: '打印出图',
    link: '/map/print',
    iconCls: 'icon-menu-print',
    promise: '',
    data: [
      {
        title: '专题图输出',
        link: '/map/print',
        queryParams: {type: '专题图输出'},
        iconCls: 'icon-menu-print-special',
        promise: ''
      }
    ]
  },
  {
    title: '系统管理',
    link: '/system',
    iconCls: 'icon-menu-system',
    promise: '',
    data: [
      {
        title: '机构管理',
        link: '/system',
        queryParams: {type: '机构管理'},
        iconCls: 'icon-menu-system-mechanism',
        promise: ''
      },
      {
        title: '权限管理',
        link: '/system',
        queryParams: {type: '权限管理'},
        iconCls: 'icon-menu-system-authority',
        promise: ''
      },
      {
        title: '日志管理',
        link: '/system',
        queryParams: {type: '日志管理'},
        iconCls: 'icon-menu-system-log',
        promise: ''
      }
    ]
  }
];
