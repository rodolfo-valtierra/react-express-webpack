(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/client/components/Page.js":
/*!***************************************!*\
  !*** ./src/client/components/Page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/propTypes */ "./src/client/utils/propTypes.js");
/* harmony import */ var _utils_bemnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/bemnames */ "./src/client/utils/bemnames.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Typography */ "./src/client/components/Typography.js");







var bem = _utils_bemnames__WEBPACK_IMPORTED_MODULE_4__["default"].create('page');

var Page = function Page(_ref) {
  var title = _ref.title,
      breadcrumbs = _ref.breadcrumbs,
      Tag = _ref.tag,
      className = _ref.className,
      children = _ref.children,
      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["title", "breadcrumbs", "tag", "className", "children"]);

  var classes = bem.b('px-3', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Tag, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classes
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: bem.e('header')
  }, title && typeof title === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "h1",
    className: bem.e('title')
  }, title) : title, breadcrumbs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Breadcrumb"], {
    className: bem.e('breadcrumb')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbItem"], null, "Home"), breadcrumbs.length && breadcrumbs.map(function (_ref2, index) {
    var name = _ref2.name,
        active = _ref2.active;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbItem"], {
      key: index,
      active: active
    }, name);
  }))), children);
};

Page.propTypes = {
  tag: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].component,
  title: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].oneOfType([_utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].string, _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].element]),
  className: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].string,
  children: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].node,
  breadcrumbs: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].arrayOf(_utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].shape({
    name: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].string,
    active: _utils_propTypes__WEBPACK_IMPORTED_MODULE_3__["default"].bool
  }))
};
Page.defaultProps = {
  tag: 'div',
  title: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/client/components/Typography.js":
/*!*********************************************!*\
  !*** ./src/client/components/Typography.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/propTypes */ "./src/client/utils/propTypes.js");






var tagMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'display-1': 'h1',
  'display-2': 'h1',
  'display-3': 'h1',
  'display-4': 'h1',
  p: 'p',
  lead: 'p',
  blockquote: 'blockquote'
};
var types = Object.keys(tagMap);

var Typography = function Typography(_ref) {
  var Tag = _ref.tag,
      className = _ref.className,
      type = _ref.type,
      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["tag", "className", "type"]);

  var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, type, !!type), className);
  var TypoComp;

  if (Tag) {
    TypoComp = Tag;
  } else if (!Tag && tagMap[type]) {
    TypoComp = tagMap[type];
  } else {
    TypoComp = 'p';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TypoComp, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
    className: classes
  }));
};

Typography.propTypes = {
  tag: _utils_propTypes__WEBPACK_IMPORTED_MODULE_5__["default"].component,
  className: _utils_propTypes__WEBPACK_IMPORTED_MODULE_5__["default"].string,
  type: _utils_propTypes__WEBPACK_IMPORTED_MODULE_5__["default"].oneOf(types)
};
Typography.defaultProps = {
  type: 'p'
};
/* harmony default export */ __webpack_exports__["default"] = (Typography);

/***/ }),

/***/ "./src/client/pages/AuthModalPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/AuthModalPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AuthForm */ "./src/client/components/AuthForm.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Page */ "./src/client/components/Page.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AuthModalPage = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AuthModalPage, _React$Component);

  var _super = _createSuper(AuthModalPage);

  function AuthModalPage() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AuthModalPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      show: false,
      authState: _components_AuthForm__WEBPACK_IMPORTED_MODULE_7__["STATE_LOGIN"]
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "toggle", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleAuthState", function (authState) {
      _this.setState({
        authState: authState
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AuthModalPage, [{
    key: "render",
    value: function render() {
      var externalCloseBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "close",
        style: {
          position: 'absolute',
          top: '15px',
          right: '20px',
          fontSize: '3rem'
        },
        onClick: this.toggle
      }, "\xD7");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: "Login Modal",
        breadcrumbs: [{
          name: 'login modal',
          active: true
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        md: "12",
        sm: "12",
        xs: "12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardHeader"], null, "Login Modal Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
        color: "danger",
        onClick: this.toggle
      }, "Click to Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Modal"], {
        isOpen: this.state.show,
        toggle: this.toggle,
        size: "sm",
        backdrop: "static",
        backdropClassName: "modal-backdrop-light",
        external: externalCloseBtn,
        centered: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["ModalBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_AuthForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        authState: this.state.authState,
        onChangeAuthState: this.handleAuthState
      }))))))));
    }
  }]);

  return AuthModalPage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthModalPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL0F1dGhNb2RhbFBhZ2UuanMiXSwibmFtZXMiOlsiYmVtIiwiYm4iLCJjcmVhdGUiLCJQYWdlIiwidGl0bGUiLCJicmVhZGNydW1icyIsIlRhZyIsInRhZyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicmVzdFByb3BzIiwiY2xhc3NlcyIsImIiLCJlIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJuYW1lIiwiYWN0aXZlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiY29tcG9uZW50Iiwib25lT2ZUeXBlIiwic3RyaW5nIiwiZWxlbWVudCIsIm5vZGUiLCJhcnJheU9mIiwic2hhcGUiLCJib29sIiwiZGVmYXVsdFByb3BzIiwidGFnTWFwIiwiaDEiLCJoMiIsImgzIiwiaDQiLCJoNSIsImg2IiwicCIsImxlYWQiLCJibG9ja3F1b3RlIiwidHlwZXMiLCJPYmplY3QiLCJrZXlzIiwiVHlwb2dyYXBoeSIsInR5cGUiLCJjbGFzc05hbWVzIiwiVHlwb0NvbXAiLCJvbmVPZiIsIkF1dGhNb2RhbFBhZ2UiLCJzaG93IiwiYXV0aFN0YXRlIiwiU1RBVEVfTE9HSU4iLCJzZXRTdGF0ZSIsInN0YXRlIiwiZXh0ZXJuYWxDbG9zZUJ0biIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJmb250U2l6ZSIsInRvZ2dsZSIsImhhbmRsZUF1dGhTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHVEQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLENBQVo7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElB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QWlCLEVBQUUsS0FBS1U7QUFGMUIsUUFERixDQVJGLENBSkYsQ0FGRixDQURGLENBREYsQ0FIRixDQURGO0FBaUNEOzs7O0VBbEV5QkMsNENBQUssQ0FBQ0MsUzs7QUFxRW5CZCw0RUFBZixFIiwiZmlsZSI6IjIuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICcuLi91dGlscy9wcm9wVHlwZXMnO1xyXG5cclxuaW1wb3J0IGJuIGZyb20gJy4uL3V0aWxzL2JlbW5hbWVzJztcclxuXHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIEJyZWFkY3J1bWJJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgYmVtID0gYm4uY3JlYXRlKCdwYWdlJyk7XHJcblxyXG5jb25zdCBQYWdlID0gKHtcclxuICB0aXRsZSxcclxuICBicmVhZGNydW1icyxcclxuICB0YWc6IFRhZyxcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucmVzdFByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gYmVtLmIoJ3B4LTMnLCBjbGFzc05hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmVtLmUoJ2hlYWRlcicpfT5cclxuICAgICAgICB7dGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHR5cGU9XCJoMVwiIGNsYXNzTmFtZT17YmVtLmUoJ3RpdGxlJyl9PlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAge2JyZWFkY3J1bWJzICYmIChcclxuICAgICAgICAgIDxCcmVhZGNydW1iIGNsYXNzTmFtZT17YmVtLmUoJ2JyZWFkY3J1bWInKX0+XHJcbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5Ib21lPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAge2JyZWFkY3J1bWJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzLm1hcCgoeyBuYW1lLCBhY3RpdmUgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBrZXk9e2luZGV4fSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UYWc+XHJcbiAgKTtcclxufTtcclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRhZzogUHJvcFR5cGVzLmNvbXBvbmVudCxcclxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGJyZWFkY3J1bWJzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB9KVxyXG4gICksXHJcbn07XHJcblxyXG5QYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YWc6ICdkaXYnLFxyXG4gIHRpdGxlOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJy4uL3V0aWxzL3Byb3BUeXBlcyc7XHJcblxyXG5jb25zdCB0YWdNYXAgPSB7XHJcbiAgaDE6ICdoMScsXHJcbiAgaDI6ICdoMicsXHJcbiAgaDM6ICdoMycsXHJcbiAgaDQ6ICdoNCcsXHJcbiAgaDU6ICdoNScsXHJcbiAgaDY6ICdoNicsXHJcbiAgJ2Rpc3BsYXktMSc6ICdoMScsXHJcbiAgJ2Rpc3BsYXktMic6ICdoMScsXHJcbiAgJ2Rpc3BsYXktMyc6ICdoMScsXHJcbiAgJ2Rpc3BsYXktNCc6ICdoMScsXHJcbiAgcDogJ3AnLFxyXG4gIGxlYWQ6ICdwJyxcclxuICBibG9ja3F1b3RlOiAnYmxvY2txdW90ZScsXHJcbn07XHJcblxyXG5jb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHRhZ01hcCk7XHJcblxyXG5jb25zdCBUeXBvZ3JhcGh5ID0gKHsgdGFnOiBUYWcsIGNsYXNzTmFtZSwgdHlwZSwgLi4ucmVzdFByb3BzIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7IFt0eXBlXTogISF0eXBlIH0sIGNsYXNzTmFtZSk7XHJcbiAgbGV0IFR5cG9Db21wO1xyXG5cclxuICBpZiAoVGFnKSB7XHJcbiAgICBUeXBvQ29tcCA9IFRhZztcclxuICB9IGVsc2UgaWYgKCFUYWcgJiYgdGFnTWFwW3R5cGVdKSB7XHJcbiAgICBUeXBvQ29tcCA9IHRhZ01hcFt0eXBlXTtcclxuICB9IGVsc2Uge1xyXG4gICAgVHlwb0NvbXAgPSAncCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFR5cG9Db21wIHsuLi5yZXN0UHJvcHN9IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz47XHJcbn07XHJcblxyXG5UeXBvZ3JhcGh5LnByb3BUeXBlcyA9IHtcclxuICB0YWc6IFByb3BUeXBlcy5jb21wb25lbnQsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZih0eXBlcyksXHJcbn07XHJcblxyXG5UeXBvZ3JhcGh5LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0eXBlOiAncCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBvZ3JhcGh5O1xyXG4iLCJpbXBvcnQgQXV0aEZvcm0sIHsgU1RBVEVfTE9HSU4gfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGhGb3JtJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENvbCxcclxuICBNb2RhbCxcclxuICBNb2RhbEJvZHksXHJcbiAgUm93LFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY2xhc3MgQXV0aE1vZGFsUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIGF1dGhTdGF0ZTogU1RBVEVfTE9HSU4sXHJcbiAgfTtcclxuXHJcbiAgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHNob3c6ICF0aGlzLnN0YXRlLnNob3csXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVBdXRoU3RhdGUgPSBhdXRoU3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGF1dGhTdGF0ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGV4dGVybmFsQ2xvc2VCdG4gPSAoXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgdG9wOiAnMTVweCcsXHJcbiAgICAgICAgICByaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgZm9udFNpemU6ICczcmVtJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT5cclxuICAgICAgICAmdGltZXM7XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UGFnZVxyXG4gICAgICAgIHRpdGxlPVwiTG9naW4gTW9kYWxcIlxyXG4gICAgICAgIGJyZWFkY3J1bWJzPXtbeyBuYW1lOiAnbG9naW4gbW9kYWwnLCBhY3RpdmU6IHRydWUgfV19PlxyXG4gICAgICAgIDxSb3c+XHJcbiAgICAgICAgICA8Q29sIG1kPVwiMTJcIiBzbT1cIjEyXCIgeHM9XCIxMlwiPlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlcj5Mb2dpbiBNb2RhbCBFeGFtcGxlPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgIENsaWNrIHRvIExvZ2luXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUuc2hvd31cclxuICAgICAgICAgICAgICAgICAgdG9nZ2xlPXt0aGlzLnRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgYmFja2Ryb3A9XCJzdGF0aWNcIlxyXG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcENsYXNzTmFtZT1cIm1vZGFsLWJhY2tkcm9wLWxpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgZXh0ZXJuYWw9e2V4dGVybmFsQ2xvc2VCdG59XHJcbiAgICAgICAgICAgICAgICAgIGNlbnRlcmVkPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRoRm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aFN0YXRlPXt0aGlzLnN0YXRlLmF1dGhTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQXV0aFN0YXRlPXt0aGlzLmhhbmRsZUF1dGhTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvUGFnZT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kYWxQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9