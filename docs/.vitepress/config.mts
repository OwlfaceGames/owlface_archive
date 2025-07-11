import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/owlface_archive/',
  title: "Owlface Archive",
  description: "Public Game Dev Archive",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OwlfaceGames/owlface_archive' }
    ]
  }
})
