new Ramona({
	entry: '#app',

	data: {
		firstButtonName: 'First open',
		secondButtonName: 'Second open',
	},

	state: {
		first: true,
		second: true,
	},

	logic() {
		var $ = this;

		$._('#hide-first').onclick = () => {
			$.state.first ? $.state.first = !$.state.first : $.state.first = !$.state.first;
			$.data.firstButtonName = $.data.firstButtonName == 'First close' ? 'First open' : 'First close';
		}

		$._('#hide-second').onclick = () => {
			$.data.secondButtonName = $.data.secondButtonName == 'Second close' ? 'Second open' : 'Second close';
			$.state.second ? $.state.second = !$.state.second : $.state.second = !$.state.second;
		}
	},

	view() {
		return {
			first: `
				<first>
					<div>
						First Component
					</div>
				</first>
			`,

			second: `
				<second>
					<div>
						Second Component
					</div>
				</second>
			`,

			toggler: `
				<toggler>
					<button id="hide-first">First</button>
					<button id="hide-second">Second</button>
					<div>
						${this.data.firstButtonName}
						${this.data.secondButtonName}
					</div.
				</toggler>
			`,

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










