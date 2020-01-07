<template>
  <ul :class="$style.bulletList">
    <li v-for="item in items" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  props: {
    items: Array
  }
};
</script>

<style module>
.bulletList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.bulletList li {
  display: block;
  height: 24px;
  padding-left: 1rem;
  position: relative;
  font-size: 13px;
}

.bulletList li::after {
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background: white;
  position: absolute;
  top: 8px;
  left: 0;
  z-index: 3;
}
</style>