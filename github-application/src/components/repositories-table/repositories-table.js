export default {

	props: {
		repositories: {
			type: Array,
			required: true
		}
	},

	computed: {
		repositoriesFound() {
			return this.repositories ? 
				this.repositories > 0 : false;
		}
	},

	methods: {
		sortRepositories(sorting) {
			this.repositories.sort((a, b) => {
				let order = 0;
				if(a[sorting.name] > b[sorting.name]) {
					order = sorting.type == 'asc' ? 1: -1;
				} else if(a[sorting.name] < b[sorting.name]) {
					order = sorting.type == 'asc' ? -1: 1;
				}
				return order;
			});
		}
	}
};