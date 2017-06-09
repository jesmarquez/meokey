import Layout from '../src/cliente/contenedor/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from '../src/cliente/contenedor/LoginForm'

const Login = () => (
  <MuiThemeProvider>
    <div>
      <Layout>
        <LoginForm />
      </Layout>
    </div>
  </MuiThemeProvider>
)

export default Login
