var Ramona = (function() {
	return function(conf) {
		this.die = () => {
			conf._(conf.entry).innerHTML = '';
		}

		/** 
		 * Inner method for getting into dom
		 */
		conf._ = (el) => {
			var all = document.querySelectorAll(el);
			return all.length > 1 ? all : document.querySelector(el);
		}
		if (!conf._(conf.entry)) {
			throw new Error('Make new div with id for new Ramona instance')
		}
		/** 
		 * Duplicate object VIEW for
		 * constantly collection
		 */
		Object.duplicate = (o) => {
	   	var makeArgs = arguments; 
		  function F() {
	      var prop, i=1, arg, val;
	      for (prop in o) {
					if(!o.hasOwnProperty(prop)) continue;
					val = o[prop];
					arg = makeArgs[i++];
					if(typeof arg === 'undefined') break;
					this[prop] = arg;
	     	}
		  }
		  F.prototype = o;
		  return new F();
		}
		// Views
		const views = Object.duplicate(conf.view());

		function render() {
			conf._(conf.entry).innerHTML = conf.view().render();
		}

		/** 
		 * Show template contains in view  
		 * depending on state object property
		 */
		 // console.log(views.__proto__)
		function show(state, view) {
			if (!(view.includes(' id='))) {
				throw new Error('Add id to your view component');
			}
			function parseId(view) {
				var first = view.indexOf(' id=') + 5;
				return view.slice(first, view.indexOf('"', first));
			}
			function parseProtoStr(input) {
				var firstTag = input.slice(input.indexOf('<'), input.indexOf('>')+1);
				var startOfLT = input.indexOf('>');
				var inner = input.slice(startOfLT+1, input.indexOf('</div>')).trim()
				return inner;
			}
			// console.log('#' + parseId(view))
			var id = '#' + parseId(view);
			// console.log(parseId(view) in views.__proto__)
			if (parseId(view) in views.__proto__) {
				var template = views.__proto__[parseId(view)];
					// console.log(state)
				if (state) {
					conf._(id).innerHTML = parseProtoStr(template).trim();
				} else {
					conf._(id).innerHTML = '';
				}
			}
		}

		function rerender() {
			var data = Object.duplicate(conf.state);
			var dataArray = Object.keys(data.__proto__);
			for (var i in data.__proto__) {
				if (dataArray.includes(i)) {
					show(conf.state[i], conf.view()[i]);
				}
			}	
		}

		// Init all template into entry element
		render();
		rerender();
		conf.logic();


		// Watcher
		conf._(conf.entry).onclick = () => {
			setTimeout(function() {
				conf.logic();
				rerender();
				render();
				conf.logic();

			}, 10);
		}
	}

}());