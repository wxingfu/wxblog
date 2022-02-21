module.exports = [
    {
        text: "主页",
        link: "/",
        icon: "reco-home"
    },
    {
        text: '基础笔记',
        items: [
            {
                text: 'JavaSE',
                items: [
                    {text: 'Java基础', link: '/JavaSE/Java基础/'}
                ]
            },
            {
                text: '数据库',
                items: [
                    {text: 'MySQL基础', link: '/MySQL/MySQL基础/'}
                ]
            },
            {
                text: 'JavaWeb',
                items: [
                    {text: 'Servlet基础', link: '/JavaWeb/Servlet/Servlet基础/'},
                    {text: 'Vue基础', link: '/JavaWeb/Vue/Vue基础/'}
                ]
            }
        ]
    },
    {
        text: '工具箱',
        link: '/tools/'
    },
    {
        text: '链接',
        icon: 'reco-message',
        items: [
            {text: 'GitHub', link: 'https://github.com/wxingfu/wxblog', icon: 'reco-github'},
            {text: '掘金', link: 'https://juejin.im/', icon: 'reco-juejin'},
            {text: 'CSDN', link: 'https://blog.csdn.net/', icon: 'reco-csdn'},
            {text: '编程语言排行榜', link: 'https://www.tiobe.com/tiobe-index/'}
        ]
    },
    {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
    }
]
