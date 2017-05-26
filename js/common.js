/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clickStart = __webpack_require__(6);

var _clickStart2 = _interopRequireDefault(_clickStart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateCanvasImage = function () {
	function generateCanvasImage(father) {
		_classCallCheck(this, generateCanvasImage);

		this.father = father;
		this.interation = 0;
		this.startTimeout = 550;
	}

	_createClass(generateCanvasImage, [{
		key: 'start',
		value: function start() {
			var _this = this;

			this.interation++;
			var i = this.interation;

			setTimeout(function () {
				if (_this.interation == i) {
					_this.work();
				}
			}, this.startTimeout);
		}
	}, {
		key: 'work',
		value: function work() {
			var _this2 = this;

			this.getProdustParameters();

			this.productPhoto = new Image();
			this.productPhoto.src = this.itemImage.src;
			this.productPhoto.onload = function () {

				_this2.width = _this2.productPhoto.naturalWidth;
				_this2.height = _this2.productPhoto.naturalHeight;
				_this2.precent = _this2.width / _this2.itemImage.width;

				_this2.c = document.createElement('canvas');
				_this2.c.setAttribute('width', _this2.width);
				_this2.c.setAttribute('height', _this2.height);
				_this2.ctx = _this2.c.getContext("2d");

				if (_this2.itemLoadPhoto && _this2.itemLoadPhoto.style.backgroundImage) {
					_this2.loadPhoto = new Image();
					_this2.loadPhoto.src = _this2.itemLoadPhoto.style.backgroundImage.match(/url\(["|']?([^"']*)["|']?\)/)[1];
					_this2.loadPhoto.onload = function () {

						var top = (_this2.itemLoadPhotoC.top - _this2.mocapContainerC.top) * _this2.precent;
						var left = (_this2.itemLoadPhotoC.left - _this2.mocapContainerC.left) * _this2.precent;

						var windowWidth = parseInt(getComputedStyle(_this2.itemLoadPhoto).width) * _this2.precent;
						var windowHeight = parseInt(getComputedStyle(_this2.itemLoadPhoto).height) * _this2.precent;

						if (windowWidth / windowHeight < _this2.loadPhoto.width / _this2.loadPhoto.height) {
							var height = windowHeight;
							var width;
							width = _this2.loadPhoto.width * windowHeight / _this2.loadPhoto.height;
							left = left + (windowWidth - width) / 2;
						} else {
							var width = windowWidth;
							var height;
							height = _this2.loadPhoto.height * windowWidth / _this2.loadPhoto.width;
						}

						_this2.ctx.drawImage(_this2.loadPhoto, left, top, width, height);

						baseCode.call(_this2);
					};
				} else baseCode.call(_this2);
			};
			function baseCode() {
				var _this3 = this;

				var a = new Promise(function (resolve, reject) {
					setTimeout(function () {

						_this3.ctx.drawImage(_this3.productPhoto, 0, 0, _this3.width, _this3.height);
						resolve();
					}, 20);
				}).then(function () {
					return _this3.setAllText();
				}).then(function () {
					_this3.timeout = setTimeout(function () {
						window.orderImage = _this3.c.toDataURL("image/png");
						if (window.development) {
							if (!_this3.qwe) {
								_this3.a = document.createElement('div');
								_this3.a.style.width = '50px';
								_this3.a.style.height = '50px';
								_this3.a.style.position = 'fixed';
								_this3.a.style.top = '0px';
								document.body.insertAdjacentElement('afterbegin', _this3.a);
								_this3.qwe = true;
							}
							_this3.a.innerHTML = '<img width="100%" src="' + window.orderImage + '">';
						}
					}, 600);
					var b = new _clickStart2.default({
						element: document.querySelector('.js-buy'),
						callback: function callback() {
							console.log(1);
							clearTimeout(_this3.timeout);
							window.orderImage = _this3.c.toDataURL("image/png");
							if (window.development) {
								if (!_this3.qwe) {
									_this3.a = document.createElement('div');
									_this3.a.style.width = '50px';
									_this3.a.style.height = '50px';
									_this3.a.style.position = 'fixed';
									_this3.a.style.top = '0px';
									_this3.a.style.zIndex = '200';

									document.body.insertAdjacentElement('afterbegin', _this3.a);
									_this3.qwe = true;
								}
								_this3.a.innerHTML = '<img width="100%" src="' + window.orderImage + '">';
							}
						}
					});
					setTimeout(function () {
						b.end();
					}, 600);
				});
			}
		}
	}, {
		key: 'Coordinates',
		value: function Coordinates(elem) {
			if (!elem) return;
			var box = elem.getBoundingClientRect();

			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset,
				right: box.right + pageXOffset
			};
		}
	}, {
		key: 'getProdustParameters',
		value: function getProdustParameters() {
			//C -> coordiates
			this.config = this.father.config;
			this.configC = this.Coordinates(this.config);

			this.item = this.father.selectPrint.print;
			this.itemC = this.Coordinates(this.item);

			this.mocapContainer = this.item.querySelector('.mocapContainer');
			this.mocapContainerC = this.Coordinates(this.mocapContainer);

			this.itemImage = this.item.querySelector('.mocapContainer img');
			this.itemImageC = this.Coordinates(this.itemImage);

			this.itemTextContainer = this.item.querySelector('.mocapContainer__textContainer');
			this.itemTextContainerC = this.Coordinates(this.itemTextContainer);

			this.itemtext1 = this.item.querySelector('.printConfig__text1');
			this.itemtext1C = this.Coordinates(this.itemtext1);

			this.itemtext2 = this.item.querySelector('.printConfig__text2');
			this.itemtext2C = this.Coordinates(this.itemtext2);

			this.itemtext3 = this.item.querySelector('.printConfig__text3');
			this.itemtext3C = this.Coordinates(this.itemtext3);

			this.itemLoadPhoto = this.item.querySelector('.mocapContainer__imageContainer');
			this.itemLoadPhotoC = this.Coordinates(this.itemLoadPhoto);
		}
	}, {
		key: 'setAllText',
		value: function setAllText() {
			var _this4 = this;

			var inputs = this.father.inputs;
			var text = void 0;

			return new Promise(function (resolve, reject) {
				setTimeout(function () {

					if (inputs.mocapInput1.disabled) {
						resolve();
						return;
					}

					if (!inputs.mocapInput1.value) {
						text = '####';
					} else {
						text = inputs.mocapInput1.value;
					}

					_this4.setText(_this4.itemtext1, _this4.itemtext1C, text);

					resolve();
				}, 20);
			}).then(function () {
				return new Promise(function (resolve, reject) {
					setTimeout(function () {

						if (inputs.mocapInput2.disabled) {
							resolve();
							return;
						}

						if (!inputs.mocapInput2.value) {
							text = '$$$$';
						} else {
							text = inputs.mocapInput2.value;
						}

						_this4.setText(_this4.itemtext2, _this4.itemtext2C, text);

						resolve();
					}, 20);
				});
			}).then(function () {
				return new Promise(function (resolve, reject) {
					setTimeout(function () {

						if (inputs.mocapInput3.disabled) {
							resolve();
							return;
						}

						if (!inputs.mocapInput3.value) {
							text = '%%%%';
						} else {
							text = inputs.mocapInput3.value;
						}

						_this4.setText(_this4.itemtext3, _this4.itemtext3C, text);

						resolve();
					}, 20);
				});
			}).catch(function (err) {
				console.error("Ошибка в промиcах переноса текста в канвас", err);
			});
		}
	}, {
		key: 'setText',
		value: function setText(elem, elemC, text) {
			var styles = getComputedStyle(elem);

			var paddingOuter = parseInt(getComputedStyle(this.itemTextContainer).paddingLeft);
			var paddingInner = parseInt(styles.paddingLeft);
			var paddingInnerTop = parseInt(styles.paddingTop);

			var top = (elemC.top - this.mocapContainerC.top + paddingInnerTop) * this.precent;
			var left = (elemC.left - this.mocapContainerC.left + paddingOuter + paddingInner) * this.precent;

			this.ctx.textAlign = 'left';
			this.ctx.fillStyle = styles.color;
			this.ctx.textBaseline = 'top';
			if (styles.textShadow && styles.textShadow !== 'none') {
				var textShadow = styles.textShadow.split(')');
				textShadow = [textShadow[0] + ')', textShadow[1].split(' ')[1], textShadow[1].split(' ')[2], textShadow[1].split(' ')[3]];
				this.ctx.shadowColor = textShadow[0];
				this.ctx.shadowOffsetX = parseInt(textShadow[1]) * this.precent / 3;
				this.ctx.shadowOffsetY = parseInt(textShadow[2]) * this.precent / 3;
				this.ctx.shadowBlur = parseInt(textShadow[3]) * this.precent / 3;
			}
			if (styles.textAlign === 'center') {
				this.ctx.textAlign = 'center';
				left = (this.width + paddingInner * this.precent) / 2 + paddingOuter / 2 * this.precent;
			} else if (styles.textAlign === 'right') {
				this.ctx.textAlign = 'right';
				left = (elemC.right - this.mocapContainerC.left + paddingOuter + paddingInner) * this.precent;
			}

			this.ctx.font = styles.fontWeight + ' ' + +styles.fontSize.split('').splice(0, styles.fontSize.length - 2).join('') * this.precent + 'px/' + parseInt(styles.lineHeight) * this.precent + 'px ' + styles.fontFamily;
			this.ctx.letterSpacing = parseInt(styles.letterSpacing) * this.precent + 'px';

			if (!text) text = elem.innerHTML;
			this.ctx.fillText(text, left, top);
		}
	}]);

	return generateCanvasImage;
}();

exports.default = generateCanvasImage;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var inputsForMocaps = function () {
	function inputsForMocaps(father) {
		_classCallCheck(this, inputsForMocaps);

		this.father = father;

		var inputs = document.querySelectorAll('input[type="text"]');

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('load', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('change', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
			inputs[i].addEventListener('keyup', function () {
				if (this.value.length > 0) {
					this.classList.add('hasValue');
				} else {
					this.classList.remove('hasValue');
				}
			});
		}

		this.mocapInput1 = document.querySelector('.js-mocapInput-1');
		this.mocapInput2 = document.querySelector('.js-mocapInput-2');
		this.mocapInput3 = document.querySelector('.js-mocapInput-3');
		this.mocapInput4 = document.querySelector('.js-mocapInput-4');

		this.mocapInput1.value = '';
		this.mocapInput2.value = '';
		this.mocapInput3.value = '';
		this.mocapInput4.value = '';

		this.setText1();
		this.setText2();
		this.setText3();
		this.setImage();
	}

	_createClass(inputsForMocaps, [{
		key: 'callback',
		value: function callback() {
			this.father.generatePrint.start();
		}
	}, {
		key: 'setText1',
		value: function setText1() {
			var _this = this;

			function work(value) {
				var text = document.querySelectorAll('.printConfig__text1');

				//transformValueCode

				for (var i = 0; i < text.length; i++) {
					text[i].innerHTML = value;
				}
			}

			this.mocapInput1.addEventListener('keyup', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this.callback();
			});
			this.mocapInput1.addEventListener('change', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this.callback();
			});
		}
	}, {
		key: 'setText2',
		value: function setText2() {
			var _this2 = this;

			function work(value) {
				var text = document.querySelectorAll('.printConfig__text2');

				//transformValueCode


				for (var i = 0; i < text.length; i++) {
					text[i].innerHTML = value;
				}
			}

			this.mocapInput2.addEventListener('keyup', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this2.callback();
			});
			this.mocapInput2.addEventListener('change', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this2.callback();
			});
		}
	}, {
		key: 'setText3',
		value: function setText3() {
			var _this3 = this;

			function work(value) {
				var text = document.querySelectorAll('.printConfig__text3');

				//transformValueCode


				for (var i = 0; i < text.length; i++) {
					text[i].innerHTML = value;
				}
			}
			this.mocapInput3.addEventListener('keyup', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this3.callback();
			});
			this.mocapInput3.addEventListener('change', function (event) {
				var a = event.currentTarget.value;

				work(a);
				_this3.callback();
			});
		}
	}, {
		key: 'setImage',
		value: function setImage() {
			var chooseFiles;
			var previews;

			function windowLoadHandler() {

				chooseFiles = document.getElementById("photoPreload");

				chooseFiles.addEventListener("change", PreviewImages, false);

				chooseFiles.addEventListener('click', function (event) {
					if (!chooseFiles.value) {
						return;
					}

					event.preventDefault();

					chooseFiles.value = '';

					chooseFiles.nextElementSibling.innerHTML = 'Памятное фото';

					var imageContainers = document.querySelectorAll('.mocapContainer__imageContainer');

					for (var i = 0; i < imageContainers.length; i++) {
						imageContainers[i].style.backgroundImage = '';
					}
				});
			}

			function PreviewImages() {

				Array.prototype.forEach.call(chooseFiles.files, function (file, index) {
					var oFReader = new FileReader();

					oFReader.addEventListener("load", function (evt) {
						console.log("loaded");
						var src = evt.target.result;

						var imageContainers = document.querySelectorAll('.mocapContainer__imageContainer');

						for (var i = 0; i < imageContainers.length; i++) {
							imageContainers[i].style.backgroundImage = 'url(' + src + ')';
							imageContainers[i].style.backgroundSize = 'cover';
							imageContainers[i].style.backgroundPosition = 'top center';
						}

						this.removeEventListener("load");
					}, false);

					oFReader.readAsDataURL(file);
				});

				chooseFiles.nextElementSibling.innerHTML = 'Удалить фото';
			}

			window.addEventListener("DOMContentLoaded", windowLoadHandler, false);
		}
	}]);

	return inputsForMocaps;
}();

exports.default = inputsForMocaps;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selectPrint = function () {
	function selectPrint(father) {
		_classCallCheck(this, selectPrint);

		this.father = father;
	}

	_createClass(selectPrint, [{
		key: 'copyToConfig',
		value: function copyToConfig(el) {
			this.print && this.print.classList.remove('yourPrint__item--active');

			this.print = el;
			this.print.classList.add('yourPrint__item--active');

			this.newElement = el.querySelector('.mocapContainer').cloneNode(true);
			this.newElement.querySelector('img').classList.add('printConfig__preview-image');

			this.father.config.querySelector('.mocapContainer').remove();
			this.father.config.querySelector('.printConfig__preview').prepend(this.newElement);
		}
	}, {
		key: 'checkInputs',
		value: function checkInputs() {

			if (!this.newElement.querySelector('.mocapContainer__imageContainer')) {
				this.father.inputs.mocapInput4.disabled = true;
			} else {
				this.father.inputs.mocapInput4.disabled = false;
			}

			if (!this.newElement.querySelector('.printConfig__text1')) {
				this.father.inputs.mocapInput1.disabled = true;
			} else {
				this.father.inputs.mocapInput1.disabled = false;
			}

			if (!this.newElement.querySelector('.printConfig__text2')) {
				this.father.inputs.mocapInput2.disabled = true;
			} else {
				this.father.inputs.mocapInput2.disabled = false;
			}

			if (!this.newElement.querySelector('.printConfig__text3')) {
				this.father.inputs.mocapInput3.disabled = true;
			} else {
				this.father.inputs.mocapInput3.disabled = false;
			}
		}
	}, {
		key: 'loadPrintDataInConfig',
		value: function loadPrintDataInConfig() {
			this.father.setConfigPrice();
			this.father.setProductId();
		}
	}, {
		key: 'moveConfig',
		value: function moveConfig() {
			var wrappers = document.querySelectorAll('.yourPrint__item--active ~ .wrapLine--helper');

			if (!wrappers) {
				return;
			}
			var config = this.father.config;

			for (var i = 0; i < wrappers.length; i++) {

				if (getComputedStyle(wrappers[i]).display === 'block' || i + 1 == wrappers.length) {

					if (this.lastWrapper == wrappers[i]) return;

					config.remove();
					wrappers[i].insertAdjacentElement('afterEnd', config);
					return;
				}
			}
		}
	}]);

	return selectPrint;
}();

exports.default = selectPrint;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var selectType = function () {
	function selectType(father) {
		var _this = this;

		_classCallCheck(this, selectType);

		this.father = father;

		this.genderInputs = document.querySelectorAll('input[name="genderRadio"]');
		this.productTypeInputs = document.querySelectorAll('input[name="productType"]');

		for (var i = 0; i < this.genderInputs.length; i++) {
			this.genderInputs[i].addEventListener('change', function () {
				_this.inputListener();
			});
		}

		for (var i = 0; i < this.productTypeInputs.length; i++) {
			this.productTypeInputs[i].addEventListener('change', function () {
				_this.inputListener();
			});
		}
	}

	_createClass(selectType, [{
		key: 'inputListener',
		value: function inputListener() {
			this.father.getValues();
			this.genderValue = this.father.genderValue;
			this.productTypeValue = this.father.productTypeValue;

			this.mocapContainers = document.querySelectorAll('.mocapContainer');

			var a = void 0;

			if (this.productTypeValue === 'shirt') {
				if (this.genderValue === 'woman' || this.genderValue === 'girl') {
					a = 'woman-';
					//если выбраны дамы или девочки, 
				} else {
					a = 'men-';
				}
			} else {
				a = '';
			}

			var dataText = a + this.productTypeValue;

			var buttonOneClick = this.father.buttonOneClick;
			var buttonBuy = this.father.buttonBuy;

			this.setImage('data-' + dataText, dataText);

			this.father.setConfigPrice();
			this.father.setCatalogPrices();
			this.father.setProductId();
			this.setPriceDescription();
			this.setSizes();
			this.setTooltip();
			this.father.generatePrint.start();
		}
	}, {
		key: 'setImage',
		value: function setImage(attr, className) {
			var _this2 = this;

			var prewiew = this.father.config.querySelector('.printConfig__preview .mocapContainer');

			var a = prewiew.getAttribute(attr);

			if (!!this.mocapsOldClassName) prewiew.classList.remove(this.mocapsOldClassName);
			prewiew.classList.add(className);
			prewiew.querySelector('img').src = a;

			this.father.selectPrint.print.classList.add(className);
			this.father.selectPrint.print.querySelector('img').src = a;

			setTimeout(function () {
				var c = 50;

				var _loop = function _loop(i) {
					var a = _this2.mocapContainers[i].getAttribute(attr);
					setTimeout(function () {
						if (!!_this2.mocapsOldClassName) _this2.mocapContainers[i].classList.remove(_this2.mocapsOldClassName);
						_this2.mocapContainers[i].classList.add(className);
						_this2.mocapContainers[i].querySelector('img').src = a;
					}, c);
					c += 50;
				};

				for (var i = 0; i < _this2.mocapContainers.length; i++) {
					_loop(i);
				}
				_this2.mocapsOldClassName = className;
			}, 450);
		}
	}, {
		key: 'setPriceDescription',
		value: function setPriceDescription() {
			var gender = document.querySelector('.printConfig__options-priceGender');
			var product = document.querySelector('.printConfig__options-priceType');
			switch (this.productTypeValue) {
				case 'shirt':

					if (this.genderValue === 'men' || this.genderValue === 'boy') {

						gender.innerHTML = 'Мужская';
					}
					if (this.genderValue === 'woman' || this.genderValue === 'girl') {

						gender.innerHTML = 'Женская';
					}
					if (this.genderValue === 'children') {

						gender.innerHTML = 'Детская';
					}

					product.innerHTML = ' футболка';

					break;

				case 'sweatshirt':

					if (this.genderValue === 'men' || this.genderValue === 'boy') {

						gender.innerHTML = 'Мужской';
					}
					if (this.genderValue === 'woman' || this.genderValue === 'girl') {

						gender.innerHTML = 'Женский';
					}
					if (this.genderValue === 'children') {

						gender.innerHTML = 'Детский';
					}

					product.innerHTML = ' свитшот';

					break;

				case 'hoodie':

					if (this.genderValue === 'men' || this.genderValue === 'boy') {

						gender.innerHTML = 'Мужское';
					}
					if (this.genderValue === 'woman' || this.genderValue === 'girl') {

						gender.innerHTML = 'Женское';
					}
					if (this.genderValue === 'children') {

						gender.innerHTML = 'Детское';
					}

					product.innerHTML = ' худи';

					break;
			}
		}
	}, {
		key: 'setSizes',
		value: function setSizes() {

			var sizeBlocks = this.father.config.querySelectorAll('[name="productSize"]');

			function editSizeBlock(attr) {

				for (var i = 0; i < sizeBlocks.length; i++) {
					var a = sizeBlocks[i].nextElementSibling.getAttribute(attr);
					sizeBlocks[i].value = a;
					a = a.split(' ');

					sizeBlocks[i].nextElementSibling.querySelector('span:nth-of-type(1)').innerHTML = a[0];
					if (a.length > 1) {
						sizeBlocks[i].nextElementSibling.querySelector('span:nth-of-type(2)').innerHTML = a[1];
					} else {
						sizeBlocks[i].nextElementSibling.querySelector('span:nth-of-type(2)').innerHTML = ' ';
					}
				}
			}

			if (this.genderValue === 'men') {

				editSizeBlock('data-size-men');

				document.querySelector('.printConfig__options').classList.remove('children');

				switch (this.productTypeValue) {
					case 'shirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'men_fut');
						break;
					case 'sweatshirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'men_swi');
						break;
					case 'hoodie':
						document.querySelector('[data-img]').setAttribute('data-img', 'men_hud');
						break;
				}
			} else if (this.genderValue === 'woman') {

				editSizeBlock('data-size-woman');

				document.querySelector('.printConfig__options').classList.remove('children');

				switch (this.productTypeValue) {
					case 'shirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'wom_fut');
						break;
					case 'sweatshirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'wom_swi');
						break;
					case 'hoodie':
						document.querySelector('[data-img]').setAttribute('data-img', 'wom_hud');
						break;
				}
			} else {

				editSizeBlock('data-size-child');

				document.querySelector('.printConfig__options').classList.add('children');

				switch (this.productTypeValue) {
					case 'shirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'child_fut');
						break;
					case 'sweatshirt':
						document.querySelector('[data-img]').setAttribute('data-img', 'child_swi');
						break;
					case 'hoodie':
						document.querySelector('[data-img]').setAttribute('data-img', 'child_hud');
						break;
				}
			}
		}
	}, {
		key: 'setTooltip',
		value: function setTooltip() {
			var text = this.father.config.children[0].getAttribute('data-tooltipinfo-' + this.father.productTypeValue);

			Array.prototype.forEach.call(document.querySelectorAll('.tooltip-inner'), function (elem) {
				elem.innerHTML = text;
			});
		}
	}]);

	return selectType;
}();

exports.default = selectType;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _inputsForMocaps = __webpack_require__(1);

var _inputsForMocaps2 = _interopRequireDefault(_inputsForMocaps);

var _selectType = __webpack_require__(3);

var _selectType2 = _interopRequireDefault(_selectType);

var _selectPrint = __webpack_require__(2);

var _selectPrint2 = _interopRequireDefault(_selectPrint);

var _generDev = __webpack_require__(0);

var _generDev2 = _interopRequireDefault(_generDev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var configurator = function () {
	function configurator() {
		var _this = this;

		_classCallCheck(this, configurator);

		this.config = document.querySelector('.container__printConfig');
		this.buttonOneClick = this.config.querySelector('.js-btn-oneClick');
		this.buttonBuy = this.config.querySelector('.js-buy');
		this.prints = document.querySelectorAll('.yourPrint__item');

		this.inputs = new _inputsForMocaps2.default(this);
		this.selectType = new _selectType2.default(this);
		this.selectPrint = new _selectPrint2.default(this);
		this.generatePrint = new _generDev2.default(this);

		for (var i = 0; i < this.prints.length; i++) {

			this.prints[i].addEventListener('click', function (event) {

				_this.config.style.display = 'block';
				_this.getValues();
				_this.selectPrint.copyToConfig(event.currentTarget);
				_this.selectPrint.checkInputs();
				_this.selectPrint.loadPrintDataInConfig();
				_this.selectType.setTooltip();
				_this.selectPrint.moveConfig();
				_this.generatePrint.start();
			});
		}
	}

	_createClass(configurator, [{
		key: 'setConfigPrice',
		value: function setConfigPrice() {
			var mocap = this.config.querySelector('.mocapContainer');

			var price = mocap.getAttribute('data-' + this.productTypeValue + '-price');
			this.config.querySelector('.printConfig__options-price').innerHTML = price;

			var oldPrice = void 0;
			if (mocap.hasAttribute('data-' + this.productTypeValue + '-oldPrice')) {
				//если есть старая цена, то выводим
				oldPrice = mocap.getAttribute('data-' + this.productTypeValue + '-oldPrice');
				this.config.querySelector('.printConfig__options-price').insertAdjacentHTML('afterbegin', '<span class="yourPrint__item-oldPrice">' + oldPrice + ' </span>');
			}

			this.buttonOneClick.setAttribute('data-price', price);
			this.buttonBuy.setAttribute('data-price', price);
		}
	}, {
		key: 'setCatalogPrices',
		value: function setCatalogPrices() {
			var mocap = void 0;

			for (var i = 0; i < this.prints.length; i++) {
				mocap = this.prints[i].querySelector('.mocapContainer');

				var price = mocap.getAttribute('data-' + this.productTypeValue + '-price');
				this.prints[i].querySelector('.yourPrint__item-price').innerHTML = price;

				var oldPrice = void 0;
				if (mocap.hasAttribute('data-' + this.productTypeValue + '-oldPrice')) {
					//если есть старая цена, то выводим
					oldPrice = mocap.getAttribute('data-' + this.productTypeValue + '-oldPrice');
					this.prints[i].querySelector('.yourPrint__item-price').insertAdjacentHTML('afterbegin', '<span class="yourPrint__item-oldPrice">' + oldPrice + ' </span>');
				}
			}
		}
	}, {
		key: 'setProductId',
		value: function setProductId() {
			var mocap = this.config.querySelector('.mocapContainer');
			var sex = 2;

			if (this.genderValue === 'woman' || this.genderValue === 'girl') {
				sex = 1;
			}

			var a = void 0;

			if (this.productTypeValue === 'shirt') {
				if (this.genderValue === 'woman' || this.genderValue === 'girl') {
					a = 'woman-';
					sex = 1;
					//если выбраны дамы или девочки, 
				} else {
					a = 'men-';
				}
			} else {
				a = '';
			}

			var dataText = this.genderValue + this.productTypeValue;

			var id = mocap.getAttribute('data-' + dataText + '-id');

			this.buttonOneClick.setAttribute('data-id', id);
			this.buttonBuy.setAttribute('data-id', id);

			this.buttonOneClick.setAttribute('data-sex', sex);
			this.buttonBuy.setAttribute('data-sex', sex);
		}
	}, {
		key: 'getValues',
		value: function getValues() {
			this.productTypeValue = this.config.querySelector('[name="productType"]:checked').value;
			this.genderValue = this.config.querySelector('[name="genderRadio"]:checked').value;
		}
	}]);

	return configurator;
}();

document.addEventListener('DOMContentLoaded', function () {
	try {
		new configurator();
	} catch (err) {
		console.log('В выборе принта ошибка.', err);
	}
});

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// version 0.0.0

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clickStart = function () {
	function clickStart(options) {
		_classCallCheck(this, clickStart);

		this.element = options.element || window;
		this.callback = options.callback;

		this.Listener();
	}

	_createClass(clickStart, [{
		key: 'typeOfEvent',
		value: function typeOfEvent() {
			var event = void 0;
			switch (null) {
				case window.ontouchstart:
					event = 'touchstart';
					break;
				case window.onmousedown:
					event = 'mousedown';
					break;
				default:
					throw new Error('Никакого события clickStart нету');
			}
			return event;
		}
	}, {
		key: 'Listener',
		value: function Listener() {
			this.element.addEventListener(this.typeOfEvent(), this.callback);
		}
	}, {
		key: 'end',
		value: function end() {
			this.element.removeEventListener(this.typeOfEvent(), this.callback);
		}
	}]);

	return clickStart;
}();

exports.default = clickStart;

/***/ })
/******/ ]);
//# sourceMappingURL=common.js.map