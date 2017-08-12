/**
 * Ramona Js - simple javascript lib for creating useful components
 * v1.0.0
 * author: Timurziyev Ruslan 
 * github: https://github.com/sawuer/ramona-js/
 */

var Ramona = (function() {

	/**
	 * Constructor function.
	 * But there is no so much 
	 * public props
	 */
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
		this.ENTRY = conf.ENTRY;
		this.STATIC = conf.STATIC;

		this.die = () => {
			conf._(conf.ENTRY).innerHTML = '';
		}

		/** 
		 * Condition: if "ENTRY" prop 
		 * contains existed element 
		 */
		if (!conf._(conf.ENTRY)) {
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
		const views = Object.duplicate(conf.VIEW());

		/** 
		 * Rendering all templates into "ENTRY" element 
		 */
		function renderMainTemplate() {
			conf._(conf.ENTRY).innerHTML = conf.VIEW().render();
		}

		/** 
		 * Show template contains in VIEW  
		 * depending on state object property
		 */
		conf.show = (state, VIEW) => {

			/** 
			 * Parse tag name of VIEW template 
			 */
			function parseTagName(VIEW) {
				return VIEW.slice((VIEW.indexOf('<') + 1), VIEW.indexOf('>'));
			}

			/** 
			 * Get parse from tags 
			 */
			function parseProtoStr(input) {
				var openTag = '<'+parseTagName(VIEW)+'>';
				var closedTag = '</'+parseTagName(VIEW)+'>';
				var openTagEnd = input.indexOf(openTag) + openTag.length;
				var closedTagIndex = input.indexOf(closedTag);
				return input.slice(openTagEnd, closedTagIndex);
			}

			/**
			 * Inner html of views
			 */
			var template = views.__proto__[parseTagName(VIEW)];
			var innerTemp = parseProtoStr(template).trim();

			/** 
			 * Condition: if VIEW.__proto__ contains tagname 
			 */
			if (parseTagName(VIEW).toLowerCase() in views.__proto__) {
				if (state) {
					conf._(parseTagName(VIEW)).innerHTML = innerTemp;
				} else {
					conf._(parseTagName(VIEW)).innerHTML = '';
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
					conf.show(conf.STATES[i], conf.VIEW()[i]);
				}
			}	
		}

		/** 
		 * Init all template into ENTRY element
		 */
		renderMainTemplate()
		rerenderMainTemplate();
		conf.LOGIC();

	}

}());