var Ramona = (function() {

	return function(conf) {

		/** 
		 * Method for avoid app 
		 */
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
		 * Conditin: if "entry" prop 
		 * contains existed element 
		*/
		if (!conf._(conf.entry)) {
			throw new Error('You must create div with id for new Ramona instance')
		}

		/** 
		 * Duplicate object VIEW for
		 * constantly collection
		 */
		Object.duplicate = (o) => {
		  function protos() {
	      var prop, i = 1, arg, val;
	      for (prop in o) {
					if(!o.hasOwnProperty(prop)) {
						continue;
					}
					val = o[prop];
					arg = arguments[i++];
					if(typeof arg === 'undefined') {
						break;
					}
					this[prop] = arg;
	     	}
		  }
		  protos.prototype = o;
		  return new protos();
		}

		/** 
		 * Views __proto__ 
		 */
		const views = Object.duplicate(conf.view());

		/** 
		 * Rendering all templates into "entry" element 
		 */
		function render() {
			conf._(conf.entry).innerHTML = conf.view().render();
		}

		/** 
		 * Show template contains in view  
		 * depending on state object property
		 */
		function show(state, view) {

			/** 
			 * Parse tag name of view template 
			 */
			function parseTagName(view) {
				return view.slice((view.indexOf('<') + 1), view.indexOf('>'));
			}

			/** 
			 * Get prse from tags 
			 */
			function parseProtoStr(input) {
				var 
					openTag = '<'+parseTagName(view)+'>',
					closedTag = '</'+parseTagName(view)+'>',
					openTagEnd = input.indexOf(openTag) + openTag.length,
					closedTagIndex = input.indexOf(closedTag);
				return input.slice(openTagEnd, closedTagIndex);
			}

			/**
			 * Inner of tamplstes
			 */
			var template = views.__proto__[parseTagName(view).toLowerCase()];
			var innerTemp = parseProtoStr(template).trim();

			/** 
			 * Condigtion: if views.__proto__ contains tagname 
			 */
			if (parseTagName(view).toLowerCase() in views.__proto__) {
				if (state) {
					conf._(parseTagName(view)).innerHTML = innerTemp;
				} else {
					conf._(parseTagName(view)).innerHTML = '';
				}
			}

		}

		/**
		 * Checking states
		 */
		function rerender() {
			var state = Object.duplicate(conf.state);
			var stateArray = Object.keys(state.__proto__);
			for (var i in state.__proto__) {
				if (stateArray.includes(i)) {
					show(conf.state[i], conf.view()[i]);
				}
			}	
		}

		/** 
		 * Init all template into entry element
		 */
		render()
		rerender();
		conf.logic();

		/**
		 * Watcher
		 */
		conf._(conf.entry).onclick = () => {
			render();
			rerender();
			conf.logic();
		}

	}

}());