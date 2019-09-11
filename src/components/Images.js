import React from 'react'
import Cat from './Cat'

class Images extends React.Component {
  render () {
    console.log('this.onClick test:', this.onClick)
    const images = this
      .props
      .cats
      .map(image => <Cat
        key={image}
        anImageOfACat={image}
      />)

    return <div>
      <button onClick={this.props.handler}>
        Add
      </button>

      {images}
    </div>
  }
}

export default Images
