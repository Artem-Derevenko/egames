import React from 'react';

class BlockParameterDeveloper extends React.Component {
	render() {
		return (
			<li>
        		<input type="checkbox" name="" value="" id={'checkdevelopers'+this.props.id} />
        		<label htmlFor={'checkdevelopers'+this.props.id}>{this.props.developer}</label>
    		</li>
		)
	}
}

export default BlockParameterDeveloper;