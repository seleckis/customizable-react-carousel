import React, {Component} from 'react';
import styled from 'styled-components';

import { Carousel, CarouselNav, CarouselButton, CarouselList } from '../../lib';
import data from './data';

const Slider = ({ children }) => (
	<div className="slider">
		{children}
	</div>
);

const SliderList = ({ children }) => (
	<div className="slider-list">
		{children}
	</div>
);

const SliderListItem = ({ keyId, activeKey, value }) => (
	<div className={keyId!==activeKey ? "slider-list-item":"slider-list-item-active"}>
		{value}
	</div>
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

const SliderSideButton = styled.button/*styledcss*/`
    background: ${props => props.disabled ? `grey` : `green`};
    border-radius: 3px;
    border: none;
    color: white;
`;

const SliderButton = ({ disabled, children, activateByKey, futureKey }) => (
	<SliderSideButton disabled={disabled} onClick={activateByKey.bind(null, futureKey)}>
		{children}
	</SliderSideButton>
);

export default class App extends Component {
	constructor(props) {
    super(props);
  }
	render(){
		return (
			<div className="root">
				<h1>Customizable React Carousel Example</h1>
				<p>A set of React components to build customizable carousel</p>
				<div className="content">
					<Carousel data={data} container={Slider}>
						<CarouselNav container={SliderNav} component={SliderNavItem} />
						<CarouselList container={SliderList} component={SliderListItem} />
						<CarouselButton dir="prev" component={SliderButton}>PREV</CarouselButton>
						<CarouselButton dir="next" component={SliderButton}>NEXT</CarouselButton>
					</Carousel>
				</div>
			</div>
		);
	}
}
