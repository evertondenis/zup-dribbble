'use strict'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShotGrid from './components/ShotGrid/ShotGrid'
import Single from './components/Single/Single'

const router = (
  <Router>
    <div>
      <Route exact path='/' component={ShotGrid} />
      <Route path='/shot/:shotId' component={Single} />
    </div>
  </Router>
)

export default router
