import React, { Component, PropTypes } from 'react';
import WizardNavBarItem from './WizardNavBarItem';

class WizardNavBar extends Component {
	render() {
		return (
			<div className="WizardNavBar">
			{
				this.props.wizardNavData.map(item => (
					<WizardNavBarItem
						key={item}
						val={item}
						activeItem={this.props.activeItem}
					/>
				))
			}
			</div>
		);
	}
}

export default WizardNavBar;
