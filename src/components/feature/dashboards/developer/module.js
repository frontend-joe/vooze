import axios from "axios";

const state = {
  developer: {
    loading: true
  }
};

const getters = {
  developer: state => state.developer
};

const actions = {
  async loadDeveloper({ commit }) {
    commit("setDeveloperLoading", true);

    const response = await axios.get("/api/dashboards/developer");
    response.data.loading = false;

    commit("setDeveloper", response.data);
    // axios.get("/api/dashboards/developer").then(res => {
    //   commit("setDeveloper", res.data.data);
    // });
  }
};

const mutations = {
  setDeveloper: (state, developer) => {
    state.developer = developer;
  },
  setDeveloperLoading: (state, loading) => {
    state.developer.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
