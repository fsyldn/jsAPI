/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = [
  {
    text: 'overview',
    items: [
      {
        text: 'front',
        link: '/docs/document/overview/front'
      }
    ]
  }
]