import Vuex from "vuex";
import Vue from "vue";
import propertyDashboard from "./modules/propertyDashboard";
import managerDashboard from "../components/feature/dashboards/manager/module";
import developerDashboard from "../components/feature/dashboards/developer/module";
import designerDashboard from "../components/feature/dashboards/designer/module";
import settings from "../components/layout/settings/module";
import sidebar from "../components/layout/sidebar/module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    propertyDashboard,
    managerDashboard,
    developerDashboard,
    designerDashboard,
    settings,
    sidebar
  }
});
