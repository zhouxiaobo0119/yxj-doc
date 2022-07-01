const commonPath = '/sa';

export default [
    {
        text: '埋点 SDK',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'SA 介绍', link: `${commonPath}/` }, // /guide/index.md
            { text: 'SDK介绍', link: `${commonPath}/sdk` }, // /guide/index.md
            { text: '数据处理（后端服务）', link: `${commonPath}/server` }, // /guide/one.md
        ]
    }
]