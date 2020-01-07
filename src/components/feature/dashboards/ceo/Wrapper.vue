<template>
  <div>
    <page-title>CEO</page-title>
    <top-shelf />
    <ContentHeader>
      Finance & People
    </ContentHeader>

    <div class="row">
      <div class="order-md-2 col-md-6 col-lg-6">
        <CoolChart />
      </div>
      <div class="order-md-1 col-md-6 col-lg-6">
        <WageBudget />
      </div>
    </div>

    <!-- <div class="row">
      <div class="col-lg-12">
        <profile-image-list />
      </div>
    </div> -->

    <ContentHeader>
      Device Usage
    </ContentHeader>

    <div class="row">
      <div class="col-lg-12">
        <usage-map />
      </div>
    </div>

    <ContentHeader>
      Technology & Activity
    </ContentHeader>

    <div class="row">
      <div class="col-sm-6 col-lg-8">
        <tabbed-item-list />
      </div>

      <div class="col-sm-6 col-lg-4">
        <recent-activity />
        <advert-card />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { PageTitle, ContentHeader } from "../../../shared/page";
import TopShelf from "./cards/topShelf/Wrapper";
// import ProfileImageList from "./cards/profileImageList/Wrapper";
import RecentActivity from "./cards/recentActivity/Wrapper";
import TabbedItemList from "./cards/tabbedItemList/Wrapper";
import WageBudget from "./cards/wageBudget/Wrapper";
import UsageMap from "./cards/usageMap/Wrapper";
import CoolChart from "./cards/coolChart/Wrapper";
import { AdvertCard } from "../../../shared/cardWidgets";
export default {
  props: {
    theme: Object
  },
  components: {
    PageTitle,
    ContentHeader,
    TopShelf,
    AdvertCard,
    // ProfileImageList,
    RecentActivity,
    TabbedItemList,
    WageBudget,
    UsageMap,
    CoolChart
  },
  methods: mapActions(["fetchPropertyDashboard"]),
  computed: mapGetters(["getPropertyDashboard"]),
  created: function() {
    this.fetchPropertyDashboard();
  }
};
</script>
