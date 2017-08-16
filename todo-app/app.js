var App = new Ramona('#todoApp', {
  static: {
    appName: 'Ramona JS todo-manager',
    exampleTodos: ['Walk the dog']
  },

	state: {
		todo: false,
		home: true,
	},

	heart() {
		var th = this;
		/**
		 * Todo * * * * * * * * * * 
		 */
		var todoManipulator = (function() {
			// All todos
			var todos = th.static.exampleTodos;
			// Private methods
			function printTodoList(el) {
				if (th._(el)) {
					var result = '';
					todos.forEach(i => {
						result += `
							<li class="animated collection-item">
								${i} 
								<button class="btn-floating waves-effect waves-light red">
									<i class="material-icons">delete</i>
								</button>
							</li>
						`;
					});
					th._(el).innerHTML = result;
					deleteTodo();
				}
				addTodo('#add-todo', '#new-todo')
			}

			function addTodo(btn, input) {
				if (th._(btn)) {
					th._(btn).onclick = (e) => {
						var val = th._(input).value;
						e.preventDefault();
						if (val !== '') {
							todos.push(val);
							printTodoList('#todo-list');
							var lastIndex = th._('#todo-list').querySelectorAll('li').length-1;
							var last = th._('#todo-list').querySelectorAll('li')[lastIndex];
								last.classList.add('fadeInDown');
						}
						th._(input).value = '';	
					}
				}
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
							if (todos[i] == parseTodo.trim()) {
								e.target.parentNode.remove();
								todos.splice(i, 1);
							} 
						}
					}
				});
			}

			return {
				init() {
					printTodoList('#todo-list');
				}
			}

		}());
		/* * * * * * End of todoManipulator * * * * * */	

	

		/**
		 * Router * * * * * * * * * * 
		 */
		var router = (function() {

			function route(el, state, view) {
				th._(el).onclick = () => {
					for (i in th.state) {
						th.state[i] = false
						th.show(th.state[i], th.view()[i]);
					}
					state = true;
					th.show(state, view);
					if (el === '#getTodo') {
						Todo.renderMainTemplate()
						todoManipulator.init();	
					}
					if (el === '#getAbout') {
						Home.renderMainTemplate()
					}
				}
			}

			return {
				todo() {
					return route('#getTodo', th.state.todo, th.view().todo);
				},
				home() {
					return route('#getAbout', th.state.home, th.view().home);
				}
			}

		}());
		/** End of router * * * * * * * * * */

		todoManipulator.init();
		router.todo();
		router.home();
		
	},

	view() {
		return { 
			header: `
				<header>
				  <nav>
				    <div class="nav-wrapper">
				      <a href="#" class="brand-logo center">${this.static.appName}</a>
				      <ul id="nav-mobile" class="left hide-on-med-and-down">
				        <li><a id="getAbout" href="javascript: void(0)">Home</a></li>
				        <li><a id="getTodo" href="javascript: void(0)">Todo</a></li>
				      </ul>
				    </div>
				  </nav>
				  <br>
				</header>
			`,

			todo: `
				<todo>
					<div class="animated fadeIn" id="todo"></div>
				</todo>
			`,

			home: `
				<home>
					<div class="animated fadeIn" id="home"></div>
				</home>
			`,

			render() {
				return `
					<div class="container">
						<br>
						${this.header}
						${this.todo}
						${this.home}
					</div>
				`;
			}

		}
	}
});
