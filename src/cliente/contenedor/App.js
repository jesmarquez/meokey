import React from 'react'
import Layout from '../componentes/Layout'
import Home from '../componentes/Home'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      logged: false,
    }
  }

  render() {
    return (
      <Layout logged={this.state.logged}>
        <Home />
      </Layout>
    )
  }
}

export default App
