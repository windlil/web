import menu1Sidebar from "./menu1Sidebar";

export default {
    base: '/vitepress-template/',

    title: '笔记', // 所有文档的浏览器标签title

    themeConfig: {

        siteTitle: '笔记',
        nav: [
            { text: '开始', link: '/menu1/html', activeMatch: '/menu1/' },
        ],

        sidebar: {
            '/menu1/': menu1Sidebar,
        },



        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present feiye'
        },
    }
}