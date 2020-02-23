const state = {
  intro: {
    isOpen: false
  }
};

const getters = {
  intro: state => state.intro
};

const actions = {
  async toggleIntroOpen({ commit }, isOpen) {
    commit("setIntroOpen", isOpen);
  }
};

const mutations = {
  setIntroOpen: (state, isOpen) => {
    state.intro.isOpen = isOpen;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
