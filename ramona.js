/**
 * Ramona Js - simple javascript lib for creating useful components
 * v1.0.0
 * author: Timurziyev Ruslan 
 * github: https://github.com/sawuer/ramona-js/
 */

var Ramona = (function() {

	return function(conf) {

		/** 
		 * Inner method for getting into dom
		 */
		conf._ = (el) => {
			var all = document.querySelectorAll(el);
			return all.length > 1 ? all : document.querySelector(el);
		}

		/** 
		 * Public props
		 */
		this.in = conf.in;
		this.static = conf.static;

		this.die = () => {
			conf._(conf.in).innerHTML = '';
		}

		/** 
		 * Condition: if "in" prop 
		 * contains existed element 
		 */
		if (!conf._(conf.in)) {
			throw new Error('You must create div with id for new Ramona instance')
		}

		/** 
		 * Duplicate object view for
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
		 * Rendering all templates into "in" element 
		 */
		function renderMainTemplate() {
			conf._(conf.in).innerHTML = conf.view().render();
		}

		/** 
		 * Show template contains in view  
		 * depending on state object property
		 */
		conf.show = (state, view) => {

			/** 
			 * Parse tag name of view template 
			 */
			function parseTagName(view) {
				return view.slice((view.indexOf('<') + 1), view.indexOf('>'));
			}

			/** 
			 * Get parse from tags 
			 */
			function parseProtoStr(input) {
				var openTag = '<'+parseTagName(view)+'>';
				var closedTag = '</'+parseTagName(view)+'>';
				var openTagEnd = input.indexOf(openTag) + openTag.length;
				var closedTagIndex = input.indexOf(closedTag);
				return input.slice(openTagEnd, closedTagIndex);
			}

			/**
			 * Inner html of views
			 */
			var template = views.__proto__[parseTagName(view)];
			var innerTemp = parseProtoStr(template).trim();

			/** 
			 * Condition: if view.__proto__ contains tagname 
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
		function rerenderMainTemplate() {
			var state = Object.duplicate(conf.state);
			var stateArray = Object.keys(state.__proto__);
			for (var i in state.__proto__) {
				if (stateArray.includes(i)) {
					conf.show(conf.state[i], conf.view()[i]);
				}
			}	
		}

		/** 
		 * Init all template into in element
		 */
		renderMainTemplate()
		rerenderMainTemplate();
		conf.heart();

	}

}());