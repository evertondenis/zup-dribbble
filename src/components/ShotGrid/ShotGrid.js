'use strict'

import React, { Component } from 'react'
import AppContent from '../AppContent/AppContent'
import { dribbbleApi } from '../../services/DribbbleApi'

class ShotGrid extends Component {
  constructor () {
    super()
    this.state = {
      shots: [],
      sizeImage: '',
      isFetching: true
    }

    this.handleSearch = this.handleSearch.bind(this)

    dribbbleApi.get(`shots/`).then((result) => {
      this.setState({
        shots: result.data,
        sizeImage: 'teaser',
        isFetching: false
      })
    })
  }

  updateShotsImages (size) {
    return (e) => {
      this.setState({
        sizeImage: size
      })
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      if (value === '') {
        dribbbleApi.get(`shots/`).then((result) => {
          this.setState({
            shots: result.data,
            sizeImage: 'teaser',
            isFetching: false
          })
        })
      }

      this.setState({
        shots: this.state.shots.filter((shot) => {
          const regex = new RegExp(value, 'i')
          return regex.test(shot.title)
        })
      })
    }
  }

  render () {
    return <AppContent
      handleSearch={this.handleSearch}
      isFetching={this.state.isFetching}
      shots={this.state.shots}
      sizeImage={this.state.sizeImage}
      setSmall={this.updateShotsImages('teaser')}
      setLarge={this.updateShotsImages('normal')}
    />
  }
}

export default ShotGrid
