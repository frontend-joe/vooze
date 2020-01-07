<template>
  <styled-wrapper>
    <chip :color="item.type.color">{{ item.type.text }}</chip>
    <styled-title>
      {{ item.name }}
    </styled-title>
    <styled-subtitle>
      {{ item.where }}
    </styled-subtitle>
    <styled-price-block>
      <styled-price>
        {{ item.price }}
      </styled-price>
      <styled-price-subtitle>
        {{ item.pricePerSquareFoot }}
      </styled-price-subtitle>
    </styled-price-block>
    <styled-button>
      <span>
        More info
      </span>
      <styled-button-icon>arrow_right_alt</styled-button-icon>
    </styled-button>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Chip } from "../../../../../shared/chip";
import { MatIcon } from "../../../../../shared/icons";

const StyledWrapper = styled.div`
  flex: 2 0 auto;
`;

const StyledTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding: 0.75rem 0 0.25rem;
  color: ${props => props.theme.colorText};
`;

const StyledSubtitle = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colorSubtitle};
  margin-bottom: 0.75rem;
`;

const StyledPriceBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.colorPrimary};
  margin-bottom: 0.325rem;
`;

const StyledPriceSubtitle = styled.div`
  margin-left: 0.5rem;
  font-size: 11px;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledButton = styled.button`
  color: ${props => props.theme.colorPrimary};
  background: transparent;
  border: 0;
  padding: 0;
  font-weight: bold;
  font-size: 13px;
  display: flex;
  align-items: center;

  &:hover > i {
    transform: translateY(1px) translateX(2px);
  }
`;

const StyledButtonIcon = styled(MatIcon)`
  color: ${props => props.theme.colorPrimary} !important;
  transform: translateY(1px);
  margin-left: 0.25rem;
  transition: transform 0.25s;
`;

export default {
  props: {
    item: Object
  },
  components: {
    StyledWrapper,
    StyledTitle,
    StyledSubtitle,
    StyledPriceBlock,
    StyledPrice,
    StyledPriceSubtitle,
    StyledButton,
    StyledButtonIcon,
    Chip
  }
};
</script>
