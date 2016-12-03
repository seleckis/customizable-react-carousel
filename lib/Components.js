"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Buttons = exports.Nav = exports.List = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var List = exports.List = function List(_ref) {
	var Container = _ref.container,
	    Component = _ref.component,
	    items = _ref.items,
	    restProps = _objectWithoutProperties(_ref, ["container", "component", "items"]);

	return _react2.default.createElement(
		Container,
		restProps,
		items.map(function (itemData, keyId) {
			return _react2.default.createElement(Component, _extends({}, restProps, {
				key: keyId,
				keyId: keyId,
				data: itemData
			}));
		})
	);
};

var Nav = exports.Nav = function Nav(_ref2) {
	var Container = _ref2.container,
	    Component = _ref2.component,
	    labels = _ref2.labels,
	    items = _ref2.items,
	    noLabels = _ref2.noLabels,
	    restProps = _objectWithoutProperties(_ref2, ["container", "component", "labels", "items", "noLabels"]);

	labels = noLabels ? items : labels;
	return _react2.default.createElement(
		Container,
		restProps,
		labels.map(function (data, keyId) {
			return _react2.default.createElement(Component, _extends({}, restProps, {
				key: keyId,
				keyId: keyId,
				data: data
			}));
		})
	);
};

var Buttons = exports.Buttons = function Buttons(_ref3) {
	var Container = _ref3.container,
	    Component = _ref3.component,
	    activeKey = _ref3.activeKey,
	    activateByKey = _ref3.activateByKey,
	    count = _ref3.count,
	    restProps = _objectWithoutProperties(_ref3, ["container", "component", "activeKey", "activateByKey", "count"]);

	return _react2.default.createElement(
		Container,
		restProps,
		["prev", "next"].map(function (dir, keyId) {
			return _react2.default.createElement(Component, _extends({}, restProps, {
				key: keyId,
				keyId: keyId,
				futureKey: dir === 'next' ? activeKey + 1 : dir === 'prev' ? activeKey - 1 : activeKey,
				activateByKey: activateByKey,
				next: dir === 'next',
				prev: dir === 'prev',
				dir: dir,
				disabled: activeKey === 0 && dir === 'prev' || activeKey === count - 1 && dir === 'next'
			}));
		})
	);
};
//
// export const Button = ({ component, dir, activeKey, activateByKey, count, children }) => {
// 	return React.createElement(component, {
// 		futureKey:
// 			dir==='next' ?
// 				activeKey + 1
// 			:
// 				dir==='prev' ?
// 					activeKey - 1
// 				:
// 					activeKey,
// 		activateByKey: activateByKey,
// 		next: dir === 'next',
// 		prev: dir === 'prev',
// 		dir: dir,
// 		children: children,
// 		disabled: (activeKey === 0 && dir === 'prev') || (activeKey === count - 1 && dir === 'next')
// 	});
//
// }