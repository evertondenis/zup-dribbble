'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ShotCard = ({ shots, sizeImage }) => (
  <div className='row'>
    {shots.map((shot, index) => (
      <div className='shot' key={index}>
        <Link to={'/shot/' + shot.id}>
          <span>{shot.title}</span>
          <figure>
            <img className='shot-image' src={shot.images[sizeImage]} alt={shot.title} />
          </figure>
        </Link>
      </div>
    ))}
  </div>
)

ShotCard.propTypes = {
  shots: PropTypes.array.isRequired,
  sizeImage: PropTypes.string.isRequired
}

export default ShotCard
