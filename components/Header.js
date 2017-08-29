var $_Header = Ramona.create({

	core: {
		title: 'New Ramona App',
		page1Name: 'Page 1',
		page2Name: 'Page 2',
	},

	view() {
		return `
			<h1>{title}</h1>
			<ul>
				<li>
					<a id="page_1" href="">{page1Name}</a>
				</li>
				<li>
					<a id="page_2" href="">{page2Name}</a>
				</li>
			</ul>
		`
	},

	logic() {}

});