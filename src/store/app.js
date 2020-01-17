const state = {
  app: {
    activeDropdown: undefined
  }
};

const getters = {
  app: state => state.app
};

const actions = {
  toggleActiveDropdown({ commit }, dropdown) {
    console.log("toggleActiveDropdown", dropdown);
    commit("setAppDropdown", dropdown);
  }
};

const mutations = {
  setAppDropdown: (state, dropdown) => (state.app.activeDropdown = dropdown)
};

export default {
  state,
  getters,
  actions,
  mutations
};
