import axios from 'axios'
const admin = axios.create({
  baseURL: 'https://192.168.1.120:8081'
})

var addToken = function (token) {
  admin.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

var removeToken = function () {
}

var GetPostsForAdmin = function (page, limit) {
  return admin({
    method: 'get',
    url: '/blog/admin/posts',
    timeout: 3000,
    params: {
      Page: page,
      Limit: limit
    }
  })
}

var GetPostById = function (id) {
  return admin({
    method: 'get',
    url: '/blog/admin/post',
    params: {
      id: id
    },
    timeout: 3000
  })
}

var InsertPost = function (id, data) {
  return admin({
    method: 'post',
    url: '/blog/post',
    params: {
      id: id
    },
    data: {
      title: data.title,
      author: data.author,
      url: data.url,
      html: data.html,
      markdown: data.markdown,
      categoryId: data.categoryId,
      creationTime: data.creationTime,
      tags: data.tags
    }
  })
}

var EditPost = function (id, data) {
  return admin({
    method: 'put',
    url: '/blog/post',
    params: {
      id: id
    },
    data: {
      title: data.title,
      author: data.author,
      url: data.url,
      html: data.html,
      markdown: data.markdown,
      categoryId: data.categoryId,
      creationTime: data.creationTime,
      tags: data.tags
    }
  })
}

var DeletePost = function (id) {
  return admin({
    method: 'delete',
    url: '/blog/post',
    params: {
      id: id
    }
  })
}

var GetCategoriesForAdmin = function () {
  return admin({
    method: 'get',
    url: '/blog/admin/categories'
  })
}

var InsertCategory = function (category) {
  return admin({
    method: 'post',
    url: '/blog/category',
    data: {
      categoryName: category.categoryName,
      displayName: category.displayName
    }
  })
}

var EditCategory = function (category) {
  return admin({
    method: 'put',
    url: '/blog/category',
    params: {
      id: category.id
    },
    data: {
      categoryName: category.categoryName,
      displayName: category.displayName
    }
  })
}

var DeleteCategory = function (id) {
  return admin({
    url: '/blog/category',
    method: 'delete',
    params: {
      id: id
    }
  })
}

var GetTagsForAdmin = function () {
  return admin({
    method: 'get',
    url: '/blog/admin/tags',
    timeout: 3000
  })
}

var EditTag = function (tag) {
  return admin({
    method: 'put',
    url: '/blog/tag',
    params: {
      id: tag.id
    },
    data: {
      tagName: tag.tagName,
      displayName: tag.displayName
    }
  })
}

var InsertTag = function (tag) {
  return admin({
    method: 'post',
    url: '/blog/tag',
    data: {
      tagName: tag.tagName,
      displayName: tag.displayName
    }
  })
}

var DeleteTagById = function (id) {
  return admin({
    url: '/blog/tag?id=' + id,
    method: 'delete'
  })
}

var GetFriendLinksForAdmin = function () {
  return admin({
    method: 'get',
    url: '/blog/admin/friendlinks',
    timeout: 3000
  })
}

var InsertFriendLink = function (friendlink) {
  return admin({
    method: 'post',
    url: '/blog/friendlink',
    data: {
      title: friendlink.title,
      linkUrl: friendlink.linkUrl
    }
  })
}

var EditFriendLink = function (friendlink) {
  return admin({
    method: 'put',
    url: '/blog/friendlink',
    params: {
      id: friendlink.id
    },
    data: {
      title: friendlink.title,
      linkUrl: friendlink.linkUrl
    }
  })
}

var DeleteFriendLink = function (id) {
  return admin({
    url: '/blog/friendlink',
    method: 'delete',
    params: {
      id: id
    }
  })
}

export {
  addToken,
  removeToken,
  GetPostsForAdmin,
  GetPostById,
  InsertPost,
  EditPost,
  DeletePost,
  GetCategoriesForAdmin,
  InsertCategory,
  EditCategory,
  DeleteCategory,
  GetTagsForAdmin,
  EditTag,
  InsertTag,
  DeleteTagById,
  GetFriendLinksForAdmin,
  InsertFriendLink,
  EditFriendLink,
  DeleteFriendLink
}
