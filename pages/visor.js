import '../src/cliente/componentes/tap_events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'

const Visor = () => (
  <MuiThemeProvider>
  	<App showVisor={true} />
  </MuiThemeProvider>
)

export default Visor
