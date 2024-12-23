/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'overview',
    items: [
      {
        text: 'front',
        link: '/document/overview/front'
      },
      {
        text: 'update-log',
        link: '/document/overview/update-log'
      },
      {
        text: '准备工作',
        link: '/document/overview/ready'
      }
    ]
  },
  {
    text: '快速上手',
    link: '/document/overview/start'
  },
  // interface
  {
    text: 'interface',
    items: [{
      text: 'system interface',
      items: [{
        text: '实例化',
        link: '/document/interface/system/instance'
      },{
        text: '设置服务器',
        link: '/document/interface/system/context'
      },{
        text: 'login',
        link: '/document/interface/system/login'
      }]
    }]
  },
  {
    text: 'state-code',
    link: '/document/other/state-code'
  }
]