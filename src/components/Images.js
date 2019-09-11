import React from 'react'
import request from 'superagent'

class Images extends React.Component {
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

        const cat = body[0]

        const { url } = cat

        const images = [
          ...this.state.images, url
        ]

        this.setState({ images })
      })
  }

  render () {
    console.log('\nImages render test\n')

    const images = this
      .state
      .images
      .map(image => <img
        key={image}
        src={image}
        alt='cat'
      />)

    return <div>
      {images}
    </div>
  }
}

export default Images
