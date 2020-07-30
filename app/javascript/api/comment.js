import api from './instance'

// Create a comment
const create = (productId, commentParams) => (
  api.post(Routes.api_product_comments_path(productId),  commentParams)
  .then(response => response.data)
)

// Delete comment
const destroy = (commentId) => (
  api.delete(Routes.api_comment_path(commentId))
  .then(response => response.data)
)

export default {
  create,
  destroy
}