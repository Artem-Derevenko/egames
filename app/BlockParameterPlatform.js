import React from 'react';

class BlockParameterPlatform extends React.Component {
	render() {
		return (
			<li>
        		<input type="checkbox" name="" className="checkplatforms" value="" id={'checkplatform'+this.props.id} />
        		<label htmlFor={'checkplatform'+this.props.id}>{this.props.platform}</label>
    		</li>
		)
	}
}

export default BlockParameterPlatform;