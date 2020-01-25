<template>
  <Card
    overflowHidden
    loading
    :padding="padding || '1rem'"
    v-bind="$props"
    :isSkeleton="true"
    :fixedHeight="fixedHeight"
    :cardLabel="hasLabel ? ' ' : ''"
  >
    <slot />
  </Card>
</template>

<script>
import { Card } from "../card";

console.log("card", Card);

export default {
  props: {
    padding: String,
    fixedHeight: String,
    hasLabel: Boolean,
    loading: Boolean
  },
  components: {
    Card
  }
};
</script>
