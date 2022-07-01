/*
 * @Author: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @Date: 2022-07-01 15:02:45
 * @LastEditors: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @LastEditTime: 2022-07-01 15:33:02
 * @FilePath: \vitepress-tmpl-master\docs\.vitepress\standard.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commonPath = '/standard';

export default [
    {
        text: '代码规范',
        collapsible: false,
        collapsed: true,
        items: [
          
          // {text: '介绍', link: '/standard/'},
          // {text: 'JS规范', link: '/standard/js'},
          // {text: 'HTML规范', link: '/standard/html'},
          // {text: 'CSS规范', link: '/standard/css'},
          // {text: 'VUE规范', link: '/standard/vue'},
          // {text: 'TS规范', link: '/standard/ts'},
            // This shows `/guide/index.md` page.
            { text: '介绍', link: `${commonPath}/` }, // /guide/index.md
            { text: 'JS规范', link: `${commonPath}/js` }, // /guide/index.md
            { text: 'HTML规范', link: `${commonPath}/html` }, // /guide/index.md
            { text: 'CSS规范', link: `${commonPath}/css` }, // /guide/index.md
            { text: 'VUE规范', link: `${commonPath}/vue` }, // /guide/index.md
            { text: 'TS规范', link: `${commonPath}/ts` }, // /guide/index.md
        ]
    },
]