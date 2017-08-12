var newApp = new Ramona({
	in: '#app',

	static: {
		title: 'New App',
		homePage: 'Home',
		aboutPage: 'About',
		blogPage: 'Blog',
	},

	state: {
		home: true,
		about: false,
		blog: false,
	},

	heart() {
		var th = this;

		var Router = (function() {
			function route(el, state, view) {
				th._(el).onclick = () => {
					for (i in th.state) {
						th.state[i] = false
						th.show(th.state[i], th.view()[i]);
					}
					state = true;
					th.show(state, view);
				}
			}
			return {
				home() {
					return route('#getHome', th.state.home, th.view().home);
				},
				about() {
					return route('#getAbout', th.state.about, th.view().about);
				},
				blog() {
					return route('#getBlog', th.state.blog, th.view().blog);
				}
			}
		}());


		Router.home();
		Router.about();
		Router.blog();


	},

	view() {
		return {
			navigation: `
				<navigation>
					<h1>${this.static.title}</h1>
					<a class="route" href="javascript: void(0)" id="getHome">${this.static.homePage}</a>
					<a class="route" href="javascript: void(0)" id="getAbout">${this.static.aboutPage}</a>
					<a class="route" href="javascript: void(0)" id="getBlog">${this.static.blogPage}</a>
				</navigation>
			`,
			home: `
				<home>
					<div>
						Home page
					</div>
				</home>
			`,
			about: `
				<about>
					<div>
						About page
					</div>
				</about>
			`,
			blog: `
				<blog>
					<div>
						Blog page
					</div>
				</blog>
			`,
			render() {
				return `
					${this.navigation}
					${this.home}
					${this.about}
					${this.blog}
				`
			}
		}
	}
});