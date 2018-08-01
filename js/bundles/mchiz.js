var pageComponent =
webpackJsonppageComponent([13],{

/***/ 278:
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

var _methodsSoy = __webpack_require__(279);

var _methodsSoy2 = _interopRequireDefault(_methodsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mchiz = function (_Component) {
  _inherits(mchiz, _Component);

  function mchiz() {
    _classCallCheck(this, mchiz);

    return _possibleConstructorReturn(this, (mchiz.__proto__ || Object.getPrototypeOf(mchiz)).apply(this, arguments));
  }

  return mchiz;
}(_metalComponent2.default);

;

_metalSoy2.default.register(mchiz, _methodsSoy2.default);

exports.default = mchiz;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.mchiz = undefined;

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

  // This file was automatically generated from methods.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace mchiz.
   * @public
   */

  goog.module('mchiz.incrementaldom');

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
    var param425 = function param425() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('toMap');
      ie_close('h2');
      ie_open('p');
      itext('Convert the MObject to a map');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nMap<String, Object> data = mo.toMap(true);', mode: 'javascript' }, null, opt_ijData);
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
      itext('toMap(Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Convert to map, whether to trim namespace');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toMap()');
      ie_close('td');
      ie_open('td');
      itext('Convert to map, keeping namespace');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('get');
      ie_close('h2');
      ie_open('p');
      itext('Get the value from MObjects');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nString name = (String)mo.get(\'LastModifiedBy.Name\', \'Unknown\');', mode: 'javascript' }, null, opt_ijData);
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
      itext('get(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Get the value of the path, returning default value if null');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the value of the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Get the value of the path, returning default value if null');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Get the value of the path');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('put');
      ie_close('h2');
      ie_open('p');
      itext('Update the value of the MObjects');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nmo.put(\'LastModifiedBy.Name\', \'Wilson\');', mode: 'javascript' }, null, opt_ijData);
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
      itext('put(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Update the value of the path');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('put(List<String>, Object)');
      ie_close('td');
      ie_open('td');
      itext('Update the value of the path');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('markAsDeleted');
      ie_close('h2');
      ie_open('p');
      itext('Mark the MObjects as deleted');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nmo.markDeleted(true);', mode: 'javascript' }, null, opt_ijData);
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
      itext('markAsDeleted()');
      ie_close('td');
      ie_open('td');
      itext('Mark the MObject as deleted');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('markAsDeleted(Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Mark the MObject as deleted, cascadingly');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('isDirty');
      ie_close('h2');
      ie_open('p');
      itext('Check if the MObject is dirty');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nBoolean dirty = mo.isDirty();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('isDeleted');
      ie_close('h2');
      ie_open('p');
      itext('Check if the MObject is marked as deleted');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nBoolean deleted = mo.isDeleted();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('persist');
      ie_close('h2');
      ie_open('p');
      itext('Persist the MObject');
      ie_close('p');
      $templateAlias2({ code: 'MObject mo = MObject.create(new Pricebook2(Name=\'pricebook\'));\nmo.put(\'Name\', \'new name\');\nmo.persist();\n\nList<MObject> mos = MObject.createList(new List<Pricebook2>());\nfor(MObject mo : mos) {\n    mo.put(\'Name\', \'new name\');\n}\nMObject.persist(mos);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param425 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'mchiz.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var mchiz = function (_Component) {
  _inherits(mchiz, _Component);

  function mchiz() {
    _classCallCheck(this, mchiz);

    return _possibleConstructorReturn(this, (mchiz.__proto__ || Object.getPrototypeOf(mchiz)).apply(this, arguments));
  }

  return mchiz;
}(_metalComponent2.default);

_metalSoy2.default.register(mchiz, templates);
exports.mchiz = mchiz;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);