'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Buttons = exports.Nav = exports.List = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSwipeableViews = require('react-swipeable-views');

var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = exports.List = function (_Component) {
	_inherits(List, _Component);

	function List(props) {
		_classCallCheck(this, List);

		var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

		_this.handleChangeIndex = function (index) {
			_this.props.activateByKey(index);
		};

		return _this;
	}

	_createClass(List, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    Container = _props.container,
			    Component = _props.component,
			    items = _props.items,
			    activeKey = _props.activeKey,
			    svProps = _props.svProps,
			    restProps = _objectWithoutProperties(_props, ['container', 'component', 'items', 'activeKey', 'svProps']);

			return Container ? _react2.default.createElement(
				Container,
				restProps,
				_react2.default.createElement(
					_reactSwipeableViews2.default,
					_extends({ index: activeKey, onChangeIndex: this.handleChangeIndex }, svProps),
					items.map(function (itemData, keyId) {
						return Component ? _react2.default.createElement(Component, _extends({}, restProps, { key: keyId, keyId: keyId, data: itemData })) : null;
					})
				)
			) : null;
		}
	}]);

	return List;
}(_react.Component);

process.env.NODE_ENV !== "production" ? List.propTypes = {
	container: _propTypes2.default.func,
	component: _propTypes2.default.func,
	items: _propTypes2.default.array,
	activateByKey: _propTypes2.default.func,
	svProps: _propTypes2.default.object
} : void 0;
var Nav = exports.Nav = function Nav(_ref) {
	var Container = _ref.container,
	    Component = _ref.component,
	    labels = _ref.labels,
	    items = _ref.items,
	    noLabels = _ref.noLabels,
	    restProps = _objectWithoutProperties(_ref, ['container', 'component', 'labels', 'items', 'noLabels']);

	labels = noLabels ? items : labels;
	return Container ? _react2.default.createElement(
		Container,
		restProps,
		labels.map(function (data, keyId) {
			return Component ? _react2.default.createElement(Component, _extends({}, restProps, {
				key: keyId,
				keyId: keyId,
				data: data
			})) : null;
		})
	) : null;
};

var Buttons = exports.Buttons = function Buttons(_ref2) {
	var Container = _ref2.container,
	    Component = _ref2.component,
	    activeKey = _ref2.activeKey,
	    activateByKey = _ref2.activateByKey,
	    count = _ref2.count,
	    restProps = _objectWithoutProperties(_ref2, ['container', 'component', 'activeKey', 'activateByKey', 'count']);

	return Container ? _react2.default.createElement(
		Container,
		restProps,
		["prev", "next"].map(function (dir, keyId) {
			return Component ? _react2.default.createElement(Component, _extends({}, restProps, {
				key: keyId,
				keyId: keyId,
				futureKey: dir === 'next' ? activeKey + 1 : dir === 'prev' ? activeKey - 1 : activeKey,
				activateByKey: activateByKey,
				next: dir === 'next',
				prev: dir === 'prev',
				dir: dir,
				disabled: activeKey === 0 && dir === 'prev' || activeKey === count - 1 && dir === 'next'
			})) : null;
		})
	) : null;
};