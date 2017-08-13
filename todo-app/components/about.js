var home = new Ramona({
	in: '#inHome',

	static: {
		title: 'Home page'
	},

	heart() {
		var th = this;
	},

	view() {
		return {
			inhome: `
				<inhome>
					<h3>${this.static.title}</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsa, ex possimus consectetur corporis adipisci dolor omnis molestiae accusantium, quae voluptas, molestias voluptate magni a exercitationem excepturi aperiam laboriosam, numquam aliquam expedita culpa sapiente doloremque eos? Temporibus repudiandae ex ut.</p>
				</inhome>
			`,
			render() {
				return `
					${this.inhome}
				`
			}
		}
	}
});