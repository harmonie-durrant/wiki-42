const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  daisyui: {
    themes: ["light", "dark"],
  },
})

module.exports = withNextra()
