import axios from "axios";

const state = {
  developer: {}
};

const getters = {
  developer: state => state.developer
};

const actions = {
  async loadDeveloper({ commit }) {
    axios.get("/api/dashboards/developer").then(res => {
      commit("setDeveloper", res.data.data);
    });
  }
};

const mutations = {
  setDeveloper: (state, developer) => {
    state.developer = developer;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
