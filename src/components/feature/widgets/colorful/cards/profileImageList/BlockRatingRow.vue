<template>
  <styled-wrapper>
    <styled-left-block>
      <span>{{ department }}</span>
    </styled-left-block>
    <styled-right-block>
      <styled-star-icon :highlighted="highlighted" iconSize="18px"
        >grade</styled-star-icon
      >
      <div>
        {{ rating }}
      </div>
    </styled-right-block>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  font-size: 13px;
`;

const iconProps = { highlighted: Boolean };
const StyledStarIcon = styled(MatIcon, iconProps)`
  color: ${props =>
    props.highlighted
      ? props.theme.colorSecondary
      : props.theme.colorSubtitle} !important;
  transform: translateY(0px);
  margin-right: 0.5rem;
`;

const StyledLeftBlock = styled.div`
  height: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRightBlock = styled.div`
  border-left: 1px solid ${props => props.theme.colorBorder};
  flex: 1;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default {
  props: {
    highlighted: Boolean,
    rating: Number,
    department: String
  },
  components: {
    StyledWrapper,
    StyledStarIcon,
    StyledRightBlock,
    StyledLeftBlock
  }
};
</script>
