var app = new Ramona({
	in: '#app',

  static: {
    appName: 'Todo',
    exampleTodos: ['Walk the dog', 'Lorem ipsum', 'Some do']
  },

	state: {
		list: true
	},

	heart() {
		var th = this;

		var Todo = (function() {
			// All todos
			var todos = th.static.exampleTodos;
			// Private methods
			function printTodoList(el) {
				if (th._(el)) {
					var result = '';
					todos.forEach(i => {
						result += `<li>${i}<button>X</button></li>`;
					});
					th._(el).innerHTML = result;
					deleteTodo();
				}
				addTodo('#add-todo', '#new-todo')
			}

			function addTodo(btn, input) {
				th._(btn).onclick = (e) => {
					var val = th._(input).value;
					e.preventDefault();
					if (val !== '') {
						todos.push(val);
						printTodoList('#todo-list');
					}
					th._(input).value = '';	
				}
			}

			function showList(elClick) {
				th._(elClick).onclick = () => {
					if (th.state.list === true) {
						th.state.list = false;
					} else {
						th.state.list = true;
					}
					th.show(th.state.list, th.view().list);
					printTodoList('#todo-list');
				}
				printTodoList('#todo-list');
			}

			function deleteTodo() {
				var list = th._('#todo-list');
				var todo = list.querySelectorAll('li');
				var todoX = list.querySelectorAll('li button');
				todoX.forEach(i => {
					i.onclick = (e) => {
						var innerText = e.target.parentNode.innerHTML;
						var parseTodo = innerText.slice(0, innerText.indexOf('<'))
						for (var i = 0; i <= todos.length; i++) {
							if (todos[i] == parseTodo) {
								e.target.parentNode.remove();
								todos.splice(i, 1);
							} 
						}
					}
				});
			}

			return {
				init() {
					showList('#show-list')
				}
			}

		}());

		Todo.init();

	},

	view() {
		return { 
			header: `
				<header>
					<h1>${this.static.appName}</h1>
				</header>
			`,

			list: `
				<list>
					<ul id="todo-list"></ul>
				</list>
			`,

			form: `
				<form>
					<form type="text">
						<input id="new-todo"  type="text" />
						<button id="add-todo" type="submit">Submit</button>
					</form>
					<button id="show-list">List toggle</button>
				</form>
			`,

			render() {
				return `
					${this.header}
					${this.form}
					${this.list}
				`;
			}
		}
	}

});










