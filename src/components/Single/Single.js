'use strict'

import React, { Component } from 'react'
import Shot from '../Shot/Shot'
import { dribbbleApi } from '../../services/DribbbleApi'

class Single extends Component {
  constructor () {
    super()
    this.state = {
      shots: {},
      images: {},
      tags: []
    }
  }

  componentDidMount () {
    const shotId = this.props.match.params.shotId

    dribbbleApi.get(`shots/${shotId}/`).then((result) => {
      this.setState({
        shots: result.data,
        images: result.data.images,
        tags: result.data.tags
      })
    })
  }

  render () {
    return <Shot
      shots={this.state.shots}
      images={this.state.images}
      tags={this.state.tags}
    />
  }
}

export default Single
