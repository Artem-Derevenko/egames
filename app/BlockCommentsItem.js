import React from 'react';

class BlockCommentsItem extends React.Component {

	render() {
		return (
            <div className="comments">
                <p className="author"><span>{this.props.name}</span></p>
                <p className="text-comment">{this.props.text}</p>
                <div className="basket-line-medium"></div>
            </div>
		)
	}
}

export default BlockCommentsItem;

