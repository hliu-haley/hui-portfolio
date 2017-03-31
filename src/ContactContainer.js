import React, { Component, PropTypes } from 'react';

class ContactContainer extends Component {
	render() {
		return (
			<div className="ContactContainer">
				{this.props.children}
			</div>
		);
	}
}

ContactContainer.propTypes = {
	children: PropTypes.node
}

export default ContactContainer;
