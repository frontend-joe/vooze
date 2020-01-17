import Vuex from "vuex";
import Vue from "vue";
import app from "./app";
import ceoDashboard from "../components/feature/dashboards/ceo/module";
import managerDashboard from "../components/feature/dashboards/manager/module";
import developerDashboard from "../components/feature/dashboards/developer/module";
import designerDashboard from "../components/feature/dashboards/designer/module";
import settings from "../components/layout/settings/module";
import sidebar from "../components/layout/sidebar/module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    ceoDashboard,
    managerDashboard,
    developerDashboard,
    designerDashboard,
    settings,
    sidebar
  }
});
