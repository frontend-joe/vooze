import Vue from "vue";
import VueRouter from "vue-router";
import CeoDashboard from "../components/feature/dashboards/ceo/Wrapper";
import ManagerDashboard from "../components/feature/dashboards/manager/Wrapper";
import DeveloperDashboard from "../components/feature/dashboards/developer/Wrapper";
import DesignerDashboard from "../components/feature/dashboards/designer/Wrapper";
import CovidDashboard from "../components/feature/dashboards/covid/Wrapper";
import ApexCharts from "../components/feature/charts/apex/Wrapper";
import Buttons from "../components/feature/components/button/Wrapper";
import Alerts from "../components/feature/components/alert/Wrapper";
import ChartJs from "../components/feature/charts/chartjs/Wrapper";
import Table from "../components/feature/components/table/Wrapper";
import ColorfulWidgets from "../components/feature/widgets/colorful/Wrapper";
import Chips from "../components/feature/components/chip/Wrapper";
import LoginPage from "../components/feature/pages/login/Wrapper";
import RegisterPage from "../components/feature/pages/register/Wrapper";
import LockedPage from "../components/feature/pages/locked/Wrapper";
import ForgotPage from "../components/feature/pages/forgot/Wrapper";
import ChartWidgets from "../components/feature/widgets/charts/Wrapper";
import Page404 from "../components/feature/pages/404/Wrapper";
import Page500 from "../components/feature/pages/500/Wrapper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/widgets/charts",
    name: "charts widgets",
    component: ChartWidgets
  },
  {
    path: "/widgets/colorful",
    name: "colorful",
    component: ColorfulWidgets
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
    path: "/components/chips",
    name: "chips",
    component: Chips
  },
  {
    path: "/components/table",
    name: "table",
    component: Table
  },
  {
    path: "/dashboards/director",
    name: "director",
    component: CeoDashboard
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
    path: "/dashboards/covid",
    name: "covid",
    component: CovidDashboard
  },
  {
    path: "/pages/auth/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/pages/auth/register",
    name: "register",
    component: RegisterPage
  },
  {
    path: "/pages/auth/forgot",
    name: "forgot",
    component: ForgotPage
  },
  {
    path: "/pages/auth/locked",
    name: "locked",
    component: LockedPage
  },
  {
    path: "/pages/errors/404",
    name: "404",
    component: Page404
  },
  {
    path: "/pages/errors/500",
    name: "500",
    component: Page500
  },
  {
    path: "*",
    component: CovidDashboard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
