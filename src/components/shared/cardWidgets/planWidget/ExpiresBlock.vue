<template>
  <div :class="$style.expiresBlock">
    <div :class="$style.expiresBlock__title">80 days left</div>
    <div :class="$style.expiresBlock__buttonWrapper">
      <cool-button secondary>Upgrade</cool-button>
    </div>
    <div>
      <styled-button>
        Other Options
      </styled-button>
    </div>
  </div>
</template>

<script>
import styled from 'vue-styled-components';
import { CoolButton } from "../../../shared/buttons";

const StyledButton = styled.a`
display: inline-block;
font-size: 13px;
color: #b1b1b1;
margin-bottom: 1rem;
`;

export default {
  components: {
    CoolButton,
    StyledButton
  }
};
</script>

<style module>
.expiresBlock {
  border-left: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 0.75rem;
}

.expiresBlock__title {
  text-align: center;
  font-size: 13px;
  margin-bottom: 0.75rem;
}

.expiresBlock__buttonWrapper {
  text-align: center;
  margin-bottom: 0.5rem;
}

.expiresBlock__link {
  display: inline-block;
  font-size: 13px;
  color: #c7c7c7;
  margin-bottom: 1rem;
}
</style>
