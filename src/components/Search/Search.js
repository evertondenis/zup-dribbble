'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='column-5 search text-right'>
    <input
      type='search' placeholder='Search' disabled={isDisabled} onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
