import React from 'react'
import request from 'superagent'
import Images from './Images'

class ImagesContainer extends React.Component {
  state = { images: [] }

  componentDidMount () {
    console.log('Images mount test')
    this.getImage()
  }

  getImage () {
    request
      .get('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        const { body } = response

        console.log('body test:', body)

        const cat = body[0]

        const images = [
          cat, ...this.state.images
        ]

        this.setState({ images })
        // this.setState({ images: images })
      })
  }

  onClick = () => {
    this.getImage()
  }

  render () {
    return <Images
      cats={this.state.images}
      handler={this.onClick}
    />
  }
}

export default ImagesContainer
