<template>
  <StyledWrapper>
    <StyledAppItem v-for="app in apps" :key="app.title">
      <StyledAppItemImage :src="app.imageUrl" />
      <StyledAppItemTitle>
        {{ app.title }}
      </StyledAppItemTitle>
    </StyledAppItem>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
`;

const StyledAppItem = styled.button`
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 50%;
`;

const StyledAppItemTitle = styled.span`
  font-size: 0.925rem;
  color: ${props => props.theme.colorText};
`;

const StyledAppItemImage = styled.img`
  height: 30px;
  margin-bottom: 0.5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledAppItem,
    StyledAppItemImage,
    StyledAppItemTitle
  },
  data: function() {
    return {
      apps: [
        {
          title: "Vue",
          imageUrl: require("../../../../assets/images/vue.png")
        },
        {
          title: "Vuex",
          imageUrl: require("../../../../assets/images/vuex.png")
        },
        {
          title: "Atom",
          imageUrl: require("../../../../assets/images/atom.png")
        },
        {
          title: "CSS in JS",
          imageUrl: require("../../../../assets/images/styledcomponents.png")
        }
      ]
    };
  }
};
</script>
