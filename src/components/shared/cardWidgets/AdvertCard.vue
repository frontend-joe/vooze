<template>
  <card padding="1rem">
    <div :class="$style.topRow">
      <img :class="$style.topRow__img" src="../../../assets/house-icon.jpg" />
      <div :class="$style.topRow__titleBlock">
        <div :class="$style.topRow__titleBlock__title">Minimal Homes</div>
        <div :class="$style.topRow__titleBlock__subtitle">Solihull, UK.</div>
      </div>
    </div>
    <p :class="$style.paragraph">
      Minimal Homes is a highly profitable agency and highest grossing company
      since February 1998.
    </p>
    <a :class="$style.link">
      Read More
    </a>
  </card>
</template>

<script>
import { Card } from "../card";
export default {
  components: {
    Card
  }
};
</script>

<style module>
.topRow {
  display: flex;
  align-items: center;
}

.topRow__img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translateX(-10px);
}

.topRow__titleBlock {
  padding-top: 0.325rem;
}

.topRow__titleBlock__title {
  font-weight: bold;
  font-size: 16px;
}

.topRow__titleBlock__subtitle {
  font-size: 12px;
  color: #a7a7a7;
}

.paragraph {
  color: #9999a5;
  font-size: 13px;
  height: 58px;
}

.link {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.375rem;
  color: #41b883 !important;
}
</style>
