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
          url, ...this.state.images
        ]

        this.setState({ images })
        // this.setState({ images: images })
      })
  }

  onClick = () => {
    this.getImage()
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
      <button onClick={this.onClick}>
        Add
      </button>

      {images}
    </div>
  }
}

export default Images
