<template>
  <div>
    <page-title section="Dashboards">Director</page-title>
    <top-shelf :loading="ceo.loading" />
    <!-- <ContentHeader>
      Finance & People
    </ContentHeader> -->

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
      <CoolButton plain dropdown>This week</CoolButton>
    </ContentHeader>

    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-8">
        <usage-map />
      </div>
      <div class="col-md-6 col-lg-6 col-xl-4">
        <UsageHeadlines />
        <UsageStats />
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
import UsageStats from "./cards/usageStats/Wrapper";
import UsageHeadlines from "./cards/usageHeadlines/Wrapper";
import CoolChart from "./cards/coolChart/Wrapper";
import { AdvertCard } from "../../../shared/cardWidgets";
import { CoolButton } from "../../../shared/buttons";
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
    UsageStats,
    UsageHeadlines,
    CoolChart,
    CoolButton
  },
  methods: mapActions(["loadCeo"]),
  computed: mapGetters(["ceo"]),
  created: function() {
    this.loadCeo();
  }
};
</script>
