<template>
  <StyledCard overflowHidden minHeight="100px" :color="cardColor">
    <StyledTitle>
      {{ title }}
    </StyledTitle>

    <StyledLikeRow>
      <StyledLikeBlock>
        <StyledLikeBlockLabel>
          Likes
        </StyledLikeBlockLabel>
        <StyledLikeBlockValue>
          2.5k
        </StyledLikeBlockValue>
      </StyledLikeBlock>
      <StyledLikeBlock>
        <StyledLikeBlockLabel>
          Reach
        </StyledLikeBlockLabel>
        <StyledLikeBlockValue>
          1.4k
        </StyledLikeBlockValue>
      </StyledLikeBlock>
    </StyledLikeRow>

    <StyledCircle class="circle" :color="cardColor" />
    <StyledIcon
      class="card-icon"
      :color="cardColor"
      :icon="['fab', cardIcon]"
    />
  </StyledCard>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";
import { Card } from "../../../shared/card";
import { AwesomeIcon } from "../../../shared/icons";
import { rgba } from "polished";

const cardProps = {
  title: String,
  likes: String,
  friends: String,
  color: String
};
const StyledCard = styled(Card, cardProps)`
  border: 2px solid ${props => props.color};
  cursor: pointer;
  padding: 1.75rem 1rem;

  &:hover .circle {
    transform: translate(70px, -50%);
  }

  &:hover .card-icon {
    color: white;
    transform: translate(10px, -50%);
  }
`;

const StyledCircle = styled("div", cardProps)`
  position: absolute;
  top: 50%;
  right: 0;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  transform: translate(100px, -50%);
  background: ${props => props.color};

  transition: transform 0.25s;
`;

const StyledIcon = styled(AwesomeIcon, cardProps)`
  position: absolute;
  top: 50%;
  right: 1.35rem;
  font-size: 28px;
  transform: translate(-50%, -50%);
  color: ${props => props.color};
  transition: transform 0.25s, color 0.25s;
`;

const StyledTitle = styled.div`
  margin-bottom: 0.575rem;
  font-weight: bold;
  font-size: 0.925rem;
`;

const StyledLikeRow = styled.div`
  display: flex;
`;

const StyledLikeBlock = styled.div`
  border-right: 1px solid ${props => props.theme.colorBorder};
  padding-right: 0.325rem;
  margin-right: 0.325rem;
  display: flex;
  align-items: center;

  &:last-child {
    border: 0;
  }
`;

const StyledLikeBlockLabel = styled.div`
  font-size: 12px;
  color: ${props => props.theme.colorSubtitle};
  margin-right: 0.325rem;
`;

const StyledLikeBlockValue = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.colorText};
`;

export default {
  props: cardProps,
  components: {
    StyledCard,
    StyledCircle,
    StyledIcon,
    StyledTitle,
    StyledLikeRow,
    StyledLikeBlock,
    StyledLikeBlockLabel,
    StyledLikeBlockValue
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
