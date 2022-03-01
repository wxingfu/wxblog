module.exports = [
    ["@vuepress/last-updated", {
        transformer: (timestamp, lang) => {
            const moment = require('moment');
            moment.locale(lang)
            return moment(timestamp).format('YYYY/MM/DD, HH:mm:ss');
        }
    }],
    ["vuepress-plugin-nuggets-style-copy", {
        copyText: "复制代码",
        tip: {
            content: "Copy success!"
        }
    }],
    ["vuepress-plugin-reading-progress"],
    ["vuepress-plugin-dynamic-title", {
        showIcon: "/img/common/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/img/common/favicon.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
    }],
    ["cursor-effects", {
        size: 2,
        shape: "star", // ['star' | 'circle']
        zIndex: 999999999
    }],
    ["@vuepress-reco/vuepress-plugin-kan-ban-niang", {
        theme: ["koharu"], // ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
        clean: true,
        message: {
            welcome: '欢迎来到 这里',
            home: '心里的花，我想要带你回家。',
            theme: '好吧，希望你能喜欢我的其他小伙伴。',
            close: '你知道我喜欢吃什么吗？痴痴地望着你。'
        }
    }],
    // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    //   width: '260px',
    //   title: '公告',
    //   body: [
    //     {
    //       type: 'title',
    //       content: '新增加一个插件来玩玩👻',
    //       style: 'text-aligin: center;'
    //     },
    //     {
    //       type: 'image',
    //       src: '/img/common/avatar.png'
    //     },
    //     {
    //       type: 'text',
    //       content: '可以有简单的文本'
    //     }
    //   ],
    //   // footer: [
    //   //   {
    //   //     type: 'button',
    //   //     text: '打赏',
    //   //     link: '/blogs/blog/Donate.md'
    //   //   }
    //   // ]
    // }]
]
