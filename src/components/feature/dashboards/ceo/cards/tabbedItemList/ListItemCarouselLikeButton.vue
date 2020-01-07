<template>
  <styled-wrapper>
    <mat-icon forDark>{{ liked ? "favorite" : "favorite_border" }}</mat-icon>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.button`
  position: absolute;
  z-index: 5;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > i {
    font-size: 20px !important;
    transform: translateY(1px);
  }
`;

export default {
  props: {
    liked: Boolean
  },
  components: {
    StyledWrapper,
    MatIcon
  }
};
</script>
