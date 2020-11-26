import axios from 'axios'
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: 'https://localhost:44325',
  timeout: 15000
})

export default service.interceptors.response.use(response => {
  const rest = response.data
  if (rest.code !== 200) {
    Message({
      message: rest.message,
      type: 'error',
      duration: 3 * 1000
    })
  } else {
    return response.data
  }
}, error => {
  console.log('error' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 3 + 1000
  })
  return Promise.reject(error)
})
