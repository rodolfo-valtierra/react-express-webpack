(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

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

/***/ "./src/client/pages/AlertPage.js":
/*!***************************************!*\
  !*** ./src/client/pages/AlertPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Page */ "./src/client/components/Page.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Typography */ "./src/client/components/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* eslint-disable jsx-a11y/href-no-hash */





var AlertPage = function AlertPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Alerts",
    breadcrumbs: [{
      name: 'alerts',
      active: true
    }]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, "Alerts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "primary"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "secondary"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "danger"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "warning"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "info"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "light"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "dark"
  }, "Give it a", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "#link",
    className: "alert-link"
  }, "click"), ' ', "if you like.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, "Dismiss"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "primary"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "secondary"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "success"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "danger"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "warning"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "info"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "light"
  }, "I am an alert and I can be dismissed!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["UncontrolledAlert"], {
    color: "dark"
  }, "I am an alert and I can be dismissed!"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], null, "Additional Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    color: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "h4",
    className: "alert-heading"
  }, "Well done!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "mb-0"
  }, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (AlertPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3BhZ2VzL0FsZXJ0UGFnZS5qcyJdLCJuYW1lcyI6WyJiZW0iLCJibiIsImNyZWF0ZSIsIlBhZ2UiLCJ0aXRsZSIsImJyZWFkY3J1bWJzIiwiVGFnIiwidGFnIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0UHJvcHMiLCJjbGFzc2VzIiwiYiIsImUiLCJsZW5ndGgiLCJtYXAiLCJpbmRleCIsIm5hbWUiLCJhY3RpdmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJjb21wb25lbnQiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJlbGVtZW50Iiwibm9kZSIsImFycmF5T2YiLCJzaGFwZSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ0YWdNYXAiLCJoMSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJwIiwibGVhZCIsImJsb2NrcXVvdGUiLCJ0eXBlcyIsIk9iamVjdCIsImtleXMiLCJUeXBvZ3JhcGh5IiwidHlwZSIsImNsYXNzTmFtZXMiLCJUeXBvQ29tcCIsIm9uZU9mIiwiQWxlcnRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHVEQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLENBQVo7O0FBRUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FPUDtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkNDLEdBSUQsUUFKSkMsR0FJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BRERDLFNBQ0M7O0FB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QkFDRSwyREFBQywrQ0FBRCxxQkFDRSwyREFBQyxxREFBRCxrQkFERixlQUVFLDJEQUFDLG1EQUFELHFCQUNFLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FERixlQUlFLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FKRixlQU9FLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FQRixlQVVFLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FWRixlQWFFLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FiRixlQWdCRSwyREFBQyw0REFBRDtBQUFtQixTQUFLLEVBQUM7QUFBekIsNkNBaEJGLGVBbUJFLDJEQUFDLDREQUFEO0FBQW1CLFNBQUssRUFBQztBQUF6Qiw2Q0FuQkYsZUFzQkUsMkRBQUMsNERBQUQ7QUFBbUIsU0FBSyxFQUFDO0FBQXpCLDZDQXRCRixDQUZGLENBREYsQ0FqRUYsQ0FERixlQW1HRSwyREFBQyw4Q0FBRCxxQkFDRSwyREFBQyw4Q0FBRCxxQkFDRSwyREFBQywrQ0FBRCxxQkFDRSwyREFBQyxxREFBRCw2QkFERixlQUVFLDJEQUFDLG1EQUFELHFCQUNFLDJEQUFDLGdEQUFEO0FBQU8sU0FBSyxFQUFDO0FBQWIsa0JBQ0UsMkRBQUMsOERBQUQ7QUFBWSxRQUFJLEVBQUMsSUFBakI7QUFBc0IsYUFBUyxFQUFDO0FBQWhDLGtCQURGLGVBSUUsMkRBQUMsOERBQUQsd01BSkYsZUFVRSxzRUFWRixlQVdFLDJEQUFDLDhEQUFEO0FBQVksYUFBUyxFQUFDO0FBQXRCLDJGQVhGLENBREYsQ0FGRixDQURGLENBREYsQ0FuR0YsQ0FERjtBQStIRCxDQWhJRDs7QUFrSWU4Qix3RUFBZixFIiwiZmlsZSI6IjAuYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICcuLi91dGlscy9wcm9wVHlwZXMnO1xyXG5cclxuaW1wb3J0IGJuIGZyb20gJy4uL3V0aWxzL2JlbW5hbWVzJztcclxuXHJcbmltcG9ydCB7IEJyZWFkY3J1bWIsIEJyZWFkY3J1bWJJdGVtIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgYmVtID0gYm4uY3JlYXRlKCdwYWdlJyk7XHJcblxyXG5jb25zdCBQYWdlID0gKHtcclxuICB0aXRsZSxcclxuICBicmVhZGNydW1icyxcclxuICB0YWc6IFRhZyxcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgLi4ucmVzdFByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gYmVtLmIoJ3B4LTMnLCBjbGFzc05hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhZyBjbGFzc05hbWU9e2NsYXNzZXN9IHsuLi5yZXN0UHJvcHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmVtLmUoJ2hlYWRlcicpfT5cclxuICAgICAgICB7dGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IChcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHR5cGU9XCJoMVwiIGNsYXNzTmFtZT17YmVtLmUoJ3RpdGxlJyl9PlxyXG4gICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAge2JyZWFkY3J1bWJzICYmIChcclxuICAgICAgICAgIDxCcmVhZGNydW1iIGNsYXNzTmFtZT17YmVtLmUoJ2JyZWFkY3J1bWInKX0+XHJcbiAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbT5Ib21lPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAge2JyZWFkY3J1bWJzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgIGJyZWFkY3J1bWJzLm1hcCgoeyBuYW1lLCBhY3RpdmUgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iSXRlbSBrZXk9e2luZGV4fSBhY3RpdmU9e2FjdGl2ZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9CcmVhZGNydW1iSXRlbT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9UYWc+XHJcbiAgKTtcclxufTtcclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHRhZzogUHJvcFR5cGVzLmNvbXBvbmVudCxcclxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIGJyZWFkY3J1bWJzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB9KVxyXG4gICksXHJcbn07XHJcblxyXG5QYWdlLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0YWc6ICdkaXYnLFxyXG4gIHRpdGxlOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJy4uL3V0aWxzL3Byb3BUeXBlcyc7XHJcblxyXG5jb25zdCB0YWdNYXAgPSB7XHJcbiAgaDE6ICdoMScsXHJcbiAgaDI6ICdoMicsXHJcbiAgaDM6ICdoMycsXHJcbiAgaDQ6ICdoNCcsXHJcbiAgaDU6ICdoNScsXHJcbiAgaDY6ICdoNicsXHJcbiAgJ2Rpc3BsYXktMSc6ICdoMScsXHJcbiAgJ2Rpc3BsYXktMic6ICdoMScsXHJcbiAgJ2Rpc3BsYXktMyc6ICdoMScsXHJcbiAgJ2Rpc3BsYXktNCc6ICdoMScsXHJcbiAgcDogJ3AnLFxyXG4gIGxlYWQ6ICdwJyxcclxuICBibG9ja3F1b3RlOiAnYmxvY2txdW90ZScsXHJcbn07XHJcblxyXG5jb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHRhZ01hcCk7XHJcblxyXG5jb25zdCBUeXBvZ3JhcGh5ID0gKHsgdGFnOiBUYWcsIGNsYXNzTmFtZSwgdHlwZSwgLi4ucmVzdFByb3BzIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyh7IFt0eXBlXTogISF0eXBlIH0sIGNsYXNzTmFtZSk7XHJcbiAgbGV0IFR5cG9Db21wO1xyXG5cclxuICBpZiAoVGFnKSB7XHJcbiAgICBUeXBvQ29tcCA9IFRhZztcclxuICB9IGVsc2UgaWYgKCFUYWcgJiYgdGFnTWFwW3R5cGVdKSB7XHJcbiAgICBUeXBvQ29tcCA9IHRhZ01hcFt0eXBlXTtcclxuICB9IGVsc2Uge1xyXG4gICAgVHlwb0NvbXAgPSAncCc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPFR5cG9Db21wIHsuLi5yZXN0UHJvcHN9IGNsYXNzTmFtZT17Y2xhc3Nlc30gLz47XHJcbn07XHJcblxyXG5UeXBvZ3JhcGh5LnByb3BUeXBlcyA9IHtcclxuICB0YWc6IFByb3BUeXBlcy5jb21wb25lbnQsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZih0eXBlcyksXHJcbn07XHJcblxyXG5UeXBvZ3JhcGh5LmRlZmF1bHRQcm9wcyA9IHtcclxuICB0eXBlOiAncCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUeXBvZ3JhcGh5O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9ocmVmLW5vLWhhc2ggKi9cclxuXHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQWxlcnQsXHJcbiAgQ2FyZCxcclxuICBDYXJkQm9keSxcclxuICBDYXJkSGVhZGVyLFxyXG4gIENvbCxcclxuICBSb3csXHJcbiAgVW5jb250cm9sbGVkQWxlcnQsXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBBbGVydFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlIHRpdGxlPVwiQWxlcnRzXCIgYnJlYWRjcnVtYnM9e1t7IG5hbWU6ICdhbGVydHMnLCBhY3RpdmU6IHRydWUgfV19PlxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXI+QWxlcnRzPC9DYXJkSGVhZGVyPlxyXG4gICAgICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgR2l2ZSBpdCBheycgJ31cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgY2xpY2tcclxuICAgICAgICAgICAgICAgIDwvYT57JyAnfVxyXG4gICAgICAgICAgICAgICAgaWYgeW91IGxpa2UuXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9XCJzZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgIEdpdmUgaXQgYXsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrXHJcbiAgICAgICAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgICAgICAgIGlmIHlvdSBsaWtlLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgR2l2ZSBpdCBheycgJ31cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgY2xpY2tcclxuICAgICAgICAgICAgICAgIDwvYT57JyAnfVxyXG4gICAgICAgICAgICAgICAgaWYgeW91IGxpa2UuXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIEdpdmUgaXQgYXsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrXHJcbiAgICAgICAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgICAgICAgIGlmIHlvdSBsaWtlLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPEFsZXJ0IGNvbG9yPVwid2FybmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgR2l2ZSBpdCBheycgJ31cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbGlua1wiIGNsYXNzTmFtZT1cImFsZXJ0LWxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgY2xpY2tcclxuICAgICAgICAgICAgICAgIDwvYT57JyAnfVxyXG4gICAgICAgICAgICAgICAgaWYgeW91IGxpa2UuXHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICA8QWxlcnQgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBHaXZlIGl0IGF7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPVwiYWxlcnQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICBjbGlja1xyXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XHJcbiAgICAgICAgICAgICAgICBpZiB5b3UgbGlrZS5cclxuICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgIDxBbGVydCBjb2xvcj1cImxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICBHaXZlIGl0IGF7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNsaW5rXCIgY2xhc3NOYW1lPVwiYWxlcnQtbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICBjbGlja1xyXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XHJcbiAgICAgICAgICAgICAgICBpZiB5b3UgbGlrZS5cclxuICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgIDxBbGVydCBjb2xvcj1cImRhcmtcIj5cclxuICAgICAgICAgICAgICAgIEdpdmUgaXQgYXsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2xpbmtcIiBjbGFzc05hbWU9XCJhbGVydC1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIGNsaWNrXHJcbiAgICAgICAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgICAgICAgIGlmIHlvdSBsaWtlLlxyXG4gICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgIDxDb2w+XHJcbiAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgPENhcmRIZWFkZXI+RGlzbWlzczwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRBbGVydCBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIEkgYW0gYW4gYWxlcnQgYW5kIEkgY2FuIGJlIGRpc21pc3NlZCFcclxuICAgICAgICAgICAgICA8L1VuY29udHJvbGxlZEFsZXJ0PlxyXG4gICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRBbGVydCBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgSSBhbSBhbiBhbGVydCBhbmQgSSBjYW4gYmUgZGlzbWlzc2VkIVxyXG4gICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPFVuY29udHJvbGxlZEFsZXJ0IGNvbG9yPVwic3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgSSBhbSBhbiBhbGVydCBhbmQgSSBjYW4gYmUgZGlzbWlzc2VkIVxyXG4gICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPFVuY29udHJvbGxlZEFsZXJ0IGNvbG9yPVwiZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICBJIGFtIGFuIGFsZXJ0IGFuZCBJIGNhbiBiZSBkaXNtaXNzZWQhXHJcbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRBbGVydD5cclxuICAgICAgICAgICAgICA8VW5jb250cm9sbGVkQWxlcnQgY29sb3I9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBJIGFtIGFuIGFsZXJ0IGFuZCBJIGNhbiBiZSBkaXNtaXNzZWQhXHJcbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRBbGVydD5cclxuICAgICAgICAgICAgICA8VW5jb250cm9sbGVkQWxlcnQgY29sb3I9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICBJIGFtIGFuIGFsZXJ0IGFuZCBJIGNhbiBiZSBkaXNtaXNzZWQhXHJcbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRBbGVydD5cclxuICAgICAgICAgICAgICA8VW5jb250cm9sbGVkQWxlcnQgY29sb3I9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgSSBhbSBhbiBhbGVydCBhbmQgSSBjYW4gYmUgZGlzbWlzc2VkIVxyXG4gICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkQWxlcnQ+XHJcbiAgICAgICAgICAgICAgPFVuY29udHJvbGxlZEFsZXJ0IGNvbG9yPVwiZGFya1wiPlxyXG4gICAgICAgICAgICAgICAgSSBhbSBhbiBhbGVydCBhbmQgSSBjYW4gYmUgZGlzbWlzc2VkIVxyXG4gICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkQWxlcnQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG5cclxuICAgICAgPFJvdz5cclxuICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgIDxDYXJkSGVhZGVyPkFkZGl0aW9uYWwgQ29udGVudDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICAgIDxBbGVydCBjb2xvcj1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHR5cGU9XCJoNFwiIGNsYXNzTmFtZT1cImFsZXJ0LWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgV2VsbCBkb25lIVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIEF3dyB5ZWFoLCB5b3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS5cclxuICAgICAgICAgICAgICAgICAgVGhpcyBleGFtcGxlIHRleHQgaXMgZ29pbmcgdG8gcnVuIGEgYml0IGxvbmdlciBzbyB0aGF0IHlvdSBjYW5cclxuICAgICAgICAgICAgICAgICAgc2VlIGhvdyBzcGFjaW5nIHdpdGhpbiBhbiBhbGVydCB3b3JrcyB3aXRoIHRoaXMga2luZCBvZlxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50LlxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIFdoZW5ldmVyIHlvdSBuZWVkIHRvLCBiZSBzdXJlIHRvIHVzZSBtYXJnaW4gdXRpbGl0aWVzIHRvIGtlZXBcclxuICAgICAgICAgICAgICAgICAgdGhpbmdzIG5pY2UgYW5kIHRpZHkuXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICA8L1BhZ2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsZXJ0UGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==