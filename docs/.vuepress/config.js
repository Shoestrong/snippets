module.exports = {
    base: '/',                                      // 部署站点的基础路径
    title: '码上收集',                              // 网站的标题
    description: '代码片段，写入收集！',                      // 网站的描述
    head: [                                         // head标签
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    host: '0.0.0.0',                                // 主机
    port: 8020,                                     // 端口
    dest: 'dist',                                   // vuepress build 的输出目录
    ga: '',                                         // 谷歌统计
    serviceWorker: false,                           // 用于PWA，需https下才能开通
    locales: undefined,                             // 多语言支持
    theme: undefined,                                    // 主题
    themeConfig: {                                  // 主题配置
        logo: '/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: 'Javascript', link: '/javascript/' },
            { text: 'CSS', link: '/css/' },
        ],
        sidebar: {
            '/javascript/': [
                'verification',
                'event',
                'camelize',
                'throttle&debounce',
                'checkGlobalVar',
                'timestampFormat',
                'getUrlQuery'
            ],
            '/css/': [
                'font-family',
                'vh-center'
            ]
        }
    }                                
}