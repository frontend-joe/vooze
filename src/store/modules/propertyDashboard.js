import axios from "axios";

const state = {
  propertyDashboard: {}
};

const getters = {
  getPropertyDashboard: state => state.propertyDashboard
};

const actions = {
  async fetchPropertyDashboard({ commit }) {
    const response = await axios.get("/api/property-dashboard");
    //console.log("response", response.data);
    commit("setPropertyDashboard", response.data);
  }
};

const mutations = {
  setPropertyDashboard: (state, propertyDashboard) =>
    (state.propertyDashboard = propertyDashboard)
};

export default {
  state,
  getters,
  actions,
  mutations
};
