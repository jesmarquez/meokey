import '../src/cliente/componentes/tap_events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'
import Lista from '../src/cliente/componentes/Lista'
import SearchBox from '../src/cliente/componentes/SearchBox'

const Visor = () => (
  <MuiThemeProvider>
  	<App>
      <SearchBox />
      <Lista />
    </App>
  </MuiThemeProvider>
)

export default Visor
