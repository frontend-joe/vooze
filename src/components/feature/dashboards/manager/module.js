import axios from "axios";

const state = {
  manager: {}
};

const getters = {
  manager: state => state.manager
};

const actions = {
  async loadManager({ commit }) {
    axios.get("/api/dashboards/manager").then(res => {
      console.log("loadManager", res.data.data);
      commit("setManager", res.data.data);
    });
  }
};

const mutations = {
  setManager: (state, manager) => {
    state.manager = manager;
    console.log("setManager", state.manager);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
