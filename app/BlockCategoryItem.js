import React from 'react';
import { Link } from 'react-router';

class BlockCategoryItem extends React.Component {
	render() {
		return (
			<li><Link to={'/'+this.props.category} activeClassName="active">{this.props.category}</Link></li>
		)
	}
}

export default BlockCategoryItem;