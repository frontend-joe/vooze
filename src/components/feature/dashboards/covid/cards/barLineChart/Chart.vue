<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: Object,
    options: Object,
    chartTheme: Array,
    theme: Object
  },
  watch: {
    chartTheme: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.$data._chart.destroy();
        this.renderChart(this.updatedData, this.options);
      }
    }
  },
  mounted() {
    this.renderChart(this.updatedData, this.options);

    // this.$refs.canvas.parentNode.style.height = "300px";
  },
  computed: {
    updatedData() {
      // const ctx = this.$refs.canvas.getContext("2d");
      //
      let data = this.chartData;
      //
      // var gradient = ctx.createLinearGradient(0, 0, 250, 0);
      // gradient.addColorStop(0, this.theme.colorGradientLeft);
      // gradient.addColorStop(1, this.theme.colorGradientRight);
      //
      // data.datasets[0].backgroundColor = gradient;
      // data.datasets[0].pointBackgroundColor = this.theme.colorCardBackground;
      // data.datasets[0].pointBorderColor = this.theme.colorAccent;
      // data.datasets[0].pointRadius = 5;
      // data.datasets[0].pointHoverRadius = 6;

      return data;
    }
  }
};
</script>
