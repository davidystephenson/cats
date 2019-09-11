import React from 'react'
import request from 'superagent'
import Cat from './Cat'

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
    console.log('\nImages render test\n')

    const images = this
      .state
      .images
      .map(image => <Cat
        key={image}
        anImageOfACat={image}
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
