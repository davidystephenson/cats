import React, { Component } from 'react'
import ImagesContainer from './components/ImagesContainer'

class App extends Component {
  state = { show: false }

  onClick = () => {
    const toggled = !this.state.show

    this.setState({ show: toggled })
  }

  render () {
    console.log('App state test:', this.state)

    return <div>
      <button onClick={this.onClick}>
        Toggle
      </button>

      {this.state.show && <ImagesContainer />}
    </div>
  }
}

export default App
