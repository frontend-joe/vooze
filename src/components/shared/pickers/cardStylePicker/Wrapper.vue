<template>
  <StyledWrapper>
    <StyledDefaultButton @click="$emit('toggle-card-style', 'default')">
      Default
      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === 'default'"
      >
        check
      </StyledBadgeIcon>
    </StyledDefaultButton>
    <StyledNeuButton @click="$emit('toggle-card-style', 'neumorphic')">
      Neumorphic

      <StyledBadgeIcon
        badgeSize="16px"
        iconSize="12px"
        color="Green"
        v-if="activeItem === 'neumorphic'"
      >
        check
      </StyledBadgeIcon>
    </StyledNeuButton>
  </StyledWrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { BadgeIcon } from "../../icons";

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
  box-shadow: ${props => props.theme.boxShadowNeu};
`;

const StyledBadgeIcon = styled(BadgeIcon)`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export default {
  props: {
    activeItem: String
  },
  components: {
    StyledWrapper,
    StyledDefaultButton,
    StyledNeuButton,
    StyledBadgeIcon
  }
};
</script>
