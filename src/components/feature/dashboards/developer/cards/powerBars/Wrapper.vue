<template>
  <Card>
    <CardHeader>
      <CardTitle cardTitle="Tasks By Language" />
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <StyledBlock v-for="item in data" :key="item.id">
          <StyledLabel>{{ item.title }}</StyledLabel>
          <PowerBar
            :value="item.value"
            :highestValue="14"
            :color="item.color"
          />
        </StyledBlock>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import PowerBar from "./PowerBar";

const StyledWrapper = styled.div``;

const StyledBlock = styled.div``;

const StyledLabel = styled.div`
  font-size: 13px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
  margin-bottom: 0.325rem;
`;

export default {
  props: {
    data: Array
  },
  components: {
    StyledWrapper,
    StyledBlock,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    PowerBar,
    StyledLabel
  }
};
</script>
