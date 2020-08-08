module.exports = {
  'zh': Object.assign({}, {
    '/views/java/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '',
          'installUse',
          'blog',
          'frontMatter'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          'timeline',
          'valine',
          'password',
          'configJs',
          'home',
          'notfound',
          'mode',
          'local',
          'codeTheme'
        ]
      },
      {
        title: '默认主题配置',
        collapsable: false,
        children: [
          'abstract',
          'syntax',
          'customStyleAndScript',
          'sidebar'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'updatetoone',
          'recommend'
        ]
      }
    ],
    '/views/database/': [
      {
        title: '基础',
        collapsable: false,
        children: [
          '',
          'installUse',
          'category',
          'tag',
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          'timeline',
          'valine',
          'password',
          'configJs',
          'home'
        ]
      },
      {
        title: '其他',
        collapsable: false,
        children: [
          'abstract',
        ]
      }
    ],
    'views/tools/': [],
    'views/ui/': [],
    'views/vue/': []
  })
}