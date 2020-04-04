(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/client/components/SearchInput.js":
/*!**********************************************!*\
  !*** ./src/client/components/SearchInput.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var SearchInput = function SearchInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    inline: true,
    className: "cr-search-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_md__WEBPACK_IMPORTED_MODULE_1__["MdSearch"], {
    size: "20",
    className: "cr-search-form__icon-search text-secondary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    id: props.id,
    autoComplete: "off",
    type: "search",
    className: "cr-search-form__input",
    placeholder: props.placeholder,
    onKeyPress: props.onPress,
    onChange: props.changing,
    disabled: props.disabled
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

/***/ }),

/***/ "./src/client/pages/DashboardPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/DashboardPage.js ***!
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
/* harmony import */ var _components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchInput */ "./src/client/components/SearchInput.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var DashboardPage = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(DashboardPage, _React$Component);

  var _super = _createSuper(DashboardPage);

  function DashboardPage(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DashboardPage);

    _this = _super.call(this, props);
    _this.state = {
      buscar: '',
      busqueda: [],
      buscando: false,
      error: {}
    };
    _this.addValor = _this.addValor.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.buscar = _this.buscar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DashboardPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // this is needed, because InfiniteCalendar forces window scroll
      this.datos();
      window.scrollTo(0, 0);
    }
  }, {
    key: "datos",
    value: function datos() {
      var este = this;
      este.setState({
        buscando: true
      });
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('http://localhost:4000/companies2', {
        buscar: this.state.buscar,
        limit: 10
      }).then(function (resp) {
        console.log(resp.data);
        este.setState({
          buscando: false
        });
      })["catch"](function (err) {
        este.setState({
          error: err
        });
        este.setState({
          buscando: false
        });
      });
    }
  }, {
    key: "addValor",
    value: function addValor(event) {
      this.setState({
        buscar: event.target.value
      });
    }
  }, {
    key: "buscar",
    value: function buscar(_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        this.datos();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", null, " Busca tu futuro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          paddingBottom: '8px',
          paddingTop: '8px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "search",
        placeholder: "Search",
        onPress: this.buscar,
        changing: this.addValor,
        disabled: data.buscando
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-primary",
        disabled: data.buscando,
        onClick: function onClick(e) {
          return _this2.datos();
        }
      }, data.buscando ? 'Searching...' : 'Search')))));
    }
  }]);

  return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9wYWdlcy9EYXNoYm9hcmRQYWdlLmpzIl0sIm5hbWVzIjpbIlNlYXJjaElucHV0IiwicHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJpZCIsInBsYWNlaG9sZGVyIiwib25QcmVzcyIsImNoYW5naW5nIiwiZGlzYWJsZWQiLCJEYXNoYm9hcmRQYWdlIiwic3RhdGUiLCJidXNjYXIiLCJidXNxdWVkYSIsImJ1c2NhbmRvIiwiZXJyb3IiLCJhZGRWYWxvciIsImJpbmQiLCJkYXRvcyIsIndpbmRvdyIsInNjcm9sbFRvIiwiZXN0ZSIsInNldFN0YXRlIiwiYXgiLCJwb3N0IiwibGltaXQiLCJ0aGVuIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImtleSIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nVG9wIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QixzQkFDRSwyREFBQywrQ0FBRDtBQUFNLFVBQU0sTUFBWjtBQUFhLGFBQVMsRUFBQyxnQkFBdkI7QUFBd0MsWUFBUSxFQUFFLGtCQUFBQyxDQUFDLEVBQUk7QUFBQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQW1CO0FBQTNFLGtCQUNFLDJEQUFDLHVEQUFEO0FBQ0UsUUFBSSxFQUFDLElBRFA7QUFFRSxhQUFTLEVBQUM7QUFGWixJQURGLGVBS0UsMkRBQUMsZ0RBQUQ7QUFDRSxNQUFFLEVBQUVGLEtBQUssQ0FBQ0csRUFEWjtBQUVFLGdCQUFZLEVBQUMsS0FGZjtBQUdFLFFBQUksRUFBQyxRQUhQO0FBSUUsYUFB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R1ksSUFBSSxDQUFDaEIsUUFBTCxHQUFjLGNBQWQsR0FBNkIsUUFEaEMsQ0FSSixDQURGLENBRkYsQ0FERixDQURGO0FBc0JEOzs7O0VBdkV5QndCLDRDQUFLLENBQUNDLFM7O0FBeUVuQjdCLDRFQUFmLEUiLCJmaWxlIjoiMy5hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZFNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFNlYXJjaElucHV0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIGlubGluZSBjbGFzc05hbWU9XCJjci1zZWFyY2gtZm9ybVwiIG9uU3VibWl0PXtlID0+IHtlLnByZXZlbnREZWZhdWx0KCl9fT5cclxuICAgICAgPE1kU2VhcmNoXHJcbiAgICAgICAgc2l6ZT1cIjIwXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjci1zZWFyY2gtZm9ybV9faWNvbi1zZWFyY2ggdGV4dC1zZWNvbmRhcnlcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBpZD17cHJvcHMuaWR9XHJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJjci1zZWFyY2gtZm9ybV9faW5wdXRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICBvbktleVByZXNzPXtwcm9wcy5vblByZXNzfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2luZ31cclxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuZGlzYWJsZWR9XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xyXG4iLCJpbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hJbnB1dCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCwgQ29sLCBUYWJsZX0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCBheCBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBEYXNoYm9hcmRQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBidXNjYXI6ICcnLFxyXG4gICAgICBidXNxdWVkYTogW10sXHJcbiAgICAgIGJ1c2NhbmRvOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IHt9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmFkZFZhbG9yID0gdGhpcy5hZGRWYWxvci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5idXNjYXIgPSB0aGlzLmJ1c2Nhci5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7IC8vIHRoaXMgaXMgbmVlZGVkLCBiZWNhdXNlIEluZmluaXRlQ2FsZW5kYXIgZm9yY2VzIHdpbmRvdyBzY3JvbGxcclxuICAgIHRoaXMuZGF0b3MoKTtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICB9XHJcblxyXG4gIGRhdG9zKCl7XHJcbiAgICBsZXQgZXN0ZSA9IHRoaXM7XHJcbiAgICBlc3RlLnNldFN0YXRlKHtidXNjYW5kbzp0cnVlfSk7XHJcbiAgICBcclxuICAgIGF4LnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9jb21wYW5pZXMyJywge2J1c2NhcjogdGhpcy5zdGF0ZS5idXNjYXIsIGxpbWl0OiAxMH0pXHJcbiAgICAgIC50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSk7XHJcbiAgICAgICAgZXN0ZS5zZXRTdGF0ZSh7YnVzY2FuZG86ZmFsc2V9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgZXN0ZS5zZXRTdGF0ZSh7IGVycm9yOiBlcnIgfSk7XHJcbiAgICAgICAgZXN0ZS5zZXRTdGF0ZSh7YnVzY2FuZG86ZmFsc2V9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRWYWxvciAoZXZlbnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGJ1c2NhcjpldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYnVzY2FyKHtrZXl9KXtcclxuICAgIGlmKGtleSA9PT0gJ0VudGVyJyl7XHJcbiAgICAgIHRoaXMuZGF0b3MoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgPGgyPiBCdXNjYSB0dSBmdXR1cm88L2gyPiBcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nQm90dG9tOic4cHgnLCBwYWRkaW5nVG9wOic4cHgnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiID5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hJbnB1dFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgb25QcmVzcz17dGhpcy5idXNjYXJ9XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5naW5nPXt0aGlzLmFkZFZhbG9yfVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGF0YS5idXNjYW5kb31cclxuICAgICAgICAgICAgICAgID48L1NlYXJjaElucHV0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tcHJpbWFyeScgZGlzYWJsZWQ9e2RhdGEuYnVzY2FuZG99IG9uQ2xpY2s9e2UgPT4gdGhpcy5kYXRvcygpfT5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuYnVzY2FuZG8/J1NlYXJjaGluZy4uLic6J1NlYXJjaCd9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9