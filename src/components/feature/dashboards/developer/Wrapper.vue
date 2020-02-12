<template>
  <styled-wrapper>
    <PageTitle section="Dashboards">
      Developer
    </PageTitle>
    <TopShelf :loading="developer.loading" :data="developer.topShelf" />
    <ContentHeader>Tasks & Todos</ContentHeader>
    <div class="row">
      <div class="col-lg-8">
        <ActivityRings />
        <TodoList :data="developer.todoList" />
      </div>
      <div class="col-lg-4">
        <div class="row">
          <div class="col-md-6 col-lg-12">
            <PowerBars
              :loading="developer.loading"
              :data="developer.tasksByLanguage"
            />
          </div>
          <div class="col-md-6 col-lg-12">
            <PieChart :data="developer.todoList" />
          </div>
        </div>
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import styled from "vue-styled-components";
import { PageTitle, ContentHeader } from "../../../shared/page";
import TopShelf from "./cards/topShelf/Wrapper";
import TodoList from "./cards/todoList/Wrapper";
import PieChart from "./cards/pieChart/Wrapper";
import PowerBars from "./cards/powerBars/Wrapper";
import ActivityRings from "./cards/activity/Wrapper";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    ContentHeader,
    TopShelf,
    TodoList,
    PieChart,
    PowerBars,
    ActivityRings
  },
  methods: mapActions(["loadDeveloper"]),
  computed: mapGetters(["developer"]),
  created: function() {
    this.loadDeveloper();
    console.log("developer", this.developer.topShelf);
  },
  updated() {
    console.log("updated", this.developer.todoList);
  }
};
</script>
