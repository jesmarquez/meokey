import '../src/cliente/componentes/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'
import Home from '../src/cliente/componentes/Home'

const Index = () => (
  <MuiThemeProvider>
    <App >
      <Home />
    </App>
  </MuiThemeProvider>
)

export default Index
