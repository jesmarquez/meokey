import Layout from '../src/cliente/componentes/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Lista from '../src/cliente/componentes/Lista'
import SearchBox from '../src/cliente/componentes/SearchBox'

const Visor = () => (
  <MuiThemeProvider>
    <Layout>
      <SearchBox />
      <Lista />
    </Layout>
  </MuiThemeProvider>
)

export default Visor
