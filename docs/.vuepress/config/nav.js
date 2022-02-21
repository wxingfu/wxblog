module.exports = [
    {
        text: "主页",
        link: "/",
        icon: "reco-home"
    },
    {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
    },
    {
        text: '懵逼指南', link: '/guide/'
    },
    {
        text: '面试宝典', link: '/baodian/',
        items: [
            {text: '初级开发篇', link: '/baodian/zero/'},
            {text: '中高进阶篇', link: '/baodian/high/'},
        ]
    },
    {
        text: '工具箱', link: '/tools/'
    },
    {
        text: "链接",
        icon: "reco-message",
        items: [
            {text: "GitHub", link: "https://github.com/wxingfu/wxblog", icon: "reco-github"},
            {text: "掘金", link: "https://juejin.im/", icon: "reco-juejin"},
            {text: "CSDN", link: "https://blog.csdn.net/", icon: "reco-csdn"},
            {text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/",}
        ]
    }
]
