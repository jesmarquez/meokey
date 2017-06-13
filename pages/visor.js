import Layout from '../src/cliente/contenedor/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Lista from '../src/cliente/contenedor/Lista'

const Visor = () => (
  <MuiThemeProvider>
    <Layout>
      <Lista />
    </Layout>
  </MuiThemeProvider>
)

export default Visor
