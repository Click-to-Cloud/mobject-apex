var pageComponent =
webpackJsonppageComponent([18],{

/***/ 268:
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

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ksmTt = function (_Component) {
  _inherits(ksmTt, _Component);

  function ksmTt() {
    _classCallCheck(this, ksmTt);

    return _possibleConstructorReturn(this, (ksmTt.__proto__ || Object.getPrototypeOf(ksmTt)).apply(this, arguments));
  }

  return ksmTt;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ksmTt, _indexSoy2.default);

exports.default = ksmTt;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ksmTt = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ksmTt.
   * @public
   */

  goog.module('ksmTt.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is an MObject?');
      ie_close('h2');
      ie_open('p');
      itext('MObjects are short for Managed Objects, peer of SObjects. MObjects have similar data as SObjects.');
      ie_close('p');
      ie_open('p');
      itext('The difference between MObjects and SObjects is that MObjects track the changes and will flush the changes to persistence later.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Aspect');
      ie_close('th');
      ie_open('th');
      itext('MObject');
      ie_close('th');
      ie_open('th');
      itext('SObject');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Field Access');
      ie_close('td');
      ie_open('td');
      itext('Support nested field access through method calls');
      ie_close('td');
      ie_open('td');
      itext('Direct field access through \'.\'');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Field Update');
      ie_close('td');
      ie_open('td');
      itext('Support field update through method calls');
      ie_close('td');
      ie_open('td');
      itext('Reference and relationship fields cannot be updated directly');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DML Operations');
      ie_close('td');
      ie_open('td');
      itext('Can be done in one method call');
      ie_close('td');
      ie_open('td');
      itext('Have to sort out SObjects before doing DML operations');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Principals');
      ie_close('h2');
      ie_open('p');
      itext('MObjects are used to facilitate DML operations on SObjects.');
      ie_close('p');
      ie_open('p');
      itext('Recommended usages are complicated DML operations spread in multiple SObjects.');
      ie_close('p');
      ie_open('p');
      itext('Example:');
      ie_close('p');
      $templateAlias2({ code: 'MObject mpb = MObject.create(new Pricebook2());\nmpb.put(\'Name\', \'Price Book\');\n\nMObject mop = MObject.create(new Opportunity());\nmop.put(\'Name\', \'Opportunity\');\nmop.put(\'Pricebook2\', mpb);\nmop.persist();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Object Network');
      ie_close('h2');
      ie_open('p');
      itext('MObjects attempt to maintain an object network and usages through object access is promoted.');
      ie_close('p');
      ie_open('p');
      itext('This means that the lookup fields of SObjects will not be managed in MObjects. Instead, they are contained in managing the reference objects.');
      ie_close('p');
      $templateAlias2({ code: 'MObject mop = MObject.create(new Opportunity());\nmop.put(\'Name\', \'Opportunity\');\nmop.put(\'Pricebook2\', mpb);\n// Cannot do below\nmop.put(\'Pricebook2Id\', mpb.get(\'Id\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('How MObjects are Managed');
      ie_close('h2');
      ie_open('p');
      itext('MObjects have some status fields to indicate the future DML operations on them.');
      ie_close('p');
      ie_open('p');
      itext('If the MObjects are marked as deleted, deletion operation will be carried on them.');
      ie_close('p');
      ie_open('p');
      itext('If the MObjects are marked as dirty, update operation will be carried on them.');
      ie_close('p');
      ie_open('p');
      itext('If the MObjects have no Ids on them, insertion operation will be carried on them.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Managed Persistence');
      ie_close('h2');
      ie_open('p');
      itext('Below is the process of managed persistence.');
      ie_close('p');
      ie_open('ol');
      ie_open('li');
      ie_open('p');
      itext('A list of MObjects are accepted to be put into persistence.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Traverse the MObjects to find the ones to be deleted.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Perform deletion operations.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Traverse the MObjects to find the ones that can be inserted, without the needs for others\' ids.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Perform insertion operations on these MObjects.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Continue Step.4 until no MObjects to be inserted are found.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Traverse the MObjects to find the ones to be updated.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Perform update operations.');
      ie_close('p');
      ie_close('li');
      ie_close('ol');
      ie_open('p');
      itext('The DML operations generated are as below:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operation Name');
      ie_close('th');
      ie_open('th');
      itext('Count');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Insert');
      ie_close('td');
      ie_open('td');
      itext('0 to N');
      ie_close('td');
      ie_open('td');
      itext('Depends on the complexity of SObjects referencing each other');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Delete');
      ie_close('td');
      ie_open('td');
      itext('0 to 1');
      ie_close('td');
      ie_open('td');
      itext('All SObjects are deleted in one DML call');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Update');
      ie_close('td');
      ie_open('td');
      itext('0 to 1');
      ie_close('td');
      ie_open('td');
      itext('All SObjects are updated in one DML call');
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
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ksmTt.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ksmTt = function (_Component) {
  _inherits(ksmTt, _Component);

  function ksmTt() {
    _classCallCheck(this, ksmTt);

    return _possibleConstructorReturn(this, (ksmTt.__proto__ || Object.getPrototypeOf(ksmTt)).apply(this, arguments));
  }

  return ksmTt;
}(_metalComponent2.default);

_metalSoy2.default.register(ksmTt, templates);
exports.ksmTt = ksmTt;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);