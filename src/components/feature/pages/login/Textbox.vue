<template>
  <StyledWrapper>
    <StyledIcon :focused="focused" iconSize="32px">{{ icon }}</StyledIcon>
    <StyledTextboxWrapper>
      <StyledTextboxPlaceholder
        :focused="focused"
        :isEmpty="textboxValue.length === 0"
      >
        {{ placeholder }}
      </StyledTextboxPlaceholder>
      <StyledTextbox
        ref="textboxRef"
        v-model="textboxValue"
        @focus="onFocus"
        @blur="onBlur"
        type="text"
      />
      <StyledTextboxBorder :focused="focused" />
    </StyledTextboxWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { MatIcon } from "../../../shared/icons";

const theProps = { focused: Boolean, isEmpty: Boolean };

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledIcon = styled(MatIcon, theProps)`
  margin-right: 1rem;
  ${props => (props.focused ? `color: ${props.theme.colorAccent}` : "")};
`;

const StyledTextboxWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const StyledTextboxBorder = styled("div", theProps)`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  width: 100%;
  background: ${props =>
    props.focused ? props.theme.colorAccent : props.theme.colorBorder};
  transform-origin: top;
  transform: ${props => (props.focused ? "scaleY(2.25)" : "scaleY(1)")};
  transition: transform ${props => props.theme.defaultTransition};
`;

const StyledTextboxPlaceholder = styled("div", theProps)`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform-origin: left;
  font-size: ${props => (props.focused || !props.isEmpty ? "13px" : "16px")};
  transform: ${props =>
    props.focused || !props.isEmpty ? "translateY(-2rem)" : "translateY(-50%)"};
  color: ${props =>
    props.focused ? props.theme.colorAccent : props.theme.colorPlaceholder};
  transition: transform ${props => props.theme.transition},
    font-size ${props => props.theme.transition};
`;

const StyledTextbox = styled.input`
  width: 100%;
  border: 0;
  font-size: 16px;
  line-height: 48px;
  height: 48px;
  color: ${props => props.theme.colorText};
  background: transparent;
  position: relative;
  z-index: 2;
`;

export default {
  props: {
    icon: String,
    placeholder: String,
    autoFocus: Boolean
  },
  components: {
    StyledWrapper,
    StyledIcon,
    StyledTextbox,
    StyledTextboxWrapper,
    StyledTextboxBorder,
    StyledTextboxPlaceholder
  },
  data: function() {
    return {
      focused: this.autoFocus || false,
      textboxValue: ""
    };
  },
  methods: {
    onFocus() {
      if (!this.focused) {
        this.focused = true;
      }
    },
    onBlur() {
      this.focused = false;
    },
    focusInput() {
      // Focus the component, but we have to wait
      // so that it will be showing first.
      this.$nextTick(() => {
        this.$refs.textboxRef.$el.focus();
      });
    }
  },
  mounted: function() {
    if (this.autoFocus) {
      this.focusInput();

      //console.log("refs", this.$refs.textboxRef);
      // this.$refs.textboxRef.focus();
    }
  }
};
</script>
