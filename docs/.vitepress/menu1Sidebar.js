const commonPath = '/menu1';

export default [
    {
        text: 'HTML CSS',
        collapsible: true,
        collapsed: false,
        items: [
            // This shows `/guide/index.md` page.
            { text: 'HTML', link: `${commonPath}/html.md` }, // /guide/index.md
            { text: 'CSS', link: `${commonPath}/css.md` }, // /guide/one.md
        ]
    },
]