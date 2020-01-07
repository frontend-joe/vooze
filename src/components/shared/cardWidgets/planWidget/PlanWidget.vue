<template>
  <card primary>
    <div :class="$style.title">Active Plan</div>
    <div class="row no-gutters">
      <div class="col-sm-6">
        <price-block value="£99" increment="/year" />
        <bullet-list v-bind:items="items" />
      </div>
      <div class="col-sm-6">
        <ExpiresBlock />
      </div>
    </div>
  </card>
</template>

<script>
import { Card } from "../../card";
import PriceBlock from "./PriceBlock";
import BulletList from "./BulletList";
import ExpiresBlock from "./ExpiresBlock";
export default {
  components: {
    Card,
    PriceBlock,
    BulletList,
    ExpiresBlock
  },
  data: function() {
    return {
      items: [
        "Item Limit 5k",
        "Agency Limit 15"
      ]
    }
  }
};
</script>

<style module>
.wrapper {
  background: #2f2da8;
  color: white;
  padding: 0 1.5rem 2.1rem;
}

.title {
  height: 72px;
  display: flex;
  align-items: center;
}
</style>
