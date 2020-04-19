import axios from "axios";

const state = {
  covid: {
    loading: true
  }
};

const getters = {
  covid: state => state.covid
};

const actions = {
  async loadCovid({ commit }) {
    commit("setCovidLoading", true);

    const response = await axios.get("/api/dashboards/covid");
    response.data.data.loading = false;

    commit("setCovid", response.data.data);
  }
};

const mutations = {
  setCovid: (state, covid) => {
    state.covid = covid;
  },
  setCovidLoading: (state, loading) => {
    state.covid.loading = loading;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
