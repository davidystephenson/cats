import React, { Component } from 'react'
import request from 'superagent'

class App extends Component {
  state = { image: '' }

  componentDidMount () {
    this.getImage()
  }

  getImage () {
    request
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        const { body } = response

        console.log('body test:', body)

        const cat = body[0]

        console.log('cat test:', cat)

        const { url } = cat

        console.log('url test:', url)

        this.setState({ image: url })
      })
  }

  render () {
    return <div>
      <img src={this.state.image} />
    </div>
  }
}

export default App
