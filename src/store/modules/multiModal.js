const state = {
  modalName: ''
}

const mutations = {
  setModal (state, name) {
    state.modalName = name
  },
  hideModal (state) {
    state.modalName = ''
  }
}

const actions = {
  showModalTypeA ({ commit }) {
    commit('setModal', 'ModalTypeA')
  },
  showModalTypeB ({ commit }) {
    commit('setModal', 'ModalTypeB')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
