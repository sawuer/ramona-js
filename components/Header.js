var $_Header = Ramona.create({

	core: {
		title: 'New Ramona App',
	},

	view() {
		return `
			<h1>{% title %}</h1>
			<ul>
				<li><a id="page_1" href="">Page 1</a></li>
				<li><a id="page_2" href="">Page 2</a></li>
			</ul>
		`
	},

	logic() {
		var self = this;
		this.get('#page_1').onclick = function(e) {
			e.preventDefault();
		}

		this.get('#page_2').onclick = function(e) {
			e.preventDefault();
		}
	}

});