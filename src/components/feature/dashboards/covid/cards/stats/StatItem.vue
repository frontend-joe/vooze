<template>
  <StyledWrapper
    :content="item.tooltip"
    v-tippy="{
      placement: 'top',
      arrow: true,
      distance: -20
    }"
  >
    <StyledValue>
      {{ item.count }}
    </StyledValue>
    <StyledLabel>
      <StyledBadge v-if="item.color" :color="item.color" size="10px" />
      <StyledLabelText>
        {{ item.title }}
      </StyledLabelText>
    </StyledLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Badge } from "../../../../../shared/common";

const StyledWrapper = styled.div`
  width: 20%;
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
  margin-bottom: 0.625rem;
`;

const StyledLabel = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: ${props => props.theme.colorSubtitle};
  display: flex;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  margin-right: 0.5rem;
`;

const StyledLabelText = styled.div``;

export default {
  props: {
    item: Object
  },
  components: {
    StyledWrapper,
    StyledValue,
    StyledLabel,
    StyledLabelText,
    StyledBadge
  }
};
</script>
