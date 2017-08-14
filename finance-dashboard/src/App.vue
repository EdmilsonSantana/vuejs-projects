<template>
  <div>
  	<md-toolbar class="md-medium">
  		<md-button @click.native="toggleSidenav()" class="md-icon-button">
  			<md-icon>menu</md-icon>
  		</md-button>

  		<h2 class="md-title">Finance Dashboard</h2>

  		<md-input-container style="flex: 1">
  			<md-input v-model="investment" placeholder="Search for a investment" />
  		</md-input-container>
  	</md-toolbar>

  	<md-sidenav class="md-left" ref="sidenav">
  		<md-toolbar class="md-medium">
  			<md-button @click.native="toggleSidenav()" class="md-icon-button">
  				<md-icon>menu</md-icon>
  			</md-button>
  			<h2 class="md-title">Finance Dashboard</h2>
  		</md-toolbar>
  		<md-list>
  			<md-list-item>
  				<router-link :to="{name: 'portfolio'}">
  					Portfolio
  				</router-link>
  			</md-list-item>
  		</md-list>
  	</md-sidenav>

  	<md-layout>
   		<router-view></router-view>
    </md-layout>
  </div>
</template>

<script>
  import _ from 'lodash';
	import store from './store';
  import { router } from './bootstrap';
  
  export default {
    name: 'FinanceDashboard',
    router,
		store,
    data() {
    	return {
    		investment: null,
    		investments: [],
    	};
    },

    watch: {
    	investment(value) {
    		this.newInvestment(value);
    	}
    }, 

    methods: {
			
    	toggleSidenav() {
    		this.$refs.sidenav.toggle();
    	}, 

      closeSidenav() {
        this.$refs.sidenav.close();
      },

    	newInvestment: _.debounce(
        function(investment) {
    			if(investment) {
    				this.investments.push(investment);
						this.$store.dispatch("resetTickers");
    			}
    	}, 500),

			fetchTicker() {
				if(this.investment) {
						this.$http.get(`${this.investment}/`)
    					.then(({data}) => this.$store.dispatch("newTicker", data[0]));
    		}
			},
    },

    mounted() {
    	  
			setInterval(() => this.fetchTicker(), 6000)
    }
  }
</script>
