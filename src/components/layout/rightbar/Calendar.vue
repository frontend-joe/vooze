<template>
  <StyledWrapper>
    <CalendarHeader />
    <CalendarBody />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    CalendarHeader,
    CalendarBody
  },
  data: function() {
    return {
      theTime: "",
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  methods: {
    checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      } // add zero in front of numbers < 10
      return i;
    },
    startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      this.theTime = h + ":" + m + ":" + s;
      setTimeout(this.startTime, 500);
    }
  },
  computed: {
    theDayOfWeek() {
      let today = new Date();
      console.log("today", today);
      return this.days[today.getDay()];
    }
  },
  created: function() {
    this.startTime();
  }
};
</script>
