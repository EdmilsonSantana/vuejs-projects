<template>
  <div>
  	<md-toolbar class="md-medium">
  		<md-button @click.native="toggleSidenav()" class="md-icon-button">
  			<md-icon>menu</md-icon>
  		</md-button>

  		<h2 class="md-title">GitHub</h2>

  		<md-input-container style="flex: 1">
  			<md-input v-model="username" placeholder="Search username" />
  		</md-input-container>
  	</md-toolbar>

  	<md-sidenav class="md-left" ref="sidenav">
  		<md-toolbar class="md-medium">
  			<md-button @click.native="toggleSidenav()" class="md-icon-button">
  				<md-icon>menu</md-icon>
  			</md-button>
  			<h2 class="md-title">GitHub</h2>
  		</md-toolbar>
  		<md-list>
  			<md-list-item>
  				<router-link :to="{name: 'repositories'}">
  					Repositories
  				</router-link>
  			</md-list-item>
  			<md-list-item>
  				<router-link :to="{name: 'user'}">
  					User
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
  import { router } from './bootstrap';
  
  export default {
    name: 'GitHubApplication',
    router,

    data() {
    	return {
    		user: null,
    		username: null,
    		repositories: [],
    	};
    },

    watch: {
    	username(value) {
    		this.setUsername(value);
    	}
    }, 

    methods: {
    	fetchUser(username) {
    		this.$http.get(`/users/${username}`)
    		.then(({data}) => this.user = data);
    	},
    	fetchRepositories(username) {
    		this.$http.get(`users/${username}/repos`)
    			.then(({data}) => this.repositories = data);
    	},
    	toggleSidenav() {
    		this.$refs.sidenav.toggle();
    	}, 

      closeSidenav() {
        this.$refs.sidenav.close();
      },

    	setUsername: _.debounce(
        function(username) {
    			if(username) {
    				this.fetchUser(username);
    				this.fetchRepositories(username);
    			} else {
    				this.user = null;
    				this.repositories = null;
    			}

    	}, 500),
    },

    mounted() {
    	
    }
  }
</script>
