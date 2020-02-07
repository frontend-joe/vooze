<template>
  <styled-wrapper>
    <Hidden xs flexHorizontal>
      <styled-textbox-icon>
        search
      </styled-textbox-icon>
      <styled-textbox type="text" placeholder="Find something" />
      <styled-button>
        <span>Search</span>
        <mat-icon iconSize="18px" forDark>keyboard_arrow_down</mat-icon>
      </styled-button>
    </Hidden>
    <Hidden sm md lg xl>
      <MatIconButton forDark>search</MatIconButton>
    </Hidden>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../shared/icons";
import { MatIconButton } from "../../shared/buttons";
import { Hidden } from "../../shared/responsive";

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  margin-right: 1rem;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    flex: 1;
  }
`;

const StyledTextbox = styled.input`
  border-top-left-radius: ${props => props.theme.borderRadius};
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  border: 0;
  height: 42px;
  width: 240px;
  font-size: 13px;
  font-weight: 200;
  padding: 0;
  padding-left: 2rem;

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    background: #f2f2f2;
  }

  &:focus::placeholder {
    color: #808080;
  }
`;

const StyledButton = styled.button`
  border-top-right-radius: ${props => props.theme.borderRadius};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorSecondary};
  border: 0;
  font-size: 13px;
  padding: 0 1rem 0 1rem;
  color: white;
  height: 42px;
  line-height: 42px;
  display: flex;
  align-items: center;

  & > span {
    margin-right: 0.325rem;
  }
`;

const StyledTextboxIcon = styled(MatIcon)`
  position: absolute;
  color: #dad3d3 !important;
  z-index: 2;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px !important;
`;

export default {
  components: {
    StyledWrapper,
    StyledTextbox,
    StyledButton,
    StyledTextboxIcon,
    MatIcon,
    MatIconButton,
    Hidden
  }
};
</script>
