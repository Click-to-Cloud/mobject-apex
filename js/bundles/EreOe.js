var pageComponent =
webpackJsonppageComponent([3],{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_6Soy = __webpack_require__(293);

var _step_6Soy2 = _interopRequireDefault(_step_6Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EreOe = function (_Component) {
  _inherits(EreOe, _Component);

  function EreOe() {
    _classCallCheck(this, EreOe);

    return _possibleConstructorReturn(this, (EreOe.__proto__ || Object.getPrototypeOf(EreOe)).apply(this, arguments));
  }

  return EreOe;
}(_metalComponent2.default);

;

_metalSoy2.default.register(EreOe, _step_6Soy2.default);

exports.default = EreOe;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.EreOe = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_6.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace EreOe.
   * @public
   */

  goog.module('EreOe.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param561 = function param561() {
      ie_open('h2');
      var dyn38 = opt_data.page.title;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h2');
      ie_open('p');
      itext('Carrying out persistence is only one call and MObject.apex will do everything for you behind the scene.');
      ie_close('p');
      $templateAlias2({ code: 'Pricebook2 pb = [ ... ];\nMObject mo = MObject.create(pb);\nmo.put(\'Opportunities\', new List<Opportunity>{ ... });\nmo.persist();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or you can persist a list of MObjects at one time.');
      ie_close('p');
      $templateAlias2({ code: 'List<MObject> mos = MObject.createList(new List<SObject>{ ... });\nMObject.persist(mos);', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param561 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'EreOe.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var EreOe = function (_Component) {
  _inherits(EreOe, _Component);

  function EreOe() {
    _classCallCheck(this, EreOe);

    return _possibleConstructorReturn(this, (EreOe.__proto__ || Object.getPrototypeOf(EreOe)).apply(this, arguments));
  }

  return EreOe;
}(_metalComponent2.default);

_metalSoy2.default.register(EreOe, templates);
exports.EreOe = EreOe;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);