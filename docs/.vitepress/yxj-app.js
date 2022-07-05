/*
 * @Author: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @Date: 2022-07-01 16:26:51
 * @LastEditors: zhouxiaobo zhouxiaobo@yxj.org.cn
 * @LastEditTime: 2022-07-04 14:01:39
 * @FilePath: \yxj-doc\docs\.vitepress\yxj-app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const commonPath = '/yxj-app';

export default [
    {
        text: 'YXJ-APP',
        collapsible: false,
        collapsed: false,
        items: [
            { text: 'SDK介绍', link: `${commonPath}/` }, // /guide/index.md
            { text: '方法', link: `${commonPath}/handler` }, // /guide/one.md
            { text: '事件监听', link: `${commonPath}/listener` }, // /guide/one.md
            { text: '代码解析', link: `${commonPath}/code` }, // /guide/one.md
        ]
    },
]