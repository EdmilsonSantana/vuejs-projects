import UserCard from './../../components/user-card/user-card.vue';

export default {

	computed: {
		user() {
			return this.$root.user
		}, 
	},

	mounted() {
		this.$root.closeSidenav();
	},

	components: {
		UserCard,
	}
};