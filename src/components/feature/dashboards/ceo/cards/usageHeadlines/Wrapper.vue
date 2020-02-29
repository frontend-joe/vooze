<template>
  <styled-wrapper>
    <div class="row">
      <div class="col-md-6" v-for="figure in figures" :key="figure.label">
        <SmallStatCard
          :label="figure.label"
          :value="figure.value"
          :icon="figure.icon"
          :iconColor="figure.iconColor"
        />
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { SmallStatCard } from "../../../../../shared/widgets";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    SmallStatCard
  },
  data: function() {
    return {
      figures: [
        {
          label: "Region",
          value: "Europe",
          icon: "ti-Line-Map-Pin-4",
          iconColor: "Primary"
        },
        {
          label: "App",
          value: "Vooze",
          icon: "ti-Line-Screen-2",
          iconColor: "Secondary"
        }
      ]
    };
  }
};
</script>
