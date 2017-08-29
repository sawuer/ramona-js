/**
 * Ramona - simple js library for creating useful 
   components which have only two important props: view and core.
 * Author: Timurziyev Ruslan(sawuer); https://github.com/sawuer
 * Repository: https://github.com/sawuer/Ramona
 * Version: none
 */

var Ramona = (function() {

	return {
		instance: {
			
			/* --------------- ramona ----------------- */
			ramonaCtor: function(conf) {

				// Save all props and states
				// Object.duplicate = (o) => {
				//   function protos() {
				//     var prop, i = 1, arg, val;
				//     for (prop in o) {
				// 			if(!o.hasOwnProperty(prop)) {
				// 				continue;
				// 			}
				// 			val = o[prop];
				// 			arg = arguments[i++];
				// 			if(typeof arg === 'undefined') {
				// 				break;
				// 			}
				// 			this[prop] = arg;
				//    	}
				//   }
				//   protos.prototype = o;
				//   return new protos();
				// }

				// /** 
				//  * Views __proto__ 
				//  */
				// const views = Object.duplicate(conf);
				// console.log(views)



				var self = this;

				/* --------------- Examination ----------------- */
				function err(text) {
					throw new TypeError(text);
				}
				if (!Object.keys(conf).length) {
					err("RAMONA: all props of instance are does'nt exist");
				}
				if (!conf.view) {
					err("RAMONA: 'view' does'nt exist");
				}
				if (!conf.core) {
					err("RAMONA: 'core' does'nt exist");
				}
				/* ------------ End of Examination ------------- */


				/* --------------- This props ----------------- */
				this.view = conf.view;
				this.core = conf.core;
				this.logic = conf.logic;
				// Init props

				setTimeout(function(){
					self.logic();
				}, 50); 
				/* ------------- End of this props ------------- */

				return this;

			},
			/* ------------ End of ramona -------------- */


			/* ------------ Query elements method -------------- */
			get: function(el) {
				var all = document.querySelectorAll(el);
				if (all.length > 1) {
					return all;
				}
				return document.querySelector(el);
			},
			/* --------- End of Query elements method ----------- */

			stateUp: function(data, newData) {
				var that = this;
				this.core[data] = newData;

				var view = this.view().replace(/\s{2,}/g, '');

				function key(index) {
					return Object.keys(that.core)[index];
				}

				// Reg for models
				function reg(num) {
					return new RegExp(`{${dataKeys[num]}}`, 'g')
				}

				// Get models
				function mod(num) {
					return that.core[dataKeys[num]]
				}

				// Component "core" keys
				var dataKeys = {
					1: key(0), 2: key(1), 3: key(2), 4: key(3), 5: 	key(4),
					6: key(5), 7: key(6), 8: key(7), 9: key(8), 10: key(9),
				};

				var dataRegExp = {
					oneReg: 	reg('1'), 	twoReg: 	reg('2'),
					threeReg: reg('3'), 	fourReg: 	reg('4'),
					fiveReg: 	reg('5'), 	sixReg:		reg('6'),
					sevenReg: reg('7'), 	eightReg: reg('8'),
					nineReg: 	reg('9'), 	tenReg: 	reg('10'),
				};


				var parsed = view
					.replace(dataRegExp.oneReg, 	mod('1'))
					.replace(dataRegExp.twoReg, 	mod('2'))
					.replace(dataRegExp.threeReg, mod('3'))
					.replace(dataRegExp.fourReg, 	mod('4'))
					.replace(dataRegExp.fiveReg, 	mod('5'))
					.replace(dataRegExp.sixReg, 	mod('6'))
					.replace(dataRegExp.sevenReg, mod('7'))
					.replace(dataRegExp.eightReg, mod('8'))
					.replace(dataRegExp.nineReg, 	mod('9'))
					.replace(dataRegExp.tenReg, 	mod('10'));

				document.querySelector(that.tagName).innerHTML = parsed;
				that.logic();

			},
			/* ------------ End of Query elements -------------- */


			/* ----------- Setting view into tags ---------- */
			setViews: (function() {
				function setViewIntoInstances() {
					function getRamonaInstances(prefix) {
					  var keyVals = [];
					  for (var prop in window) {
					    if (prop.indexOf(prefix) == 0) {
					      keyVals.push(prop);
					    }
					  }
					  var result = keyVals.join('').split(prefix);
					  result.shift(); //???? there is one empty element O_o
					  return result;
					}

					var instanceTag = getRamonaInstances('$_'); // 
					var instancesVar = instanceTag.map(function(i) {
						return '$_' + i
					});

					// Templater
					for (var i = 0; i < instanceTag.length; i++) {
						var currentComponent = window[instancesVar[i]];
						currentComponent.tagName = instanceTag[i];

						var view = window[instancesVar[i]].view().replace(/\s{2,}/g, '');

						function key(index) {
							return Object.keys(window[instancesVar[i]].core)[index];
						}

						// Reg for models
						function reg(num) {
							return new RegExp(`{${dataKeys[num]}}`, 'g')
						}

						// Get models
						function mod(num) {
							return window[instancesVar[i]].core[dataKeys[num]]
						}

						// Component "core" keys
						var dataKeys = {
							1: key(0), 2: key(1), 3: key(2), 4: key(3), 5: 	key(4),
							6: key(5), 7: key(6), 8: key(7), 9: key(8), 10: key(9),
						};

						var dataRegExp = {
							oneReg: 	reg('1'), 	twoReg: 	reg('2'),
							threeReg: reg('3'), 	fourReg: 	reg('4'),
							fiveReg: 	reg('5'), 	sixReg:		reg('6'),
							sevenReg: reg('7'), 	eightReg: reg('8'),
							nineReg: 	reg('9'), 	tenReg: 	reg('10'),
						}

						var parsed = view
							.replace(dataRegExp.oneReg, 	mod('1'))
							.replace(dataRegExp.twoReg, 	mod('2'))
							.replace(dataRegExp.threeReg, mod('3'))
							.replace(dataRegExp.fourReg, 	mod('4'))
							.replace(dataRegExp.fiveReg, 	mod('5'))
							.replace(dataRegExp.sixReg, 	mod('6'))
							.replace(dataRegExp.sevenReg, mod('7'))
							.replace(dataRegExp.eightReg, mod('8'))
							.replace(dataRegExp.nineReg, 	mod('9'))
							.replace(dataRegExp.tenReg, 	mod('10'));

						document.querySelector(instanceTag[i]).innerHTML = parsed;
					}
				}

				setTimeout(function() {
					setViewIntoInstances();
				}, 50);
				
			}())
			/* ----------- End ofSetting view into tags ---------- */

		}, // end of instance


		/* ----------- Create instance method ---------- */
		create: function(conf) {
			var newInstance = Object.create(this.instance).ramonaCtor(conf);
			return newInstance;
		}
		/* ----------- End of Create instance method ---------- */


	} // end of return	



}());

delete Ramona.instance.setViews;



/**
 * PLAN:
 * [done] - Setting 'view' into instance tag without entry tagname prop
 * [done] - Templater of 'core' variables
 * [done] - Change state and change view
 * Show component depending on state property
 * Router
 */







