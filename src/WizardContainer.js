import React, { Component, PropTypes } from 'react';
import WizardNavBar from './WizardNavBar';
import WizardNavBarItem from './WizardNavBarItem';
import WizardContent from './WizardContent';
import WizardController from './WizardController';

const wizardNavData = ['Skills', 'Education', 'WorkExperience'];

class WizardContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 0
		};
		this.setActiveIndex = this.setActiveIndex.bind(this);
	}

	setActiveIndex(offset) {
		const previousIndex = this.state.activeIndex;
		const intendIndex = previousIndex + offset;
		this.setState({
			activeIndex:  intendIndex >= 0 && intendIndex < wizardNavData.length ? intendIndex : previousIndex 
		});
	}

	render() {
		const activeItem = wizardNavData[this.state.activeIndex];
		return (
			<div className="WizardContainer">
				<WizardNavBar 
					wizardNavData={wizardNavData}
					activeItem={activeItem}
				/>
				<WizardContent
					wizardContentData={this.props.wizardData[activeItem]}
					activeItem={activeItem}
				/>
				<WizardController handleActiveIndex={this.setActiveIndex}/>
			</div>
		);
	}
}

export default WizardContainer;
