import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram';

const config: DocsThemeConfig = {
  logo: <span>Wiki42</span>,
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
}

export default config
