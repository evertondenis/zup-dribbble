'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import Panel from '../Panel/Panel'
import ShotCard from '../ShotCard/ShotCard'

const AppContent = ({ handleSearch, isFetching, shots, sizeImage, setSmall, setLarge, loadMore }) => (
  <div className='container'>
    <div className='row align-center header'>
      <h1 className='column-5'><Link to={'/'}>APP Zup Dribbble</Link></h1>
      <Search isDisabled={isFetching} handleSearch={handleSearch} />
    </div>

    {!!shots && <div className='row end'><Panel setSmall={setSmall} setLarge={setLarge} /></div>}

    {!!shots.length &&
      <ShotCard
        shots={shots}
        sizeImage={sizeImage}
      />
    }
    {isFetching && <div className='row'>Carregando...</div>}

    <a className='load-more' href='javascript:void(0)' onClick={loadMore}>Carregar mais</a>
  </div>
)

AppContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  shots: PropTypes.array.isRequired,
  sizeImage: PropTypes.string.isRequired,
  setSmall: PropTypes.func.isRequired,
  setLarge: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired
}

export default AppContent
