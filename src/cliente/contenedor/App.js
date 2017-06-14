import React from 'react'
import Layout from '../componentes/Layout'
import Home from '../componentes/Home'
import LoginForm from '../componentes/LoginForm'
import Lista from '../componentes/Lista'
import SearchBox from '../componentes/SearchBox'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: false,
    }
  }

  processLogin(event){
    this.setState({ logged: true })
  }

  render() {
    return (
      <Layout 
        logged={this.state.logged}
        onSubmit={this.processLogin}
      >
        {this.props.showHome && <Home />}
        {this.props.showLogin && <LoginForm />}
        {this.props.showVisor && <SearchBox />}
        {this.props.showVisor && <Lista />}
      </Layout>
    )
  }
}

export default App
