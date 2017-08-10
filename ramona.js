var Ramona = (function() {
	return function(conf) {
		this.die = () => {
			conf.$(conf.ENTRY).innerHTML = '';
		}
		/** 
		 * Inner method for getting into dom
		 */
		conf.$ = (el) => {
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
		const views = Object.duplicate(conf.VIEW());

		function render() {
			conf.$(conf.ENTRY).innerHTML = conf.VIEW().render();
		}

		/** 
		 * Show template contains in view  
		 * depending on STATES object property
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
					conf.$(parseTagName(view)).innerHTML = parseProtoStr(template).trim();
				} else {
					conf.$(parseTagName(view)).innerHTML = '';
				}
			}
		}

		function rerender() {
			var data = Object.duplicate(conf.STATES);
			var dataArray = Object.keys(data.__proto__);
			for (var i in data.__proto__) {
				if (dataArray.includes(i)) {
					show(conf.STATES[i], conf.VIEW()[i]);
				}
			}	
		}

		// Init all template into entry element
		render()
		rerender();
		conf.LOGIC();


		// Watcher
		conf.$(conf.ENTRY).onclick = () => {
			render()
			rerender();
			conf.LOGIC();
		}
	}

}());