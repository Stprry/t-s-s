import Head from 'next/head'
import React from 'react'

export default function Header() {
  return (
    <Head>
      <title>The Software Strongman</title>
      <meta property="og:title" content="Page title" key="title" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
