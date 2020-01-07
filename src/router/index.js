import Vue from "vue";
import VueRouter from "vue-router";
import CeoDashboard from "../components/feature/dashboards/ceo/Wrapper";
import ManagerDashboard from "../components/feature/dashboards/manager/Wrapper";
import DeveloperDashboard from "../components/feature/dashboards/developer/Wrapper";
import DesignerDashboard from "../components/feature/dashboards/designer/Wrapper";
import ApexCharts from "../components/feature/charts/apex/Wrapper";
import Buttons from "../components/feature/components/button/Wrapper";
import Alerts from "../components/feature/components/alert/Wrapper";
import ChartJs from "../components/feature/charts/chartjs/Wrapper";
import Table from "../components/feature/components/table/Wrapper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: CeoDashboard,
    props: true
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/charts/apex",
    name: "apexcharts",
    component: ApexCharts
  },
  {
    path: "/charts/chartjs",
    name: "chartjs",
    component: ChartJs
  },
  {
    path: "/components/buttons",
    name: "buttons",
    component: Buttons
  },
  {
    path: "/components/alerts",
    name: "alerts",
    component: Alerts
  },
  {
    path: "/components/table",
    name: "table",
    component: Table
  },
  {
    path: "/dashboards/manager",
    name: "manager",
    component: ManagerDashboard
  },
  {
    path: "/dashboards/developer",
    name: "developer",
    component: DeveloperDashboard
  },
  {
    path: "/dashboards/designer",
    name: "designer",
    component: DesignerDashboard
  },
  {
    path: "*",
    component: CeoDashboard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
