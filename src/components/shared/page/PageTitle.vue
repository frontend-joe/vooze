<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style module>
.wrapper {
  padding: 0;
  height: 80px;
  display: flex;
  font-size: 17px;
  font-weight: normal;
  align-items: center;
}
</style>
