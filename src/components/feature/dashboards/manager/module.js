import axios from "axios";

const state = {
  manager: {
    loading: true
  }
};

const getters = {
  manager: state => state.manager
};

const actions = {
  async loadManager({ commit }) {
    commit("setManagerLoading", true);

    const response = await axios.get("/api/dashboards/manager");
    response.data.loading = false;

    commit("setManager", response.data);

    // axios.get("/api/dashboards/manager").then(res => {
    //   console.log("loadManager", res.data.data);
    //   commit("setManager", res.data.data);
    // });
  }
};

const mutations = {
  setManager: (state, manager) => {
    state.manager = manager;
    console.log("setManager", state.manager);
  },
  setManagerLoading: (state, loading) => {
    state.manager.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
