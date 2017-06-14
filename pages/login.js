import Layout from '../src/cliente/componentes/Layout'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm from '../src/cliente/componentes/LoginForm'

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
