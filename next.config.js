const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  daisyui: {
    themes: ["dark"],
  },
})

module.exports = withNextra()
