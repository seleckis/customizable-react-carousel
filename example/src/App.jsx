import React, {Component} from 'react';
import styled from 'styled-components';

import { Carousel, CarouselNav, CarouselButtons, CarouselList } from '../../src';
import data from './data';

const Slider = ({ children }) => (
	<div className="slider">
		{children}
	</div>
);

const SliderList = styled.div`
	overflow: hidden;
	height: ${props => props.activeSlideHeight}px;
`;

const SliderItem = styled.div`
	min-height: 100px;
	text-align: center;
	line-height: 100px;
	border: 5px solid #eee;
	box-sizing: border-box;
	flex-grow: 1;
`;

const SliderListItem = ({ keyId, activeKey, data, setRef }) => (
	<SliderItem innerRef={r => setRef(keyId, r)}
				isActive={keyId === activeKey} isAfterActive={keyId > activeKey}
				dangerouslySetInnerHTML={{ __html: data.value }} />
);

const SliderNav = ({ children }) => (
	<div className="slider-nav">
		{children}
	</div>
);

const SliderNavButton = styled.button/*styledcss*/`
    background: ${props => props.active ? `palevioletred` : `red`};
    border-radius: 3px;
    border: none;
    color: white;
`;

const SliderNavItem = ({ data, activateByKey, keyId, activeKey }) => (
	<SliderNavButton onClick={activateByKey.bind(null, keyId)} active={keyId===activeKey} >
		{data.label}
	</SliderNavButton>
);

const SliderButtons = styled.div/*styledcss*/`
	display: block;
`;
const SliderSideButton = styled.button/*styledcss*/`
    background: ${props => props.disabled ? `grey` : `green`};
    border-radius: 3px;
    border: none;
    color: white;
`;

const SliderButtonsItem = ({ disabled, activateByKey, futureKey, dir }) => (
	<SliderSideButton disabled={disabled} onClick={activateByKey.bind(null, futureKey)}>
		{dir}
	</SliderSideButton>
);

export default class App extends Component {
	constructor(props) {
    super(props);
  }
	render(){
		// console.log(CarouselButtons);
		const svProps = {
			// animateHeight: true
		};
		return (
			<div className="root">
				<h1>Customizable React Carousel Example</h1>
				<p>A set of React components to build customizable carousel</p>
				<div className="content">
					<Carousel data={data} container={Slider} svProps={svProps} changeHeightAfterSwipe={true}>
						<CarouselNav container={SliderNav} component={SliderNavItem} />
						<CarouselList container={SliderList} component={SliderListItem} />
						<CarouselButtons container={SliderButtons} component={SliderButtonsItem} />
					</Carousel>
				</div>
			</div>
		);
	}
}
