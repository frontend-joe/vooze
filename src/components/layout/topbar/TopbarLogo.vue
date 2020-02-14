<template>
  <StyledWrapper>
    <StyledImage
      :src="
        settings.themeModeId !== 'light'
          ? require('../../../assets/images/vooze-logo.png')
          : require('../../../assets/images/vooze-logo-dark.png')
      "
    />
  </StyledWrapper>
</template>

<script>
import { mapGetters } from "vuex";
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  flex: 1;
  width: calc(200px - 64px + 1rem);

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    flex: 0 0 calc(200px - 64px + 1rem);
  }
`;

const StyledImage = styled.img`
  height: 22px;
  transform-origin: left;
  transform: scale(0.85, 0.85);
  transition: transform 0.25s;

  @media (min-width: ${props => props.theme.screenWidthSm}) {
    transform: scale(1, 1);
  }
`;

export default {
  components: {
    StyledWrapper,
    StyledImage
  },
  computed: {
    ...mapGetters(["settings"])
  }
};
</script>
