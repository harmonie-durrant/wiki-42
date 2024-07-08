import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram';
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="/wiki42trans.png" alt="Wiki42 Logo" width="40" height="40" />,
  logoLink: '/',
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Wiki42 - A Wiki for 42 School',
      }
    }
    return {
      titleTemplate: 'Wiki42 - A Wiki for 42 School and its students by Harmonie',
    }
  },
  project: {
    link: 'https://github.com/harmonie-durrant/wiki-42',
  },
  chat: {
    link: 'https://instagram.com/42.wiki',
    icon: (<InstagramIcon />)
  },
  docsRepositoryBase: 'https://github.com/harmonie-durrant/wiki-42/tree/main',
  footer: {
    text: 'Wiki42 giving you info about 42 since 2024',
  },
  head: () => {
    const { frontMatter } = useConfig();
    return (
      <>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="alternate" href="http://wiki42.harmoniedurrant.com" hrefLang="en" />
        <meta
            property="og:description"
            content={frontMatter.description || 'The next site builder'}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </>
    )
  },
  search: {
    placeholder: "Search Wiki42"
  }
}

export default config
