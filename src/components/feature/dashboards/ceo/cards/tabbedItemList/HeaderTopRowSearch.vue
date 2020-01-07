<template>
  <styled-wrapper>
    <styled-icon>search</styled-icon>
    <styled-textbox placeholder="Search in app..." />
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledTextbox = styled.input`
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 0.4rem;
  height: 40px;
  line-height: 40px;
  width: 200px;
  font-size: 13px;
  font-weight: 200;
  padding: 0 1rem 0 2.25rem;

  &::placeholder {
    color: ${props => props.theme.colorPlaceholder};
  }

  &:focus {
    border-color: ${props => props.theme.colorPrimary};
  }
`;

const StyledIcon = styled(MatIcon)`
  color: #a7a7a7 !important;
  position: absolute;
  top: 11px;
  left: 11px;
`;

export default {
  components: {
    StyledWrapper,
    StyledTextbox,
    StyledIcon
  }
};
</script>
