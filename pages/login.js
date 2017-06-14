import '../src/cliente/componentes/tap_events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'

const Login = () => (

  <MuiThemeProvider>
    <App showLogin={true} />
  </MuiThemeProvider>
)

export default Login
