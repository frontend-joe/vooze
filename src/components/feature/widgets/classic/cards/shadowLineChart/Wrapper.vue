<template>
  <Card :primary="cardTheme === 'primary'">
    <CardHeader>
      <CardTitle
        :forDark="cardTheme === 'primary'"
        cardTitle="Total Reach"
        cardSubtitle="This month impressions"
      />
      <DropdownWrapper>
        <MatIconButton @click="handleToggleActiveDropdown($event)"
          >more_vert</MatIconButton
        >
        <DropdownMenu
          distance="0px"
          :isOpen="app.activeDropdown === 'shadowLineChart'"
        >
          <StyledDropdownButton @click="toggleCardTheme('default')">
            <Badge color="Grey" />
            <StyledDropdownButtonText>
              Light
            </StyledDropdownButtonText>
          </StyledDropdownButton>
          <StyledDropdownButton @click="toggleCardTheme('primary')">
            <Badge color="Primary" />
            <StyledDropdownButtonText>
              Dark
            </StyledDropdownButtonText>
          </StyledDropdownButton>
        </DropdownMenu>
      </DropdownWrapper>
    </CardHeader>
    <CardContent>
      <styled-wrapper>
        <apexchart
          v-if="chartOptions && series"
          width="100%"
          :height="250"
          type="line"
          :options="chartOptions"
          :categories="categories"
          :series="series"
        ></apexchart>
      </styled-wrapper>
    </CardContent>
  </Card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { rgba } from "polished";
import VueApexCharts from "vue-apexcharts";
import styled from "vue-styled-components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "../../../../../shared/card";
import { Badge } from "../../../../../shared/common";
import { DropdownMenu, DropdownWrapper } from "../../../../../shared/dropdown";
import { MatIconButton } from "../../../../../shared/buttons";

const StyledWrapper = styled.div``;

const StyledDropdownButton = styled.button`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  background: transparent;
  border: 0;
  padding: 0 1rem;
  height: 48px;
  line-height: 48px;
  font-size: 13px;

  &:hover {
    background: ${props => props.theme.colorHover};
  }
`;

const StyledDropdownButtonText = styled.span`
  margin-left: 0.5rem;
  color: ${props => props.theme.colorSubtitle};
`;

export default {
  components: {
    StyledWrapper,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    apexchart: VueApexCharts,
    MatIconButton,
    DropdownWrapper,
    DropdownMenu,
    StyledDropdownButton,
    StyledDropdownButtonText,
    Badge
  },
  data: function() {
    return {
      cardTheme: "default",
      series: [
        {
          name: "series1",
          data: [12, 30, 15, 40, 24, 54, 19, 47, 32]
        }
      ],
      categories: ["Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
      dropdownIsOpen: false
    };
  },
  methods: {
    ...mapActions(["toggleActiveDropdown"]),
    handleToggleActiveDropdown(e) {
      console.log("handleToggleActiveDropdown", e);
      e.stopPropagation();
      this.toggleActiveDropdown("shadowLineChart");
    },
    toggleCardTheme(cardTheme) {
      this.cardTheme = cardTheme;
      this.toggleActiveDropdown(undefined);
    }
  },
  computed: {
    ...mapGetters(["settings", "app"]),
    chartOptions: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        return undefined;
      }

      const { theme } = this.settings;

      let stroke = {
        curve: "smooth",
        width: 4,
        lineCap: "round",
        borderRadius: 20
      };

      const options = {
        colors: this.cardTheme === "default" ? theme.chartColors : ["white"],
        grid: {
          show: true,
          borderColor:
            this.cardTheme === "default"
              ? rgba("black", 0.05)
              : rgba("white", 0.05),
          padding: {
            top: 0,
            right: 0,
            bottom: -15,
            left: 30
          }
        },
        chart: {
          toolbar: {
            show: false
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 30,
            left: 0,
            blur: 4,
            color: theme.colorAccent,
            opacity: 0.1175
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 5, 95, 100],
            colorStops: [
              {
                offset: 0,
                color:
                  this.cardTheme === "default" ? "#fff" : theme.colorPrimary,
                opacity: 1
              },
              {
                offset: 10,
                color:
                  this.cardTheme === "default" ? theme.colorPrimary : "#fff",
                opacity: 50
              },
              {
                offset: 90,
                color:
                  this.cardTheme === "default" ? theme.colorSecondary : "#fff",
                opacity: 50
              },
              {
                offset: 100,
                color:
                  this.cardTheme === "default" ? "#fff" : theme.colorPrimary,
                opacity: 1
              }
            ]
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: stroke,
        yaxis: {
          show: true,
          showAlways: true,
          tickAmount: 4,
          axisBorder: {
            show: false,
            color: theme.colorBorder
          },
          axisTicks: {
            show: true,
            max: 2
          },
          labels: {
            style: {
              maxWidth: 30,
              fontSize: "12px",
              fontFamily: theme.fontFamily,
              color:
                this.cardTheme === "default"
                  ? rgba("black", 0.25)
                  : rgba("white", 0.5)
            },
            formatter: function(value) {
              return `${value}K`;
            }
          }
        },
        xaxis: {
          show: false,
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        legend: {
          show: true
        },
        tooltip: {
          enabled: false
        }
      };

      //console.log("options", options);

      return options;
    }
  }
};
</script>
