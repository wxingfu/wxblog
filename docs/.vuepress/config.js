const nav = require('./config/nav');
const sidebar = require('./config/sidebar');
const friendLink = require('./config/friendLink');
const plugins = require('./config/plugins');

module.exports = {
    title: 'wblog',
    description: '实践是检验真理的唯一标准',
    dest: './dist',
    port: '8080',
    head: [
        ["link", {
            rel: "icon",
            href: "/img/common/favicon.ico"
        }],
        ["meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1,user-scalable=no"
        }],
        ["script", {
            language: "javascript",
            type: "text/javascript",
            src: "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
        }],
        ["script", {
            language: "javascript",
            type: "text/javascript",
            src: "/js/BaiduStatistics.js"
        }]
    ],
    theme: "reco",
    themeConfig: {
        nav,
        sidebar,
        subSidebar: "auto",
        type: "blog",
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            }
        },
        friendLink,
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        author: "weixf",
        authorAvatar: "/img/common/avatar.png",
        record: "www",
        startYear: "2022",
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        docsBranch: "main",
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins,
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    }
}
