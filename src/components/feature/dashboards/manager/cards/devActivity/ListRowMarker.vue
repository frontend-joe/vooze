<template>
  <StyledWrapper>
    <StyledMarker>
      <StyledMarkerDot :color="color" />
      <StyledMarkerLine class="markerline" />
      <StyledMarkerTick />
    </StyledMarker>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { darken } from "polished";

const StyledWrapper = styled.div`
  position: relative;
  width: 60px;
  flex: 0 0 auto;
`;

const StyledMarker = styled.div`
  position: absolute;
  height: 100%;
  width: 60px;
`;

const markerProps = { color: String };
const StyledMarkerDot = styled("div", markerProps)`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.theme[`color${props.color}Faint`]};
  border: 1px solid
    ${props => darken(0.115, props.theme[`color${props.color}Faint`])};
`;

const StyledMarkerLine = styled.div`
  position: absolute;
  z-index: 1;
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.colorBorder};
`;

const StyledMarkerTick = styled.div`
  position: absolute;
  z-index: 1;
  width: 50%;
  height: 1px;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
  background: ${props => props.theme.colorBorder};
`;

export default {
  props: markerProps,
  components: {
    StyledWrapper,
    StyledMarker,
    StyledMarkerDot,
    StyledMarkerLine,
    StyledMarkerTick
  }
};
</script>
