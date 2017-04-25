'use strict'

import React, { Component } from 'react'
import AppContent from '../AppContent/AppContent'
import { dribbbleApi } from '../../services/DribbbleApi'

class ShotGrid extends Component {
  constructor () {
    super()
    this.state = {
      shots: [],
      sizeImage: 'teaser',
      isFetching: true,
      page: 1
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount () {
    this.updateShots()
  }

  updateShots () {
    dribbbleApi.get(`shots/?page${this.state.page}`).then((result) => {
      let data = this.state.shots

      this.setState({
        shots: data.concat(result.data),
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

  loadMore () {
    this.setState({
      isFetching: true,
      page: ++this.state.page
    })

    this.updateShots()
  }

  render () {
    return <AppContent
      handleSearch={this.handleSearch}
      isFetching={this.state.isFetching}
      shots={this.state.shots}
      sizeImage={this.state.sizeImage}
      setSmall={this.updateShotsImages('teaser')}
      setLarge={this.updateShotsImages('normal')}
      loadMore={this.loadMore}
    />
  }
}

export default ShotGrid
