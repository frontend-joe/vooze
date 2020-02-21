<template>
  <StyledWrapper>
    <StyledCheckboxControl id="test" @change="onChange" type="checkbox" />
    <StyledCheckboxLabel for="test">
      <StyledCheckboxTickWrapper>
        <StyledCheckboxTick :isChecked="checked === 'true'" />
      </StyledCheckboxTickWrapper>
      <StyledCheckboxText :isChecked="checked === 'true'">
        {{ label }}
      </StyledCheckboxText>
    </StyledCheckboxLabel>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const checkboxProps = { isChecked: Boolean };

const StyledCheckboxControl = styled.input`
  position: absolute;
  top: 0;
  left: -9999px;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckboxText = styled("div", checkboxProps)`
  font-size: 1rem;
  color: ${props =>
    props.isChecked ? props.theme.colorText : props.theme.colorPlaceholder};
`;

const StyledCheckboxTickWrapper = styled.div`
  width: 24px;
  margin-left: 6px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCheckboxTick = styled("div", checkboxProps)`
  border: 2px solid;
  transform: rotate(${props => (props.isChecked ? "45deg" : "0")});
  height: 24px;
  width: ${props => (props.isChecked ? "11px" : "24px")};

  border-color: ${props =>
    props.isChecked ? props.theme.colorAccent : props.theme.colorIconActive};

  ${props =>
    props.isChecked
      ? "border-left-color: transparent; border-top-color: transparent"
      : ""};

  transition: transform 0.25s;
`;

export default {
  props: {
    label: String
  },
  data: function() {
    return {
      checked: "false"
    };
  },
  methods: {
    onChange(e) {
      this.checked = e.target.checked.toString();
    }
  },
  components: {
    StyledWrapper,
    StyledCheckboxControl,
    StyledCheckboxLabel,
    StyledCheckboxText,
    StyledCheckboxTick,
    StyledCheckboxTickWrapper
  }
};
</script>
