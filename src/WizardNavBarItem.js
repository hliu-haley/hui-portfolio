import React, { Component, PropTypes } from 'react';

class WizardNavBarItem extends Component {
	render() {
		return (
			<div className={`WizardNavBarItem ${this.props.val === this.props.activeItem ? 'active' : ''}`}>
				{this.props.val}
			</div>
		);
	}
}

export default WizardNavBarItem;