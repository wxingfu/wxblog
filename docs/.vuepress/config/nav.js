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
        text: '工具箱',
        items: [
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩', link: 'https://tinypng.com/'},
                    {text: 'JSON工具', link: 'https://www.bejson.com/'}
                ]
            },
            {
                text: "在线画图工具",
                item: [
                    {text: "在线画图工具ProcessOn", link: "https://www.processon.com/"},
                    {text: "在线画图工具Draw.io", link: "https://app.diagrams.net/"},
                    {text: "在线思维导图工具MindLine", link: "http://www.mindline.cn/webapp"},
                    {text: "PlantUML在线编辑器", link: "http://haha98k.com/"},
                ]
            },
            {
                text: "在线编解码工具",
                item: [
                    {text: "BASE64编解码工具", link: "https://base64.supfree.net/"},
                    {text: "MD5编码工具", link: "https://www.zxgj.cn/g/md5"},
                    {text: "AES/DES加解密", link: "http://www.fly63.com/tool/cipher/"},
                    {text: "JWT解码工具", link: "http://jwt.calebb.net/"},
                    {text: "ASCII编解码工具", link: "https://www.matools.com/code-convert-ascii"},
                    {text: "Unicode编解码工具", link: "https://www.zxgj.cn/g/unicode"},
                    {text: "UTF-8编解码工具", link: "https://www.zxgj.cn/g/utf8"},
                    {text: "字符串编解码工具", link: "https://www.zxgj.cn/g/enstring"},
                    {text: "URL编解码工具", link: "http://tool.chinaz.com/tools/urlencode.aspx?jdfwkey=lbixz1"}
                ]
            },
            {
                text: "在线转换工具",
                item: [
                    {text: "在线ASCII码对照表", link: "http://www.fly63.com/tool/ascii/"},
                    {text: "通用进制转换工具", link: "https://www.zxgj.cn/g/jinzhi"},
                    {text: "在线浮点数十进制转换", link: "http://www.binaryconvert.com/"},
                    {text: "RGB颜色转换", link: "https://www.zxgj.cn/g/yansezhi"},
                    {text: "时间戳转换工具", link: "https://www.zxgj.cn/g/unix"},
                    {text: "计量单位换算工具", link: "http://www.fly63.com/tool/unitable/"},
                    {text: "在线JSON解析", link: "http://www.json.cn/"},
                    {text: "在线JS代码格式化工具", link: "https://prettier.io/playground/"},
                    {text: "SQL压缩/格式化工具", link: "https://www.zxgj.cn/g/sqlformat"},
                    {text: "JSON和XML在线转换", link: "https://www.zxgj.cn/g/jsonxml"},
                    {text: "JSON/YAML在线转换", link: "http://www.fly63.com/tool/jsonyaml/"},
                    {text: "人民币大小写转换工具", link: "http://www.fly63.com/tool/renmingbi/"}
                ]
            },
            {
                text: "正则表达式工具",
                item: [
                    {text: "正则表达式调试工具", link: "https://regexr.com/"},
                    {text: "正则表达式可视化工具", link: "https://jex.im/regulex/"}
                ]
            },
            {
                text: "网络工具",
                item: [
                    {text: "IP地址归属地查询", link: "https://www.ip138.com/"},
                    {text: "IP地址查询", link: "https://www.ipip.net/ip.html"},
                    {text: "HTTP在线接口测试工具", link: "http://www.fly63.com/php/http/"}
                ]
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                ]
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'}
                ]
            }
        ]
    },
    {
        text: "Github",
        items: [
            {text: "GitHub", link: "https://github.com/wxingfu/wxblog"}
        ]
    }
]
