import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://192.168.1.120:8081'
})

var geturl = function () {
  return instance({
    method: 'get',
    url: '/auth/url',
    timeout: 3000
  })
}

var getaccesstoken = function (code) {
  return instance({
    method: 'get',
    url: '/auth/access_token?code=' + code,
    timeout: 10000
  })
}

var gettoken = function (accesstoken) {
  return instance({
    method: 'get',
    url: '/auth/token?access_token=' + accesstoken,
    timeout: 10000
  })
}

export {
  geturl,
  getaccesstoken,
  gettoken
}
