<template>
  <div :class="$style.wrapper">
    <button :class="$style.button">
      <img :class="$style.avatar" src="../../../assets/domnic-harris.jpg" />
      <span :class="$style.text">
        Joe
      </span>
      <mat-icon iconSize="18px" forDark>keyboard_arrow_down</mat-icon>
    </button>
  </div>
</template>

<script>
import { MatIcon } from "../../shared/icons";

export default {
  components: {
    MatIcon
  }
};
</script>

<style module>
.wrapper {
  padding-right: 1rem;
}

.button {
  background: transparent;
  border: 0;
  height: 64px;
  padding: 0;
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  height: 30px;
  width: 30px;
}

.text {
  margin-left: 0.625rem;
  color: white;
  font-size: 14px;
}

.button:hover > .text {
  color: white;
}

.button > i {
  margin-left: 0.325rem;
  transform: translateY(2px);
}
</style>
