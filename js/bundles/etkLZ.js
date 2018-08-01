var pageComponent =
webpackJsonppageComponent([15],{

/***/ 274:
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

var _creationSoy = __webpack_require__(275);

var _creationSoy2 = _interopRequireDefault(_creationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var etkLZ = function (_Component) {
  _inherits(etkLZ, _Component);

  function etkLZ() {
    _classCallCheck(this, etkLZ);

    return _possibleConstructorReturn(this, (etkLZ.__proto__ || Object.getPrototypeOf(etkLZ)).apply(this, arguments));
  }

  return etkLZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(etkLZ, _creationSoy2.default);

exports.default = etkLZ;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.etkLZ = undefined;

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

  // This file was automatically generated from creation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace etkLZ.
   * @public
   */

  goog.module('etkLZ.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param393 = function param393() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('create');
      ie_close('h2');
      ie_open('p');
      itext('Static methods to create MObject instances.');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(Pricebook2.sObjectType, new Map<String, Object>());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are as below:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('create(Schema.SObjectType, Object)');
      ie_close('td');
      ie_open('td');
      itext('Create an MObject from SObject type and source');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('create(Schema.SObjectType)');
      ie_close('td');
      ie_open('td');
      itext('Create a default MObject from SObject type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('create(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Create an MObject from type name and source');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('create(String)');
      ie_close('td');
      ie_open('td');
      itext('Create a default MObject from type name');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('create(Object)');
      ie_close('td');
      ie_open('td');
      itext('Create an MObject from source');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('createList');
      ie_close('h2');
      ie_open('p');
      itext('Static methods to create a list of MObject instances.');
      ie_close('p');
      $templateAlias2({ code: 'List<MObject> mos = MObject.createList(Pricebook2.sObjectType, new List<Map<String, Object>>());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Methods are as below:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('createList(Schema.SObjectType, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Create MObjects from SObject type and list of objects');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('createList(String, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Create MObjects from type name and list of objects');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('createList(List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Create MObjects from list of objects');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param393 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'etkLZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var etkLZ = function (_Component) {
  _inherits(etkLZ, _Component);

  function etkLZ() {
    _classCallCheck(this, etkLZ);

    return _possibleConstructorReturn(this, (etkLZ.__proto__ || Object.getPrototypeOf(etkLZ)).apply(this, arguments));
  }

  return etkLZ;
}(_metalComponent2.default);

_metalSoy2.default.register(etkLZ, templates);
exports.etkLZ = etkLZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);