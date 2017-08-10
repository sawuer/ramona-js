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
		function show(state, view) {
			function parseTagName(view) {
				return view.slice((view.indexOf('<') + 1), view.indexOf('>'));
			}
			function parseProtoStr(input) {
				var openTag = '<'+parseTagName(view)+'>';
				var closedTag = '</'+parseTagName(view)+'>';
				return innerInTags = input.slice(input.indexOf(openTag) + openTag.length, input.indexOf(closedTag));
			}
			if (parseTagName(view).toLowerCase() in views.__proto__) {
				var template = views.__proto__[parseTagName(view).toLowerCase()];
				if (state) {
					conf._(parseTagName(view)).innerHTML = parseProtoStr(template).trim();
				} else {
					conf._(parseTagName(view)).innerHTML = '';
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
		render()
		conf.logic();
		rerender();


		// Watcher
		conf._(conf.entry).onclick = () => {
			render();
			rerender();
			conf.logic();
		}
	}

}());