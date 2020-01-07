<template>
  <styled-wrapper>
    <StyledIcon :color="color" iconSize="35px">
      <slot />
    </StyledIcon>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import { MatIcon } from "../../../../../../shared/icons";

const StyledWrapper = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecef;
`;

const iconProps = { color: String };
const StyledIcon = styled(MatIcon, iconProps)`
  transform: translate(-1px, -1px);
  color: ${props => rgba(props.theme[`color${props.color}`], 0.75)} !important;
`;

export default {
  props: {
    color: String
  },
  components: {
    StyledWrapper,
    StyledIcon
  }
};
</script>
