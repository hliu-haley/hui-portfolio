import React, { Component, PropTypes } from 'react';

class WizardController extends Component {
	constructor(props) {
		super(props);
		this.onClickResetIndex = this.onClickResetIndex.bind(this);
		this.onClickSetIndex = this.onClickSetIndex.bind(this);
	}

	onClickResetIndex () {
		this.props.handleActiveIndex(-1);
	}

	onClickSetIndex() {
		this.props.handleActiveIndex(1);
	}

	render() {
		return (
			<div className="WizardController">
				<button onClick={this.onClickResetIndex}>Previous</button>
				<button onClick={this.onClickSetIndex}>Next</button>
			</div>
		);
	}
}

export default WizardController;
