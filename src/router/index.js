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
// import ModernWidgets from "../components/feature/widgets/modern/Wrapper";
import ClassicWidgets from "../components/feature/widgets/classic/Wrapper";
import Chips from "../components/feature/components/chip/Wrapper";
import LoginPage from "../components/feature/pages/login/Wrapper";
import RegisterPage from "../components/feature/pages/register/Wrapper";
import LockedPage from "../components/feature/pages/locked/Wrapper";
import ForgotPage from "../components/feature/pages/forgot/Wrapper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/widgets/modern",
    name: "classic widgets",
    component: ClassicWidgets
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
    path: "*",
    component: CeoDashboard
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
