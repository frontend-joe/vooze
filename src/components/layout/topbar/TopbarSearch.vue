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
import { darken } from "polished";
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
  border: 1px solid ${props => props.theme.colorBorder};
  height: 42px;
  width: 240px;
  font-size: 14px;
  font-weight: 200;
  padding: 0;
  color: ${props => props.theme.colorText};
  padding-left: 2rem;
  background: ${props => props.theme.colorBackground};

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    background: ${props => darken(0.05, props.theme.colorBackground)};
  }

  &:focus::placeholder {
    color: #808080;
  }
`;

const StyledButton = styled.button`
  border-top-right-radius: ${props => props.theme.borderRadius};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colorAccent};
  border: 0;
  font-size: 14px;
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
