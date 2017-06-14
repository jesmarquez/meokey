import React from 'react'
import Layout from '../componentes/Layout'

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
      <Layout logged={this.state.logged}>
        {this.props.children}
      </Layout>
    )
  }
}

export default App
