const state = {
  sidebar: {
    isOpen: false,
    isCollapsed: false,
    isHovered: false
  }
};

const getters = {
  sidebar: state => state.sidebar
};

const actions = {
  async toggleSidebarOpen({ commit }, isOpen) {
    commit("setSidebarOpen", isOpen);
  },
  async toggleSidebarCollapsed({ commit }, isCollapsed) {
    commit("setSidebarCollapsed", isCollapsed);
  },
  async toggleIsHovered({ commit }, isHovered) {
    commit("setSidebarIsHovered", isHovered);
  }
};

const mutations = {
  setSidebarOpen: (state, isOpen) =>
    (state.sidebar = { ...state.sidebar, isOpen: isOpen }),
  setSidebarCollapsed: (state, isCollapsed) =>
    (state.sidebar = { ...state.sidebar, isCollapsed: isCollapsed }),
  setSidebarIsHovered: (state, isHovered) =>
    (state.sidebar = { ...state.sidebar, isHovered: isHovered })
};

export default {
  state,
  getters,
  actions,
  mutations
};
