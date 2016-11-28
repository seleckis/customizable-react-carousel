import React from 'react';

export const List = ({ container: Container, component: Component, items, ...restProps }) => (
	<Container {...restProps}>
		{items.map((itemData, keyId)=>
			React.createElement(Component, {
				...restProps,
				key: keyId,
				keyId: keyId,
				data: itemData
			})
		)}
	</Container>
);

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

export const Button = ({ component, dir, activeKey, activateByKey, count, children }) => {
	return React.createElement(component, {
		futureKey:
			dir==="next" ?
				activeKey + 1
			:
				dir==="prev" ?
					activeKey - 1
				:
					activeKey,
		activateByKey: activateByKey,
		next: dir === "next",
		prev: dir === "prev",
		children: children,
		disabled: (activeKey === 0 && dir === 'prev') || (activeKey === count - 1 && dir === 'next')
	});

}
