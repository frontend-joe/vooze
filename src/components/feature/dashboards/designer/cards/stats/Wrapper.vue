<template>
  <Card
    fixedHeight="130px"
    overflowHidden
    :isSkeleton="loading"
    :cardLabel="data ? data.title : 'skeleton'"
    :loading="loading"
  >
    <StyledCardContent v-if="!loading">
      <StatItem v-for="item in skeletonData" :key="item.id" :item="item" />
      <StyledIcon>
        <TonIcon
          v-if="!loading"
          :icon="data.icon"
          iconSize="48px"
          iconColor="IconActive"
        />
      </StyledIcon>
    </StyledCardContent>
    <StyledCardContent v-if="loading">
      <StatItemSkeleton v-for="item in skeletonData" :key="item.id" />
      <StyledIcon>
        <SkeletonCircle skeletonSize="48px" />
      </StyledIcon>
    </StyledCardContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import StatItem from "./StatItem";
import { Card } from "../../../../../shared/card";
import { TonIcon } from "../../../../../shared/icons";
import { SkeletonCircle } from "../../../../../shared/skeleton";
import StatItemSkeleton from "./StatItemSkeleton";

const StyledCardContent = styled.div`
  display: flex;
  height: 130px;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  flex: 0 0 20%;
`;

export default {
  props: {
    data: Object,
    loading: Boolean
  },
  components: {
    Card,
    TonIcon,
    StyledCardContent,
    StyledIcon,
    StatItem,
    SkeletonCircle,
    StatItemSkeleton
  },
  computed: {
    skeletonData() {
      let data = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        }
      ];

      if (this.data && this.data.items) {
        data = this.data.items;
      }

      return data;
    }
  }
};
</script>
