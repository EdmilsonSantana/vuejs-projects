import Card from './../../components/card/Card.vue';
import LineChart from './../../components/charts/line/line-chart'
import store from '../../store';

export default {
	
	store,
	computed: {
		investments() {
			return this.$root.investments;
		},
		rateOfReturn() {
			let yAxis = []
			let xAxis = []
			this.$store.state.tickers.forEach(function(tricker, index) {
				if(index > 0) {
					yAxis.push(tricker.last_updated);
					xAxis.push((tricker.price_usd / xAxis[index - 1].price_usd) - 1);
				}
			});
			return {labels: yAxis,  datasets: [ {data: xAxis} ]}
		},
	},

	mounted() {
		this.$root.closeSidenav();
	},

	components: {
		Card,
		LineChart,
	}
};


