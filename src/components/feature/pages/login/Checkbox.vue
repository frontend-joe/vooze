<template>
  <StyledWrapper>
    <StyledCheckboxControl
      id="test"
      value="john"
      @change="onChange"
      type="checkbox"
      v-model="checked"
    />
    <StyledCheckboxLabel for="test">
      <StyledCheckboxTick />
      <StyledCheckboxText :isChecked="checked">
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

const checkboxProps = { isChecked: String };

const StyledCheckboxControl = styled.input`
  position: absolute;
  top: 0;
  left: -9999px;
`;

const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledCheckboxText = styled("div", checkboxProps)`
  font-size: 1rem;
  color: ${props =>
    props.isChecked === "true"
      ? props.theme.colorText
      : props.theme.colorPlaceholder};
`;

const StyledCheckboxTick = styled.div`
  border: 2px solid ${props => props.theme.colorBorder};
  height: 24px;
  width: 24px;
  margin-left: 6px;
  margin-right: 20px;
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
      console.log(this.checked);
      // if (e.target.value === "false") {
      //   this.checkboxValue = e.target.value === "false";
      // }
      //
      // //this.checkboxValue = e.target.value;
      console.log("changed!", e.target.checked);
    }
  },
  components: {
    StyledWrapper,
    StyledCheckboxControl,
    StyledCheckboxLabel,
    StyledCheckboxText,
    StyledCheckboxTick
  }
};
</script>
