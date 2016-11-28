import React, { PropTypes, Component } from 'react';
// import Swipeable from 'react-swipeable';

export default class Carousel extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		propLabel: PropTypes.string,
		propValue: PropTypes.string,
		children: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.array
		])
	};
	static swipeThreshold = 64;
	constructor(props){
		super(props);
		this.state = {
			activeKey: this.props.activeKey || 0,
			itemsCount: 0,
			// dragDelta: false,
			defKey: 0,
		}
		this.activateByKey = this.activateByKey.bind(this);
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
	componentWillMount(){
		this.setState({
			itemsCount: this.props.data.length
		});
	}
	componentDidMount(){
		this.activateByKey(this.state.activeKey, null);
	}
	activateByKey(key, e){
		this.setState({
			activeKey: key < this.state.itemsCount ? key >= 0 ? key : this.state.itemsCount-1 : 0
		});
		if(this.props.handleSwitch){
			this.props.handleSwitch(e, key);
		}
	}
	render(){

		let { container: Container, children, data, propLabel, propValue, /*swipeable,*/ ...restProps } = this.props;
		let labels = propLabel?data.map((item)=>item[propLabel] || item.label):null;
		let values = propValue?data.map((item)=>item[propValue] || item.value):data;

		children = Array.isArray(children) ? children : [children];

		let container = <Container {...restProps}>
			{React.Children.map(children, (child) =>{
				return React.cloneElement(child, {
					...restProps,
					activateByKey: this.activateByKey,
					activeKey: this.state.activeKey,
					noLabels: !propLabel,
					count: values.length,
					labels: labels,
					items: values,
					// dragDelta: swipeable?this.state.dragDelta:false
				})
			})}
		</Container>;
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
}
