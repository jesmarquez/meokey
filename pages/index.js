import injectTapEventPlugin from 'react-tap-event-plugin'
import React from 'react'
import Layout from '../src/cliente/contenedor/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

injectTapEventPlugin()

const Index = () => (
  <MuiThemeProvider>
    <div>
      <Layout>
        <p>Comienzo!</p>
      </Layout>
    </div>
  </MuiThemeProvider>
)

export default Index
