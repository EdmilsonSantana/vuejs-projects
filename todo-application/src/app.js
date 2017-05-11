var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todo: null,
    editTodo: null,
    todos: [],
  },

  methods: {
  	add(todo) {
  		if(this.todoIsValid) {
  			this.todos.push({
  				content: todo,
  				finished: false,
  				isEdited: false,
  			});
  			this.todo = null;
  		}
  	},
  	remove(todo) {
  		this.todos = this.todos.filter(item => item != todo);
  	},
  	edit(todo) {
  		this.editTodo = todo.content;
  		todo.isEdited = true;
  	},
  	update(todo) {
  		if(this.editTodoIsValid) {
  			todo.isEdited = false;
  			todo.content = this.editTodo;
  		}
  	}
  },

  computed: {
  	todoIsValid() {
  		return this.todo;
  	},
  	editTodoIsValid() {
  		return this.editTodo;
  	},
  	isBeingEdited() {
  		return this.todos
  			.filter(todo => todo.isEdited).length > 0;
  	}
  }

})