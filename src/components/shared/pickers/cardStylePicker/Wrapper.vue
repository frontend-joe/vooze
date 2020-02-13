<template>
  <StyledWrapper>
    <StyledDefaultButton @click="$emit('toggle-card-style', 'default')">
      Default
    </StyledDefaultButton>
    <StyledNeuButton @click="$emit('toggle-card-style', 'neumorphic')">
      Neumorphic
    </StyledNeuButton>
  </StyledWrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";

const StyledWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

const buttonDefaults = css`
  position: relative;
  background: transparent;
  border: 0;
  height: 40px;
  min-width: 60px;
  margin-right: 1rem;
  font-size: 0.75rem;
  border-radius: ${props => props.theme.borderRadius};
`;

const StyledDefaultButton = styled.button`
  z-index: 2;
  ${buttonDefaults};
  box-shadow: ${props => props.theme.boxShadowDefault};
`;

const StyledNeuButton = styled.button`
  z-index: 1;
  ${buttonDefaults};
  ${"" /* background: linear-gradient(145deg, #ececec, #f5f5f5); */}
  box-shadow: ${props => props.theme.boxShadowNeu};
`;

export default {
  components: {
    StyledWrapper,
    StyledDefaultButton,
    StyledNeuButton
  }
};
</script>
