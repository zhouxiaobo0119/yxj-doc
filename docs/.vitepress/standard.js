const commonPath = '/standard';

export default [
    {
        text: '代码规范',
        collapsible: false,
        collapsed: true,
        items: [
            { text: '介绍', link: `${commonPath}/` }, // /guide/index.md
            { text: 'JS规范', link: `${commonPath}/js` }, // /guide/index.md
            { text: 'HTML规范', link: `${commonPath}/html` }, // /guide/index.md
            { text: 'CSS规范', link: `${commonPath}/css` }, // /guide/index.md
            { text: 'VUE规范', link: `${commonPath}/vue` }, // /guide/index.md
            { text: 'TS规范', link: `${commonPath}/ts` }, // /guide/index.md
        ]
    },
]