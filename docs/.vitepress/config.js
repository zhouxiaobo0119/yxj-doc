import guide from "./guide";
import sa from "./sa";
import yxjApp from "./yxj-app";
import tp from "./tp";
import standard from "./standard";

export default {
    base: '/yxj/',

    title: '医生站前端', // 所有文档的浏览器标签title
    description: '医生站前端文档', // 会渲染成<meta>标签，SEO用

    themeConfig: {

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