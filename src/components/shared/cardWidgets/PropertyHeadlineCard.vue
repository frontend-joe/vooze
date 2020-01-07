<template>
  <card>
    <div :class="$style.title">
      {{ card.title }}
    </div>
    <div :class="$style.valueRow">
      <div :class="$style.value">
        {{ card.value }}
      </div>
      <div :class="$style.percentage">{{ card.percentage }}%</div>
    </div>
    <power-bar
      :class="$style.powerBar"
      v-bind:percentage="card.percentage"
      v-bind:color="card.color"
    />
  </card>
</template>

<script>
import { Card } from "../card";
import { PowerBar } from "../common";
export default {
  props: {
    card: Object
  },
  components: {
    Card,
    PowerBar
  }
};
</script>

<style module>
.title {
  font-size: 12px;
  font-weight: bold;
  color: #9999a5;
  margin-bottom: 0.325rem;
}

.valueRow {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.value {
  font-size: 24px;
  font-weight: bold;
}

.powerBar {
  margin-bottom: 0.5rem;
}

.percentage {
  color: #a7a7a7;
  font-size: 12px;
  margin-left: 0.75rem;
}
</style>
