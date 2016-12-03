'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Swipeable from 'react-swipeable';

var Carousel = function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel(props) {
		_classCallCheck(this, Carousel);

		var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

		_this.state = {
			activeKey: _this.props.activeKey || 0,
			itemsCount: 0,
			// dragDelta: false,
			defKey: 0
		};
		_this.activateByKey = _this.activateByKey.bind(_this);
		return _this;
	}
	// swipingLeft(e, delta){
	// 	this.setState({
	// 		dragDelta: -delta
	// 	});
	// }
	// swipingRight(e, delta){
	// 	this.setState({
	// 		dragDelta: delta
	// 	});
	// }
	// resetDragDelta(){
	// 	this.setState({
	// 		dragDelta: false
	// 	});
	// }
	// swipedLeft(e, delta){
	// 	if(delta > this.swipeThreshold){
	// 		this.setState({
	// 			activeKey: (this.state.activeKey + 1) >= this.state.itemsCount ? this.state.activeKey : this.state.activeKey + 1
	// 		});
	// 	}
	// 	this.resetDragDelta();
	// }
	// swipedRight(e, delta){
	// 	if(Math.abs(delta) > this.swipeThreshold){
	// 		this.setState({
	// 			activeKey: (this.state.activeKey - 1) < 0 ? this.state.activeKey : this.state.activeKey - 1
	// 		});
	// 	}
	// 	this.resetDragDelta();
	// }


	_createClass(Carousel, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setState({
				itemsCount: this.props.data.length
			});
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.activateByKey(this.state.activeKey, null);
		}
	}, {
		key: 'activateByKey',
		value: function activateByKey(key, e) {
			this.setState({
				activeKey: key < this.state.itemsCount ? key >= 0 ? key : this.state.itemsCount - 1 : 0
			});
			if (this.props.handleSwitch) {
				this.props.handleSwitch(e, key);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    Container = _props.container,
			    children = _props.children,
			    data = _props.data,
			    propLabel = _props.propLabel,
			    propValue = _props.propValue,
			    restProps = _objectWithoutProperties(_props, ['container', 'children', 'data', 'propLabel', 'propValue']);

			var labels = propLabel ? data.map(function (item) {
				return item[propLabel] || item.label;
			}) : null;
			var values = propValue ? data.map(function (item) {
				return item[propValue] || item.value;
			}) : data;

			children = Array.isArray(children) ? children : [children];

			var container = _react2.default.createElement(
				Container,
				restProps,
				_react2.default.Children.map(children, function (child) {
					return _react2.default.cloneElement(child, _extends({}, restProps, {
						activateByKey: _this2.activateByKey,
						activeKey: _this2.state.activeKey,
						noLabels: !propLabel,
						count: values.length,
						labels: labels,
						items: values
					}));
				})
			);
			return container;
			// return swipeable ?
			// 	(<Swipeable
			// 		onSwipingLeft={this.swipingLeft}
			// 		onSwipingRight={this.swipingRight}
			// 		onSwipedLeft={this.swipedLeft}
			// 		onSwipedRight={this.swipedRight}>
			// 		{container}
			// 	</Swipeable>)
			// : container;
		}
	}]);

	return Carousel;
}(_react.Component);

Carousel.swipeThreshold = 64;
exports.default = Carousel;
process.env.NODE_ENV !== "production" ? Carousel.propTypes = {
	data: _react.PropTypes.array.isRequired,
	propLabel: _react.PropTypes.string,
	propValue: _react.PropTypes.string,
	children: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.array])
} : void 0;
module.exports = exports['default'];