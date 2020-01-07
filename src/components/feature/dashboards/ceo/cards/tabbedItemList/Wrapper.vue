<template>
  <card padding="0px" overflowHidden>
    <the-header :activeTab="activeTab" v-on:set-active-tab="setActiveTab" />
    <list />
  </card>
</template>

<script>
import { Card } from "../../../../../shared/card";
import Header from "./Header";
import List from "./List";

export default {
  components: {
    Card,
    List,
    theHeader: Header
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  },
  data: function() {
    return {
      activeTab: "Popular"
    };
  }
};
</script>
