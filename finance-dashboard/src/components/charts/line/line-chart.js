import { Line, mixins } from 'vue-chartjs'

export default Line.extend({
  mixins: [mixins.reactiveProp],
  mounted () {
    this.renderChart(this.chartData, {
      responsive: true,
    });
  }
})