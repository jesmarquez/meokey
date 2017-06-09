import AppBarMain from './AppBarMain'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <Head>
      <title>MeoKey</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppBarMain />
    {props.children}
  </div>  
)

export default Layout
