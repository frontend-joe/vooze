<template>
  <StyledWrapper>
    <StyledMonth>{{ month }}</StyledMonth>
    <StyledDay>{{ day }}</StyledDay>
    <StyledYear>{{ year }}</StyledYear>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledMonth = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  font-size: 20px;
  color: ${props => props.theme.colorSubtitle};
`;

const StyledDay = styled.div`
  font-size: 84px;
  font-weight: 200;
  color: ${props => props.theme.colorText};
  margin-bottom: 1.5rem;
`;

const StyledYear = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledWrapper,
    StyledMonth,
    StyledYear,
    StyledDay
  },
  data: function() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  computed: {
    month() {
      const today = new Date();
      return this.months[today.getMonth()];
    },
    day() {
      const today = new Date();
      return today.getDate();
    },
    year() {
      const today = new Date();
      return today.getFullYear();
    }
  }
};
</script>
