var todo = new Ramona({
	in: '#inTodo',

	static: {
		title: 'Todo App'
	},

	heart() {
		var th = this;
	},

	view() {
		return {

			inTodo: `
				<inTodo>
					<h3>${this.static.title}</h3>
					<form class="col s12">
			      <div class="row">
			        <div class=" col s4">
			          <label for="new-todo">Todo</label>
								<input id="new-todo" class="validate" placeholder="Placeholder" type="text" />
			        </div>
			        <div class=" col s4">
			        	<br>
								<button class="waves-effect waves-light btn" id="add-todo">Add todo</button>
			        </div>
			      </div>
			    </form>
					<ul class="collection" id="todo-list"></ul>				
				</inTodo>
			`,

			render() {
				return `
					${this.inTodo}
				`
			}
		}
	}
});











