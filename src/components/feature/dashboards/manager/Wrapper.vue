<template>
  <div v-if="manager">
    <page-title section="Dashboards">Manager</page-title>

    <div class="row">
      <div class="col-lg-6">
        <TopShelf :loading="manager.loading" :data="manager.topShelf" />
      </div>
      <div class="col-lg-6">
        <MainChart />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-7 col-xl-8">
        <ProjectList :loading="manager.loading" :data="manager.projectList" />
      </div>
      <div class="col-lg-5 col-xl-4">
        <DevActivity :data="manager.devActivity" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { PageTitle } from "../../../shared/page";
import TopShelf from "./cards/topShelf/Wrapper";
import MainChart from "./cards/mainChart/Wrapper";
import ProjectList from "./cards/projectList/Wrapper";
import DevActivity from "./cards/devActivity/Wrapper";

export default {
  props: {
    theme: Object
  },
  components: {
    PageTitle,
    TopShelf,
    MainChart,
    ProjectList,
    DevActivity
  },
  methods: mapActions(["loadManager"]),
  computed: mapGetters(["manager"]),
  created: function() {
    this.loadManager();
  }
};
</script>
