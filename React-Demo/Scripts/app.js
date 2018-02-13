/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// 1. Create a React component that renders some HTML.
	var Page = function (_React$Component) {
	    _inherits(Page, _React$Component);
	
	    function Page() {
	        _classCallCheck(this, Page);
	
	        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
	    }
	
	    _createClass(Page, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: "react-container" },
	                React.createElement(
	                    "h1",
	                    null,
	                    "Hello world! The state.content variable is: " + this.props.content
	                ),
	                React.createElement(
	                    "a",
	                    { href: "#", onClick: this.props.changeState },
	                    "Click to change the state."
	                )
	            );
	        }
	    }]);
	
	    return Page;
	}(React.Component);
	
	// 2. Connect the React component (Page) to Redux state management.
	// (The objects returned from both methods are combined and become 'this.props' in the React component).
	
	
	var ReduxConnectedPage = ReactRedux.connect(
	// Map state to props
	function (state) {
	    return state;
	},
	// Map dispatch to props
	function (dispatch) {
	    return {
	        changeState: function changeState() {
	            dispatch({ type: "EXAMPLE_ACTION" });
	        }
	    };
	})(Page);
	
	// 3. Set up a Reducer function to update the state whenever an event occurs.
	// 'state' is the current page state, and 'action' contains info about what event occurred.
	var Reducer = function Reducer(state, action) {
	    if (action.type === "EXAMPLE_ACTION") {
	        return {
	            content: "it changed " + state.number++ + " times",
	            number: state.number
	        };
	    }
	
	    return { content: "some-random-state-info", number: 1 };
	};
	
	// 4. This is just boilerplate to get everything hooked up and rendered on the page.
	var ReduxStore = Redux.createStore(Reducer);
	$(document).ready(function () {
	    ReactDOM.render(React.createElement(
	        ReactRedux.Provider,
	        { store: ReduxStore },
	        React.createElement(ReduxConnectedPage, null)
	    ), document.getElementById('react-demo'));
	});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map