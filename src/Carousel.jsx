import React, { PropTypes, Component } from 'react';

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
			defKey: 0,
		}
		this.activateByKey = this.activateByKey.bind(this);
	}
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

		let { container: Container, children, data, propLabel, propValue, ...restProps } = this.props;
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
					items: values
				})
			})}
		</Container>;
		return container;
	}
}
