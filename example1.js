new Ramona({
	entry: '#app',

	data: {
		firstButtonName: 'First close',
		secondButtonName: 'Second close',
	},

	state: {
		first: true,
		second: true
	},

	logic() {
		var $ = this;
		$._('#hide-first').onclick = () => {
			$.state.first ? $.state.first = !$.state.first : $.state.first = !$.state.first;
			$.data.firstButtonName = $.data.firstButtonName == 'First close' ? 'First open' : 'First close';
		}
		$._('#hide-second').onclick = () => {
			$.state.second ? $.state.second = !$.state.second : $.state.second = !$.state.second;
			$.data.secondButtonName = $.data.secondButtonName == 'Second close' ? 'Second open' : 'Second close';
		}
	},

	view() {
		return {
			first: `
				<First>
					<div>
						First Component
					</div>
				</First>
			`,

			second: `
				<Second>
					<div>
						Second Component
					</div>
				</Second>
			`,

			toggler: `
				<Toggler>
					<button id="hide-first">
						${this.data.firstButtonName}
					</button>
					<button id="hide-second">
						${this.data.secondButtonName}
					</button>
					${this.data.firstButtonName}
						${this.data.secondButtonName}
				</Toggler>
			`,

			// Main function for init all views
			render() {
				return `
					${this.toggler}
					<div>
						${this.first}
						${this.second}
					</div>
				`;
			}
		}
	}

});