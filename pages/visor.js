import Layout from '../src/cliente/contenedor/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Lista from '../src/cliente/contenedor/Lista'
import SearchBox from '../src/cliente/contenedor/SearchBox'

const Visor = () => (
  <MuiThemeProvider>
    <Layout>
      <SearchBox />
      <Lista />
    </Layout>
  </MuiThemeProvider>
)

export default Visor
