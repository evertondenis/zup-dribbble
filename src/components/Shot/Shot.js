'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Shot = ({ shots, images, tags }) => (
  <div className='container single'>
    <div className='row start'>
      <Link to={'/'} className='go-back'>
        <span>Voltar</span>
      </Link>
    </div>
    <div className='row-top'>
      <div className='column'>
        <div className='shot'>
          <h1>{shots.title}</h1>
          <figure>
            <img className='shot-image' src={images.hidpi} alt={shots.title} />
          </figure>
        </div>
      </div>
      <div className='column'>
        <div className='descriptions'>
          <p>Likes: <span>{shots.likes_count} likes</span></p>
          <p>Buckets: <span>{shots.buckets_count} buckets</span></p>
          <p>Likes: <span>{shots.likes_count} likes</span></p>
          <p>Tags</p>
          <div className='tags'>{tags.map((tag, index) => <span key={index}>{tag}</span>)}</div>
        </div>
      </div>
    </div>
  </div>
)

Shot.propTypes = {
  shots: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
  tags: PropTypes.array.isRequired
}

export default Shot
