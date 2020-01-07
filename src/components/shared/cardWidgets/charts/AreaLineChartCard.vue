<template>
  <card>
    <div :class="$style.titleRow">
      <div :style="{ flex: 1 }">
        <div :class="$style.titleRow__title">Revenue</div>
        <div :class="$style.titleRow__subtitle">Year on year</div>
      </div>

      <div :class="$style.titleRow__legendItem">
        <span
          :class="{
            [$style.titleRow__legendItem__text]: true,
            [$style.first]: true
          }"
          >Revenue</span
        >
      </div>
      <div :class="$style.legendItem">
        <span
          :class="{ [$style.titleRow__legendItem__text]: true, first: false }"
          >Potential</span
        >
      </div>
    </div>
    <div :class="$style.chartWrapper">
      <vue-frappe
        id="chart"
        :labels="['M', 'T', 'W', 'T', 'F', 'S', 'S']"
        type="axis-mixed"
        :height="228"
        :colors="['#34495e', '#a3bfb3', '#a7a7a7']"
        :dataSets="this.data"
        :lineOptions="{ regionFill: 1 }"
        :tooltipOptions="{
          formatTooltipX: d => (d + ' your mom').toUpperCase()
        }"
        :axisOptions="{ xAxisMode: 'tick' }"
        :barOptions="{ spaceRatio: 0.65 }"
      ></vue-frappe>
    </div>
  </card>
</template>

<script>
import Vue from "vue";
import Chart from "vue2-frappe";
import { Card } from "../../card";

Vue.use(Chart);

export default {
  components: {
    Card
  },
  data: function() {
    return {
      data: [
        {
          name: "Revenue",
          chartType: "bar",
          values: [15, 20, 35, 42, 58, 35, 54]
        },
        {
          name: "Potential",
          chartType: "line",
          regionFill: 1,
          values: [125, 130, 146, 121, 178, 123, 145]
        }
      ]
    };
  }
};
</script>

<style scoped></style>

<style module>
.chartWrapper {
  max-height: 168px;
  overflow: hidden;
}

.titleRow {
  display: flex;
  align-items: center;
}

.titleRow__title {
  font-size: 15px;
  font-weight: bold;
  flex: 1;
  min-width: 1px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.titleRow__subtitle {
  font-size: 12px;
  color: grey;
}

.titleRow__legendItem {
}

.titleRow__legendItem__text {
  position: relative;
  font-size: 13px;
  margin-left: 1rem;
  padding-left: 1rem;
}

.titleRow__legendItem__text::before {
  display: block;
  content: "";
  height: 6px;
  width: 6px;
  position: absolute;
  top: 7px;
  left: 0;
  z-index: 4;
  background: #a3bfb3;
  border-radius: 3px;
}

.titleRow__legendItem__text.first::before {
  background: #2f2da8;
}
</style>
