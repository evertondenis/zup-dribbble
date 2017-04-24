'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({ setSmall, setLarge }) => (
  <div className='display-options'>
    <h2>Display options:</h2>
    <div className='nav-panel'>
      <a className='link' onClick={setSmall}>Small</a>
      <a className='link' onClick={setLarge}>Large</a>
    </div>
  </div>
)

Panel.propTypes = {
  setSmall: PropTypes.func.isRequired,
  setLarge: PropTypes.func.isRequired
}

export default Panel
