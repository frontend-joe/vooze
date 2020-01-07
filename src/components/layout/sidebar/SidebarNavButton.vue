<template>
  <StyledButtonWrapper>
    <router-link @click.native="$emit('button-clicked')" :to="{ path: url }">
      <MatIcon iconSize="18px">{{ icon }}</MatIcon>
      <span class="text">{{ name }}</span>
    </router-link></StyledButtonWrapper
  >
</template>

<script>
import { MatIcon } from "../../shared/icons";
import styled from "vue-styled-components";

const StyledButtonWrapper = styled.div`
  & > a {
    position: relative;
    background: transparent;
    border: 0;
    border-radius: 20px;
    padding: 0 0 0 0.5rem;
    margin-left: 1rem;
    color: ${props => props.theme.colorSidebarButtonActive};
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    font-weight: 500;
    text-align: left;
    display: flex;
    width: calc(100% - 2rem);
    align-items: center;

    &::after {
      position: absolute;
      opacity: 0;
      transform: scale(0.75, 0.75);
      z-index: 2;
      top: 18px;
      right: 18px;
      display: block;
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${props => props.theme.colorAccent};
      transition: transform 0.25s, opacity 0.25s;
    }

    & > .text,
    & > i {
      margin-left: 0.625rem;
      color: ${props => props.theme.colorSidebarButtonActive} !important;
    }

    &.router-link-exact-active::after,
    &:focus::after {
      opacity: 1;
      transform: scale(1, 1);
    }

    &.router-link-exact-active,
    &:focus {
      background: ${props => props.theme.colorSidebarButtonBackgroundActive};
      color: ${props => props.theme.colorAccent};
    }

    &.router-link-exact-active > .text,
    &.router-link-exact-active > i,
    &:focus > .text,
    &:focus > i {
      color: ${props => props.theme.colorAccent} !important;
    }

    &:hover,
    &:hover > .text,
    &:hover > i {
      color: ${props => props.theme.colorAccent} !important;
    }
  }
`;
export default {
  props: {
    name: String,
    icon: String,
    url: String
  },
  components: {
    StyledButtonWrapper,
    MatIcon
  },
  methods: {
    buttonClicked: function() {
      console.log("nav button clicked");
    }
  }
};
</script>
