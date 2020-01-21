<template>
  <StyledWrapper>
    <Skeleton v-if="loading" />
    <Card v-if="!loading" fixedHeight="278px">
      <CardHeader>
        <CardTitle cardTitle="Tasks By Language" />
      </CardHeader>
      <CardContent>
        <StyledBlock v-for="item in data" :key="item.id">
          <StyledLabel>{{ item.title }}</StyledLabel>
          <PowerBar
            :value="item.value"
            :highestValue="14"
            :color="item.color"
          />
        </StyledBlock>
      </CardContent>
    </Card>
  </StyledWrapper>
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
import Skeleton from "./Skeleton";

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
    data: Array,
    loading: Boolean
  },
  components: {
    StyledWrapper,
    StyledBlock,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    PowerBar,
    StyledLabel,
    Skeleton
  }
};
</script>
