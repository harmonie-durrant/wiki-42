import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram';

const config: DocsThemeConfig = {
  logo: <img src="wiki42.jpg" alt="Wiki42 Logo" width="50" height="50" />,
  logoLink: '/',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Wiki42'
      }
    }
    return {
      titleTemplate: 'Wiki42'
    }
  },
  project: {
    link: 'https://github.com/harmonie-durrant/',
  },
  chat: {
    link: 'https://instagram.com/42.wiki',
    icon: (<InstagramIcon />)
  },
  docsRepositoryBase: 'https://github.com/harmonie-durrant/wiki-42/',
  footer: {
    text: 'Wiki42 giving you info about 42 since 2024',
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
    </>
  ),
  search: {
    placeholder: "Search Wiki42"
  },
  banner: {
    key: '0.0.1-release',
    text: (
      <a href="/changelogs/v0/0.0.1" target="_blank">
        🎉 Wiki42 version 0 is released! Read more →
      </a>
    )
  }
}

export default config
