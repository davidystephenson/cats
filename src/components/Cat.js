import React from 'react'

export default function Cat (props) {
  console.log('props test:', props)

  const { anImageOfACat: cat } = props

  console.log('cat test:', cat)

  const { height, id, url, width } = cat

  return <div>
    <h1>{id}</h1>

    <img src={url} alt={id} />

    <p>{width} x {height}</p>
  </div>
}
