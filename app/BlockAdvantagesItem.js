import React from 'react';

class BlockAdvantagesItem extends React.Component {
	render() {
		return (
            <div>
                <h6>
                    {this.props.title}
                </h6>
                <p>
                    {this.props.text}
                </p>
                <a href="">Read more</a>
            </div>
                
		)
	}
}

export default BlockAdvantagesItem;