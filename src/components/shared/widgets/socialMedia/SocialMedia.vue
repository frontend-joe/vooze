<template>
  <StyledCard
    :loading="loading"
    overflowHidden
    minHeight="100px"
    :color="loading ? '#ebebeb' : cardColor"
  >
    <LoadingScreen
      :icon="['fab', cardIcon]"
      :loading="loading"
      :color="cardColor"
    />
    <StyledCardContent v-if="!loading">
      <StyledTitle>
        {{ title }}
      </StyledTitle>

      <LikeRow />

      <StyledCircle :loading="loading" class="circle" :color="cardColor" />
      <StyledIcon
        :loading="loading"
        class="card-icon"
        :color="cardColor"
        :icon="['fab', cardIcon]"
      />
    </StyledCardContent>
  </StyledCard>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";
import { AwesomeIcon } from "../../../shared/icons";
import { rgba } from "polished";
import LikeRow from "./LikeRow";
import LoadingScreen from "./LoadingScreen";

const cardProps = {
  title: String,
  likes: String,
  friends: String,
  color: String,
  loading: Boolean
};
const StyledCard = styled(Card, cardProps)`
  border: 2px solid ${props => props.color};
  cursor: pointer;
  padding: 1.75rem 1rem;

  &:hover .circle {
    ${props => (!props.loading ? "transform: translate(70px, -50%);" : "")}
  }

  &:hover .card-icon {
    ${props =>
      !props.loading ? "transform: translate(10px, -50%); color: white;" : ""}
  }
`;

const StyledCardContent = styled.div``;

const StyledCircle = styled("div", cardProps)`
  position: absolute;
  top: 50%;
  right: 0;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  transform: translate(100px, -50%)
    ${props => (props.loading ? "scale(25, 25);" : "scale(1, 1)")};
  background: ${props => props.color};

  transition: transform 0.25s;
`;

const StyledIcon = styled(AwesomeIcon, cardProps)`
  position: absolute;
  top: 50%;
  right: 1.35rem;
  font-size: 28px;
  transform: translate(-50%, -50%);
  color: ${props =>
    props.loading ? props.theme.colorSkeleton : props.color} !important;
  transition: transform 0.25s, color 0.25s;
`;

const StyledTitle = styled.div`
  margin-bottom: 0.575rem;
  font-weight: bold;
  font-size: 0.925rem;
`;

export default {
  props: cardProps,
  components: {
    StyledCard,
    StyledCardContent,
    StyledCircle,
    StyledIcon,
    StyledTitle,
    LoadingScreen,
    LikeRow
  },
  computed: {
    ...mapGetters(["settings"]),
    cardIcon() {
      let icon;

      switch (this.title.toLowerCase()) {
        case "facebook":
          icon = "facebook";
          break;
        case "instagram":
          icon = "instagram";
          break;
        case "twitter":
          icon = "twitter";
          break;
        case "youtube":
          icon = "youtube";
          break;
        default:
          icon = "facebook-f";
          break;
      }

      return icon;
    },
    cardColor() {
      if (!this.settings || !this.settings.theme) {
        return undefined;
      }

      const { theme } = this.settings;

      let color;

      switch (this.title.toLowerCase()) {
        case "facebook":
          color = theme.colorIndigo;
          break;
        case "instagram":
          color = theme.colorPink;
          break;
        case "twitter":
          color = theme.colorBlue;
          break;
        case "youtube":
          color = theme.colorRed;
          break;
        default:
          color = theme.colorPrimary;
          break;
      }

      return rgba(color, 0.75);
    }
  }
};
</script>
