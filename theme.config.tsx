import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram';

const config: DocsThemeConfig = {
  logo: <img src="/wiki42trans.png" alt="Wiki42 Logo" width="40" height="40" />,
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
    key: '0.0.2-release',
    text: (
      <a href="/changelogs/v0/0.0.2" target="_blank">
        🎉 Wiki42's first hotfix is live! Read more →
      </a>
    )
  }
}

export default config
