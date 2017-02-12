import React from 'react';

class BlockNewsItem extends React.Component {
	render() {
		return (
            <li className="news">
                <span>{this.props.date}</span>
                <p className="title-news"><a href={this.props.link} >{this.props.title}</a></p>
                <p className="text-news">{this.props.description}</p>
                <div className="basket-line-mini"></div>
            </li>
		)
	}
}

export default BlockNewsItem;