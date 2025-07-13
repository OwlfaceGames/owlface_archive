import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: "Owlface Archive",
  description: "Public Game Dev Archive",
  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Games', link: '/games' },
      { text: 'Intro', link: '/intro' },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Game Pages',
        items: [
          { text: 'Adas Alchemy Academy', link: '/ada' },
          { text: 'Disable Enemies To Reveal Enemies', link: '/disable' },
          { text: 'Medieval Dungeon Throwdown', link: '/throwdown' },
          { text: 'Save The Dwarf', link: '/dwarf' },
          { text: 'Space Miners', link: '/miners' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OwlfaceGames/owlface_archive' }
    ]
  }
})
