import React, { Component } from 'react'
import Images from './components/Images'

class App extends Component {
  state = { show: false }

  render () {
    console.log('App state test:', this.state)

    return <div>
      <button onClick={
        () => this.setState({ show: true })
      }>
        Show
      </button>

      {this.state.show && <Images />}
    </div>
  }
}

export default App
