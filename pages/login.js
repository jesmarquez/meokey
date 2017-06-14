import '../src/cliente/componentes/tap_events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from '../src/cliente/contenedor/App'
import LoginForm from '../src/cliente/componentes/LoginForm'

const Login = () => (
  <MuiThemeProvider>
    <App>
      <LoginForm />
    </App>
  </MuiThemeProvider>
)

export default Login
