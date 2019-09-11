import React from 'react'
import request from 'superagent'
import Images from './Images'

class ImagesContainer extends React.Component {
  state = { images: [] }

  componentDidMount () {
    this.getImage()
  }

  getImage () {
    request
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        const { body } = response

        const cat = body[0]

        const images = [
          cat, ...this.state.images
        ]

        this.setState({ images })
        // this.setState({ images: images })
      })
  }

  onClick = (message) => {
    this.getImage()
  }

  render () {
    return <Images
      cats={this.state.images}
      handler={() => this.onClick('hello')}
    />
  }
}

export default ImagesContainer
