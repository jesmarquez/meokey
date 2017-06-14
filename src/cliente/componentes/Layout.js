import React from 'react'
import AppBarMain from './AppBarMain'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>MeoKey</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <AppBarMain logged={props.logged}/>
    {props.children}
  </div>  
)

export default Layout
