import React from 'react';

class BlockNewsList extends React.Component {

	render() {
		return (
            <div>
                <div className="block-news">
                    <p className="date-block-news">{this.props.date}</p>
                    <p className="title-block-news"><a href={this.props.link}>{this.props.title}</a></p>
                    <p className="text-block-news">{this.props.text}</p>
                </div>
                <div className="basket-line-medium"></div>
            </div>
		)
	}
}

export default BlockNewsList;