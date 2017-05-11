import RepositoriesTable from './../../components/repositories-table/repositories-table.vue';

export default {

	computed: {
		repositories() {
			return this.$root.repositories;
		},
	},

	mounted() {
		this.$root.closeSidenav();
	},

	components: {
		RepositoriesTable,
	}
};