import axios from "axios";

const state = {
  designer: {}
};

const getters = {
  designer: state => state.designer
};

const actions = {
  async loadDesigner({ commit }) {
    axios.get("/api/dashboards/designer").then(res => {
      commit("setDesigner", res.data.data);
    });
  }
};

const mutations = {
  setDesigner: (state, designer) => {
    state.designer = designer;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
