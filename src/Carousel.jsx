import React, { PropTypes, Component } from 'react';

export default class Carousel extends Component {
	static propTypes = {
		data: PropTypes.array.isRequired,
		propLabel: PropTypes.string,
		propValue: PropTypes.string,
		children: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.array
		]),
		changeHeightAfterSwipe: PropTypes.bool,
		handleSwitch: PropTypes.func,
	};
	componentRefs = {};
	constructor(props){
		super(props);
		this.state = {
			activeKey: this.props.activeKey || 0,
			itemsCount: 0,
			defKey: 0,
			activeSlideHeight: -1
		}
		this.activateByKey = this.activateByKey.bind(this);
		this.setRef = this.setRef.bind(this);
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
			activeKey: key < this.state.itemsCount ? key >= 0 ? key : this.state.itemsCount-1 : 0,
			activeSlideHeight: this.componentRefs[`ref-${key}`].offsetHeight
		});
		if(this.props.handleSwitch){
			this.props.handleSwitch(e, key);
		}
	}
	setRef(keyId, r){
		this.componentRefs[`ref-${keyId}`] =  r;
	}
	render(){

		let { container: Container, children, data, propLabel, propValue, ...restProps } = this.props;
		let labels = propLabel?data.map((item)=>item[propLabel] || item.label):null;
		let values = propValue?data.map((item)=>item[propValue] || item.value):data;

		children = Array.isArray(children) ? children : [children];

		let container = Container ? (
			<Container {...restProps}>
				{React.Children.map(children, (child) =>{
					return child ? React.cloneElement(child, {
						...restProps,
						activateByKey: this.activateByKey,
						setRef: this.setRef,
						activeSlideHeight: this.state.activeSlideHeight,
						activeKey: this.state.activeKey,
						noLabels: !propLabel,
						count: values.length,
						labels: labels,
						items: values
					}) : null;
				})}
			</Container>
		) : null;
		return container;
	}
}
