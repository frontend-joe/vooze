import axios from "axios";

const state = {
  ceo: {
    loading: true
  }
};

const getters = {
  ceo: state => state.ceo
};

const actions = {
  async loadCeo({ commit }) {
    commit("setLoading", true);

    const response = await axios.get("/api/dashboards/ceo");
    response.data.loading = false;

    commit("setCeo", response.data);
  }
};

const mutations = {
  setCeo: (state, ceo) => (state.ceo = ceo),
  setLoading: (state, loading) => (state.ceo.loading = loading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
