const commonPath = '/yxj-app';

export default [
    {
        text: 'YXJ-APP',
        collapsible: true,
        collapsed: false,
        items: [
          
          // {text: 'SDK介绍', link: '/yxj-app/'},
          // {text: '代码解析', link: '/yxj-app/code'},
            // This shows `/guide/index.md` page.
            { text: 'SDK介绍', link: `${commonPath}/` }, // /guide/index.md
            { text: '代码解析', link: `${commonPath}/code` }, // /guide/one.md
        ]
    },
]