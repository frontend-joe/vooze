import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";
import PolygonFillpattern from "vue2-leaflet-polygonfillpattern";
import VueTippy from "vue-tippy";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

library.add(faStar);
library.add(faStarHalf);
library.add(faFacebook);
library.add(faTwitter);
library.add(faFacebookF);
library.add(faInstagram);
library.add(faYoutube);

Vue.config.productionTip = false;
Vue.use(PolygonFillpattern);
Vue.use(VueTippy);

Vue.use(require("vue-chartist"));

axios.defaults.headers.common["Content-Type"] = "application/json";

if (process.env.NODE_ENV !== "development") {
  axios.defaults.baseURL = "https://api.voozetheme.com";
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
