<template>
  <div :class="$style.priceBlock">
          <div :class="$style.priceBlock__value">{{value}}</div>
          <div :class="$style.priceBlock__increment">{{increment}}</div>
        </div>
</template>

<script>
  export default {
    props: {
      value: String,
      increment: String
    }
  }
</script>

<style module>
.priceBlock {
  display: flex;
  align-items: flex-end;
  padding-top: 0.95rem;
  margin-bottom: 1rem;
}

.priceBlock__value {
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
}

.priceBlock__increment {
  font-size: 13px;
  color: #b1b1b1;
}
</style>
