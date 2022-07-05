import guide from "./guide";
import sa from "./sa";
import yxjApp from "./yxj-app";
import tp from "./tp";
import standard from "./standard";

export default {
  appearance: false,// 是否展示护眼模式开关
  ignoreDeadLinks: true, // 当设置为 时true，VitePress 不会因为死链接而导致构建失败。
  lastUpdated: true, //使用 git commit 获取时间戳。此选项启用默认主题以显示页面的最后更新时间。themeConfig.lastUpdatedText您可以通过选项自定义文本。
  base: '/yxj/',

  title: '医生站前端', // 所有文档的浏览器标签title
  description: '医生站前端文档', // 会渲染成<meta>标签，SEO用

  docFooter: {//文档页脚
    prev: '上一页',
    next: '下一页'
  },
  themeConfig: {
    lastUpdatedText: '更新时间 ',
    docFooter: {//文档页脚
      prev: '上一页',
      next: '下一页'
    },
    // algolia: {
    //   apiKey: 'your_api_key',
    //   indexName: 'index_name'
    // },
    siteTitle: '医生站前端文档',
    logo: '/logo.png',


    nav: [
        { text: '开始', link: '/guide/', activeMatch: '/guide/' },
    ],

    sidebar: {
        '/guide/': guide,
        '/sa/': sa,
        '/yxj-app/': yxjApp,
        '/tp/': tp,
        '/standard/': standard,
    },


    socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        { icon: 'twitter', link: '...' },
        { icon: 'discord', link: '...' }
    ],


    footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present Xiaobo Zhou'
    },
  }
}