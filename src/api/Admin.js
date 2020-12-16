import axios from 'axios'

export function posts (page, limit) {
  axios({
    method: 'get',
    url: '/api/blog/admin/posts?Page=' + page + '&Limit=' + limit,
    timeout: 3000
  }).then(res => {
    console.log(res)
    for (var item in res.items) {
      this.items.push(item)
    }
  })
}
