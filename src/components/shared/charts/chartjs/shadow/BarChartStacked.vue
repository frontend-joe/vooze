<script>
import { mapGetters } from "vuex";
import { rgba, setHue } from "polished";
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartData: Object,
    options: {
      type: Object,
      default: function() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          }
        };
      }
    },
    chartTheme: Array
  },
  mounted() {
    console.log("mounted", this.chartDataWithTheme, this.optionsWithTheme);

    this.renderChart(this.chartDataWithTheme, this.optionsWithTheme);
  },
  watch: {
    chartTheme: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.$data._chart.destroy();
        this.renderChart(this.chartDataWithTheme, this.optionsWithTheme);
      }
    },
    settings: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.$data._chart.destroy();
        this.renderChart(this.chartDataWithTheme, this.optionsWithTheme);
      }
    }
  },
  computed: {
    ...mapGetters(["settings"]),
    chartDataWithTheme: function() {
      if (
        !this.settings ||
        !this.settings.theme ||
        !this.settings.theme.chartColors
      ) {
        console.log("settings is null", this.options);
        return undefined;
      }

      var chart = document.getElementById("bar-chart").getContext("2d");

      const { theme } = this.settings;
      //const barFillOpacity = 0.7;
      const COLORS = theme.chartColors;

      let datasets = this.chartData.datasets;

      let bar1 = chart.createLinearGradient(0, 0, 0, 400);
      let bar2 = chart.createLinearGradient(0, 0, 0, 400);
      let bar3 = chart.createLinearGradient(0, 0, 0, 400);

      let gradientList = [bar1, bar2, bar3];

      for (let i = 0; i < datasets.length; i++) {
        gradientList[i].addColorStop(0, rgba(COLORS[i], 1));
        gradientList[i].addColorStop(0.66, setHue(10, COLORS[i]));
        gradientList[i].addColorStop(1, rgba(COLORS[i], 0));

        datasets[i].backgroundColor = gradientList[i];
      }

      let newChartData = this.chartData;

      newChartData.barPercentage = 0.25;

      return newChartData;
    },
    optionsWithTheme: function() {
      if (!this.settings || !this.settings.theme) {
        return undefined;
      }

      const { theme } = this.settings;

      const layout = {
        padding: {
          left: 16,
          right: 16,
          top: 0,
          bottom: 10
        }
      };

      let scales = {
        xAxes: [
          {
            stacked: true,
            display: true,
            scaleLabel: {
              display: false
            },
            gridLines: {
              display: true,
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder
            },
            ticks: {
              fontFamily: theme.fontFamily,
              fontSize: 12,
              fontStyle: "normal",
              fontColor: theme.colorLabel
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              callback: function(value) {
                return value + "k";
              },
              padding: 10,
              suggestedMax: 50,
              maxTicksLimit: 4,
              fontFamily: theme.fontFamily,
              fontSize: 10,
              fontStyle: "normal",
              fontColor: theme.colorLabel
            },
            display: true,
            gridLines: {
              drawBorder: false,
              display: true,
              color: theme.colorBorder,
              zeroLineColor: theme.colorBorder
            }
          }
        ]
      };

      const newOptions = {
        ...this.options,
        scales,
        layout,
        barPercentage: 0.1
      };

      console.log("new options", newOptions);

      return newOptions;
    }
  }
};
</script>
