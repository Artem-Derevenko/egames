import React from 'react';

class BlockParameterPlatform extends React.Component {
	render() {
		return (
			<li>
        		<input type="checkbox" name="" value="" id="checkplatform1" />
        		<label htmlFor="checkplatform1">{this.props.platform}</label>
    		</li>
		)
	}
}

export default BlockParameterPlatform;