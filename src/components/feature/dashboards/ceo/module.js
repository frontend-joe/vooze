import axios from "axios";

const state = {
  ceo: {}
};

const getters = {
  ceo: state => state.ceo
};

const actions = {
  async loadCeo({ commit }) {
    const response = await axios.get("/api/dashboards/ceo");
    commit("setCeo", response.data);
  }
};

const mutations = {
  setCeo: (state, ceo) => (state.ceo = ceo)
};

export default {
  state,
  getters,
  actions,
  mutations
};
