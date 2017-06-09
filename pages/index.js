import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import Layout from '../src/cliente/contenedor/Layout'
import HomePage from '../src/cliente/contenedor/HomePage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

const Index = () => (
  <MuiThemeProvider>
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  </MuiThemeProvider>
)

export default Index
