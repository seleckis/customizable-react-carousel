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
		const { container: Container, component: Component, items, activeKey, slideStyle, ...restProps } = this.props;
		return Container ? (
			<Container {...restProps}>
				<SwipeableViews index={activeKey} onChangeIndex={this.handleChangeIndex} slideStyle={slideStyle}>
				{items.map((itemData, keyId) => {
					return Component ?
						<Component { ...restProps } key={keyId} keyId={keyId} data={itemData} />
					: null;
				})}
				</SwipeableViews>
			</Container>
		) : null;
	}
}

export const Nav = ({
	container: Container, component: Component, labels, items, noLabels, ...restProps
}) => {
	labels = noLabels?items:labels;
	return Container ? (
		<Container {...restProps}>
			{labels.map((data, keyId)=> {
				return Component ? React.createElement(Component, {
					...restProps,
					key: keyId,
					keyId: keyId,
					data: data
				}) : null;
			})}
		</Container>
	) : null;
};

export const Buttons = ({
	container: Container, component: Component, activeKey, activateByKey, count, ...restProps
}) => {
	return Container ? (
		<Container {...restProps}>
			{["prev", "next"].map((dir, keyId) => {
				return Component ? React.createElement(Component, {
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
				}) : null;
			})}
		</Container>
	) : null;
};
