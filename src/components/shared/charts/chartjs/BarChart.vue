<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    chartData: Object,
    options: Object,
    chartTheme: Array
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartTheme: function(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.$data._chart.destroy();
        this.renderChart(this.chartData, this.options);
      }
    }
  }
};
</script>
