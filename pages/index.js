import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import Layout from '../src/cliente/componentes/Layout'
import Home from '../src/cliente/componentes/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

const Index = () => (
  <MuiThemeProvider>
    <div>
      <Layout>
        <Home />
      </Layout>
    </div>
  </MuiThemeProvider>
)

export default Index
