var app = new Ramona({
	ENTRY: '#app',

  STATIC: {
    appName: 'Todo',
    exampleTodos: ['Walk the dog', 'Lorem ipsum', 'Some do']
  },

	STATES: {
		todolist: true
	},

	LOGIC() {
		var th = this;

		var Todo = (function() {
			// All todos
			var todos = th.STATIC.exampleTodos;
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
					if (th.STATES.todolist === true) {
						th.STATES.todolist = false;
					} else {
						th.STATES.todolist = true;
					}
					th.show(th.STATES.todolist, th.VIEW().todolist);
					printTodoList('#todo-list');
				}
				printTodoList('#todo-list');
			}

			function deleteTodo() {
				var todoList = th._('#todo-list');
				var todo = todoList.querySelectorAll('li');
				var todoX = todoList.querySelectorAll('li button');
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

	VIEW() {
		return { 
			header: `
				<header>
					<h1>${this.STATIC.appName}</h1>
				</header>
			`,

			todolist: `
				<todolist>
					<ul id="todo-list"></ul>
				</todolist>
			`,

			appform: `
				<appform>
					<form type="text">
						<input id="new-todo"  type="text" />
						<button id="add-todo" type="submit">Submit</button>
					</form>
					<button id="show-list">List toggle</button>
				</appform>
			`,

			render() {
				return `
					${this.header}
					${this.appform}
					${this.todolist}
				`;
			}
		}
	}

});










