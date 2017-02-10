import React from 'react';

class HeaderCarucelItem extends React.Component {
	render() {
		return (
            <div className="carousel-block">
                <div className="slider-image" style={{background: 'url( {this.props.img} )'}}>
                    <div className="slider-info">
                        <p>
                            <a href="{this.props.link}">{this.props.text}</a>
                        </p>
                    </div>
                </div>
            </div>
		)
	}
}

export default HeaderCarucelItem;