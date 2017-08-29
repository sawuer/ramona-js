var $_App = Ramona.create({
	core: {
		title: 'New Ramona App'
	},

	view() {
		return `
			<Header></Header>
			<Page1></Page1>
			<Page2></Page2>
		`
	},

	logic() {

	}
});