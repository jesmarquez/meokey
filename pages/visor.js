import '../src/cliente/componentes/tap_events'
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'

class Visor extends React.Component {
  static async getInitialProps ({ query }) {
    
    console.log(query)
    
    return { query }
  }

  render() {
    return (
      <MuiThemeProvider>
        <App showVisor={true} logged={this.props.query} />
      </MuiThemeProvider>
    )
  }
}

export default Visor
