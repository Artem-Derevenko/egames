import React from 'react';

class BlockParameterDeveloper extends React.Component {
	render() {
		return (
			<li>
        		<input type="checkbox" name="" value="" id="checkdevelopers1" />
        		<label htmlFor="checkdevelopers1">{this.props.developer}</label>
    		</li>
		)
	}
}

export default BlockParameterDeveloper;