'use strict'

import axios from 'axios'

const BASE_URL = 'https://api.dribbble.com/v1/'
const TOKEN = '6362b8938ec2518f41f54002820e9fa5731de4a98685b2e29c94953fcd6d0c84'

class DribbbleApi {
  get (route) {
    return axios.get(BASE_URL + route, {
      headers: {
        'Authorization': 'Bearer ' + TOKEN
      }
    }).then((result) => {
      return result
    })
  }
}

export const dribbbleApi = new DribbbleApi()
