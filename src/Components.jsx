import React, {Component, PropTypes} from 'react';
import SwipeableViews from 'react-swipeable-views';

export class List extends Component{
	static propTypes = {
		container: PropTypes.func,
		component: PropTypes.func,
		items: PropTypes.array,
		activateByKey: PropTypes.func
	};
	constructor(props){
		super(props);
	}
	handleChangeIndex = (index) => {
		this.props.activateByKey(index);
	};
	render() {
		const { container: Container, component: Component, items, activeKey, ...restProps } = this.props;
		return (
			<Container {...restProps}>
				<SwipeableViews index={activeKey} onChangeIndex={this.handleChangeIndex}>
				{items.map((itemData, keyId)=>(
					<Component { ...restProps } key={keyId} keyId={keyId} data={itemData} />
				))}
				</SwipeableViews>
			</Container>
		);
	}
}

export const Nav = ({
	container: Container, component: Component, labels, items, noLabels, ...restProps
}) => {
	labels = noLabels?items:labels;
	return (
		<Container {...restProps}>
			{labels.map((data, keyId)=>
				React.createElement(Component, {
					...restProps,
					key: keyId,
					keyId: keyId,
					data: data
				})
			)}
		</Container>
	)
};

export const Buttons = ({
	container: Container, component: Component, activeKey, activateByKey, count, ...restProps
}) => {
	return (
		<Container {...restProps}>
			{["prev", "next"].map((dir, keyId)=>
				React.createElement(Component, {
					...restProps,
					key: keyId,
					keyId: keyId,
					futureKey:
						dir==='next' ?
							activeKey + 1
						:
							dir==='prev' ?
								activeKey - 1
							:
								activeKey,
					activateByKey: activateByKey,
					next: dir === 'next',
					prev: dir === 'prev',
					dir: dir,
					disabled: (activeKey === 0 && dir === 'prev') || (activeKey === count - 1 && dir === 'next')
				})
			)}
		</Container>
	)
};
