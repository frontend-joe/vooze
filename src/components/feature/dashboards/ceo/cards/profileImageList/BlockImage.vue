<template>
  <StyledWrapper :highlighted="highlighted"
    ><StyledImage :src="src"
  /></StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const gradient1 = "#bda0f1";
const gradient2 = "#89d0c3";

const gradient = () => `
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#009fff+0,ec2f4b+100 */
  background: ${gradient1}; /* Old browsers */
  background: -moz-linear-gradient(top,  ${gradient1} 0%, ${gradient2} 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  ${gradient1} 0%,${gradient2} 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  ${gradient1} 0%,${gradient2} 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${gradient1}', endColorstr='${gradient2}',GradientType=0 ); /* IE6-9 */
  `;

const wrapperProps = { highlighted: Boolean };
const StyledWrapper = styled("div", wrapperProps)`
  background: red;
  margin-bottom: 0.75rem;
  padding: 2px;
  border-radius: 50%;
  ${props => (props.highlighted ? gradient : "background: transparent")};
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 84px;
  border: 4px solid white;
`;

export default {
  props: {
    highlighted: Boolean,
    src: String
  },
  components: {
    StyledWrapper,
    StyledImage
  }
};
</script>
