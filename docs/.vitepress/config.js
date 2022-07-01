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
            { text: '菜单1', link: '/menu1/', activeMatch: '/menu1/' },
            { text: '菜单2', link: '/menu2/', activeMatch: '/menu2/' },
            { text: '菜单3', link: '/menu3/', activeMatch: '/menu3/' },
        ],

        sidebar: {
            // '/guide/': guide,
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