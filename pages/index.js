import '../src/cliente/componentes/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'

const Index = () => (
  <MuiThemeProvider>
    <App showHome={true} />
  </MuiThemeProvider>
)

export default Index
