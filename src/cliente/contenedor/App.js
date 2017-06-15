import React from 'react'
import Layout from '../componentes/Layout'
import Home from '../componentes/Home'
import LoginForm from '../componentes/LoginForm'
import Lista from '../componentes/Lista'
import SearchBox from '../componentes/SearchBox'
import Router from 'next/router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: this.props.logged,
    }

    this.processLogin = this.processLogin.bind(this);
  }

  processLogin(event){
    // prevent default action. in this case, action is the form submission event
    event.preventDefault()

    this.setState({ logged: true })
    console.log('login sucess!')
    const url = {
      pathname: '/visor',
      query: {logged: true}
    }

    Router.push(url)
  }

  render() {
    return (
      <Layout logged={this.state.logged}>
        {this.props.showHome && <Home />}
        {this.props.showLogin && <LoginForm onSubmit={this.processLogin}/>}
        {this.props.showVisor && <SearchBox />}
        {this.props.showVisor && <Lista />}
      </Layout>
    )
  }
}

export default App
