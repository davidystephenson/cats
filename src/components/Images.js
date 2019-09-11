import React from 'react'
import Cat from './Cat'

class Images extends React.Component {
  render () {
    const images = this
      .props
      .cats
      .map(image => {
        return <Cat
          key={image.id}
          anImageOfACat={image}
        />
      })

    return <div>
      <button onClick={this.props.handler}>
        Add
      </button>

      {images}
    </div>
  }
}

export default Images
