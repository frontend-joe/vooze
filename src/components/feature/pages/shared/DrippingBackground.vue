<template>
  <StyledWrapper>
    <StyledDripWrapper
      v-for="(drip, index) in dripArray"
      :key="drip.id"
      :style="{ width: dripWidth }"
      :dripWidth="dripWidth"
    >
      <StyledDripUp
        :dripWidth="dripWidth"
        :dripHeight="drip.height"
        :style="{ height: `${drip.height}%` }"
      />
      <StyledDripUpCircle :dripHeight="drip.height" :dripWidth="dripWidth" />
      <StyledDripDown
        :dripWidth="dripWidth"
        v-if="index % 2 !== 0"
        :style="{ height: `${drip.dripDownHeight}%` }"
      />
    </StyledDripWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #242424;
  display: flex;
`;

const dripProps = { dripWidth: Number, dripHeight: Number };

const StyledDripWrapper = styled("div", dripProps)`
  position: relative;
  flex: 1 0 ${props => props.dripWidth}px;
`;

const StyledDripUp = styled("div", dripProps)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgb(62, 32, 156);
  background: linear-gradient(
    0deg,
    rgba(62, 32, 156, 1) 0%,
    rgba(133, 43, 191, 1) 75%
  );
`;

const StyledDripUpCircle = styled("div", dripProps)`
  width: ${props => props.dripWidth}px;
  height: ${props => props.dripWidth}px;
  border-radius: ${props => props.dripWidth / 2}px;
  position: absolute;
  top: ${props => 100 - props.dripHeight}%;
  transform: translateY(-50%);
  background: #852bbf;
`;

const StyledDripDown = styled("div", dripProps)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background: #242424;
  border-bottom-left-radius: ${props => props.dripWidth / 2}px;
  border-bottom-right-radius: ${props => props.dripWidth / 2}px;
  transform: translateY(25%);
`;

export default {
  props: {
    drips: Number,
    minWidth: Number
  },
  components: {
    StyledWrapper,
    StyledDripWrapper,
    StyledDripUp,
    StyledDripDown,
    StyledDripUpCircle
  },
  computed: {
    dripWidth() {
      console.log("dripWidth", this.minWidth / this.drips);

      return this.minWidth / this.drips;
    },
    dripArray() {
      const getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };

      let array = [];

      for (let i = 0; i < this.drips; i++) {
        let height;
        let previousHeight;
        if (i > 0) {
          previousHeight = array[i - 1].height;
        }

        if (i === 0 || i === this.drips - 1) {
          height = 75;
        } else {
          if (i % 2 === 0) {
            height = getRndInteger(previousHeight, 75);
          } else {
            height = getRndInteger(10, previousHeight);
          }
        }

        array.push({
          id: i + 1,
          height: i === 0 ? 90 : height,
          dripDownHeight: 100 - height
        });
      }

      return array;
    }
  }
};
</script>
