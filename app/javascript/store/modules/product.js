import api from '../../api'

const defaultState = {
  comments: []
}

export const actions = {
  fillComments({ commit }, comments) {
    commit('fillComments', comments)
  },
  cancelComment({ commit }, commentId) {
    api.comment.destroy(commentId)
      .then(() => {
        commit('commentCancelled', commentId)
      })
  },
  addComment({ commit }, { productId, commentParams }) {
    api.comment.create(productId, commentParams)
      .then((comment) => {
        commit('commentAdded', comment)
    })
  }
}

export const mutations = {
  fillComments(state, comments) {
    state.comments = comments
  },
  commentCancelled(state, commentId) {
    state.comments = state.comments.filter(comment => commentId != comment.id)
  },
  commentAdded(state, comment) {
    state.comments.push(comment)
  }
}

export default {
  state: defaultState,
  actions,
  mutations
}
