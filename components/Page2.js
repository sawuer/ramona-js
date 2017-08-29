var $_Page2 = Ramona.create({

	core: {
		title: 'Page 2',
		text: '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, mollitia fugit. Eos rem temporibus quos recusandae iste vel quaerat excepturi.'
	},

	view() {
		return `
			<h2>{ title }</h2>
			<p>{ text }</p>		
		`
	},

	logic() {}

});