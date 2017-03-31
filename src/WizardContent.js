import React, { Component, PropTypes } from 'react';

const WizardContentEducation = (props) => {
	const { degree, university, major } = props.data;

	return (
		<div>
			<span>{degree}</span>
			<span>{university}</span>
			<span>{major}</span>
		</div>
	);
}

const WizardContentSkills = (props) => {
	return (
		<div className="WizardContentSkills">
			{props.data}
		</div>
	);
}

const WizardContentWorkExperience = (props) => {
	const { company, starting, ending} = props.data;
	return (
		<div>
			<span>{company}</span>
			<span>{starting}</span>
			<span>{ending}</span>
		</div>
	);
}

class WizardContent extends Component {
	render() {
		const { activeItem, wizardContentData } = this.props;
		return (
			<div className="WizardContent">
				{
					wizardContentData.map(item => {
						if (activeItem === 'Education') {
							return <WizardContentEducation 
								data={item}
							/>
						} else if (activeItem === 'Skills') {
							return <WizardContentSkills 
								data={item}
							/>
						} else if (activeItem === 'WorkExperience') {
							return <WizardContentWorkExperience 
								data={item}
							/>
						} else {
							return null;
						}
					})
				}				
			</div>
		);
	}
}

export default WizardContent;
