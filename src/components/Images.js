import React from 'react'
import request from 'superagent'

class Images extends React.Component {
  state = { image: '' }

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

        console.log('cat test:', cat)

        const { url } = cat

        console.log('url test:', url)

        this.setState({ image: url })
      })
  }

  render () {
    console.log('Images render test')

    return <div>
      <img src={this.state.image} alt='cat' />
    </div>
  }
}

export default Images
