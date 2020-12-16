import axios from 'axios'

const service = axios.create({
  baseURL: 'https://192.168.1.120:8081'
})

var GetPosts = function (page, limit) {
  return service({
    method: 'get',
    url: '/blog/posts?Page=' + page + '&Limit=' + limit,
    timeout: 3000
  })
}

var GetPostByUrl = function (url) {
  return service({
    method: 'get',
    url: '/blog/post?url=' + url,
    timeout: 3000
  })
}

var GetCategories = function () {
  return service({
    method: 'get',
    url: '/blog/categories',
    timeout: 3000
  })
}

var GetPostsByCategoryName = function (name) {
  return service({
    method: 'get',
    url: '/blog/posts/category?name=' + name,
    timeout: 3000
  })
}

var GetTags = function () {
  return service({
    method: 'get',
    url: '/blog/tags',
    timeout: 3000
  })
}

var GetPostsByTagName = function (name) {
  return service({
    method: 'get',
    url: '/blog/posts/tag?name=' + name,
    timeout: 3000
  })
}

var GetFriendLinks = function () {
  return service({
    method: 'get',
    url: '/blog/friendlinks',
    timeout: 3000
  })
}

export {
  GetPosts,
  GetPostByUrl,
  GetCategories,
  GetPostsByCategoryName,
  GetTags,
  GetPostsByTagName,
  GetFriendLinks
}
