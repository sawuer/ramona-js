var $_App = Ramona.create({

	core: {
		someText: 'Lorem ipsum dolor sit amet.',
		someText2: 'Lorem ipsum dolor sit amet2.'
	},

	view() {
		return `
			{% someText2 %}
			<Header></Header>
			<Aside></Aside>
		`
	},

	logic() {}

});




var $_Header = Ramona.create({

	core: {
		title: 'First Ramona App',
		title2: 'First Ramona App2',
		changeBtnTitle: 'Change title',
	},

	view() {
		return `
			<h1> {% title %} </h1>
			<h1> {% title2 %} </h1>
			<button onclick="" id="header-btn"> {% changeBtnTitle %} </button>
			<button onclick="" id="header-btn2"> {% changeBtnTitle %} </button>
		`
	},

	logic() {
		this.get('#header-btn').onclick = () => {
			this.stateUp('title', 'New title');
		};
		this.get('#header-btn2').onclick = () => {
			this.stateUp('title2', 'New title2');
		};
	}

});




var $_Aside = Ramona.create({
	
	core: {
		title: 'Aside component'
	},

	view() {
		return `
			<p>{% title %}</p>
		`
	},

	logic() {

	}

});

