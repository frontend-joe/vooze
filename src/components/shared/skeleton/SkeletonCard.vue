<template>
  <Card
    overflowHidden
    :padding="padding || '1rem'"
    v-bind="$props"
    :isSkeleton="true"
    :cardLabel="hasLabel ? ' ' : ''"
  >
    <slot />
  </Card>
</template>

<script>
import { Card } from "../card";

export default {
  props: {
    padding: String,
    fixedHeight: String,
    hasLabel: Boolean
  },
  components: {
    Card
  }
};
</script>
