module.exports = {
  'zh': [
    {
      text: '文档',
      icon: 'reco-api',
      items: [
        {
          text: 'Java', items: [
            { text: '基础知识', link: '/views/java/basic/' },
            { text: 'Spring5.x', link: '/views/java/spring5/' },
            { text: 'SpringBoot', link: '/views/java/SpringBoot/' },
            { text: 'SpringCloud', link: '/views/java/SpringCloud/' },
            { text: '中间件', link: '/views/java/middleware/' }
          ],
        },
        {
          text: '数据库', items: [
            { text: 'MySQL', link: '/views/database/mysql/' },
            { text: 'Redis', link: '/views/database/redis/' },
            { text: 'SQLServer', link: '/views / database/sqlserver/' }
          ]
        },
        {
          text: 'Vue', items: [
            {
              text: '基础知识', link: '/views/vue/basic/'
            },
            {
              text: 'Vue-router', link: '/views/vue/vue-router/'
            },
            {
              text: 'Vuex', link: '/views/vue/vuex/'
            },
            {
              text: 'axios', link: '/views/vue/axios/'
            }
          ]
        },
        {
          text: 'UI组件库', items: [
            {
              text: 'ElementUI', link: '/views/ui/elementui/'
            },
            {
              text: 'AntDesign', link: '/views/ui/antdesign/'
            }
          ]
        },
        {
          text: 'Linux', items: [
            { text: 'LNMP', link: '/views/linux/lnmp/' },
            { text: 'Docker', link: '/views/linux/docker/' }
          ]
        },
        {
          text: '工具', items: [
            { text: 'IDEA', link: '/views/tools/idea' },
            { text: 'VSCode', link: '/views/tools/vscode' },
            {
              text: 'Git', link: '/views/tools/git/'
            },
            {
              text: 'Jenkins', link: '/views/tools/jenkins/'
            }
          ]
        },
      ]
    },
    { text: '时间轴', link: '/categories/blog/', icon: 'reco-blog' },
    { text: '案例', link: '/views/other/theme-example.html', icon: 'reco-category' },
    { text: '订阅', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss' },
    { text: '留言板', link: '/views/other/messageBoard.html', icon: 'reco-suggestion' },
    { text: 'GitHub', link: 'https://github.com/lengyue1024', icon: 'reco-github' }
  ]
}
