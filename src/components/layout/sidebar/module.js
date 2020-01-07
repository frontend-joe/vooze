const state = {
  sidebar: {
    isOpen: false
  }
};

const getters = {
  sidebar: state => state.sidebar
};

const actions = {
  async toggleSidebarOpen({ commit }, isOpen) {
    //console.log("toggleSidebarOpen", isOpen);
    commit("setSidebarOpen", isOpen);
  }
};

const mutations = {
  setSidebarOpen: (state, isOpen) =>
    (state.sidebar = { ...state.sidebar, isOpen: isOpen })
};

export default {
  state,
  getters,
  actions,
  mutations
};
