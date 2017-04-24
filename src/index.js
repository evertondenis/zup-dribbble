'use strict'

import { render } from 'react-dom'
import router from './routing'
import './scss/main.scss'

const rootElement = document.querySelector('[data-js="app"]')

render(router, rootElement)
