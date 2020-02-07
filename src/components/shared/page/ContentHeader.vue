<template>
  <StyledWrapper><slot> </slot> </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { darken } from "polished";

const StyledWrapper = styled.div`
  position: relative;
  height: 67px;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 6px;
    height: 6px;
    background: #ffffff;
    border: 2px solid ${props => darken(0.075, props.theme.colorAccentFaint)}
    border-radius: 50%;
    transform: translate(-2px, 50%);
  }
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
