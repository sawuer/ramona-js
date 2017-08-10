// new Ramona({
// 	entry: '#app',

// 	data: {
// 		firstButtonName: 'First close',
// 		secondButtonName: 'Second close',
// 	},

// 	state: {
// 		first: true,
// 		second: true
// 	},

// 	logic() {
// 		var $ = this;
// 		$._('#hide-first').onclick = () => {
// 			$.state.first ? $.state.first = !$.state.first : $.state.first = !$.state.first;
// 			$.data.firstButtonName = $.data.firstButtonName == 'First close' ? 'First open' : 'First close';
// 		}
// 		$._('#hide-second').onclick = () => {
// 			$.state.second ? $.state.second = !$.state.second : $.state.second = !$.state.second;
// 			$.data.secondButtonName = $.data.secondButtonName == 'Second close' ? 'Second open' : 'Second close';
// 		}
// 	},

// 	view() {
// 		return {
// 			first: `
// 				<first>
// 					<div>
// 						First Component
// 					</div>
// 				</first>
// 			`,

// 			second: `
// 				<second>
// 					<div>
// 						Second Component
// 					</div>
// 				</second>
// 			`,

// 			toggler: `
// 				<toggler>
// 					<button id="hide-first">
// 						${this.data.firstButtonName}
// 					</button>
// 					<button id="hide-second">
// 						${this.data.secondButtonName}
// 					</button>
// 					${this.data.firstButtonName}
// 						${this.data.secondButtonName}
// 				</toggler>
// 			`,

// 			// Main function for init all views
// 			render() {
// 				return `
// 					${this.toggler}
// 					<div>
// 						${this.first}
// 						${this.second}
// 					</div>
// 				`;
// 			}
// 		}
// 	}

// });

new Ramona({
	entry: '#app',
	data: {
		title: 'Title',
		btnName: 'Change Title'
	},
	state: {
		myHeader: true
	},
	logic() {
		var $ = this;

		$._('#change-title').onclick = () => {
			$.data.title = 'new title';
			console.log($.data.title)
		}
	},
	view() {
		return {
			myHeader: `
				<div id="myHeader">
					${this.data.title}
					<button id="change-title">${this.data.btnName}</button>
				</div>
			`,
			render() {
				return `
					${this.myHeader}
				`
			}
		}
	}
});









