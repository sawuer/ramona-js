var app = new Ramona({
	entry: '#app',

	data: {
		firstBtnName: 'First open',
		secondBtnName: 'Second open',
	},

	state: {
		first: true,
		second: true,
	},

	logic() {
		var $ = this;

		$._('#hide-first').onclick = () => {
			if ($.state.first) {
				$.state.first = !$.state.first;
			} else {
				$.state.first = !$.state.first
			}

			if ($.data.firstBtnName == 'First open') {
				$.data.firstBtnName = 'First close';
			} else {
				$.data.firstBtnName = 'First open';
			}
		}

		$._('#hide-second').onclick = () => {
			if ($.state.second) {
				$.state.second = !$.state.second;
			} else {
				$.state.second = !$.state.second
			}

			if ($.data.secondBtnName == 'Second open') {
				$.data.secondBtnName = 'Second close';
			} else {
				$.data.secondBtnName = 'Second open';
			}
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
						${this.data.firstBtnName}
						${this.data.secondBtnName}
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










