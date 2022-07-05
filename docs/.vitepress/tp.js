const commonPath = '/tp';

export default [
    {
        text: 'VUE3框架',
        collapsible: true,
        collapsed: false,
        items: [
            { text: '框架介绍', link: `${commonPath}/` }, // /guide/index.md
            // { text: '业务简述', link: `${commonPath}/sketch` }, // /guide/index.md
            { text: '业务代码', link: `${commonPath}/business` }, // /guide/index.md
            { text: 'app本地调试', link: `${commonPath}/appdev` }, // /guide/index.md
            { text: 'vue3语法', link: `${commonPath}/vue3` }, // /guide/one.md
            { text: 'vite框架介绍', link: `${commonPath}/vite` }, // /guide/one.md
        ]
    },
]