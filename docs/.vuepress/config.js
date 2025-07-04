module.exports = {
    base: "/blogs/", // 和仓库名称保持一致
    title: "小秦的博客",
    description: "小秦的博客",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    locales: {
        "/": {
            lang: "zh-CN",
        }
    },
}
