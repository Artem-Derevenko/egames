import React from 'react';

class HeaderCarucelItem extends React.Component {
	render() {
		return (
            <div className="carousel-block">
                <div className="slider-block">
                    <img src={this.props.img} className="slider-image" />
                    <div className="slider-info">
                        <p>
                            <a href={this.props.link}>{this.props.text}</a>
                        </p>
                    </div>
                </div>
            </div>
		)
	}
}

export default HeaderCarucelItem;