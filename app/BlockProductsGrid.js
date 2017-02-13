import React from 'react';

class BlockProductsGrid extends React.Component {
	render() {
		return (
            <div className="products-grid">
                <div className="products-grid-content">
                    <div className="products-title-grid">
                        <p><a href={this.props.id}>{this.props.title}</a></p>
                    </div>
                    <div className="images-grid">
                        <img src={this.props.img} />
                    </div>
                    <div className="price-and-button">
                        <p className="price-grid">Цена: <span>{this.props.price}</span> грн.</p>
                        <div className="buy-basket-grid"><p>Купить</p></div>
                        <div className="add-basket-grid"><p>В корзину</p></div>
                    </div>
                    <div className="rating-grid">
                        <div className="rating-wrapper">
                            <ul className="rating">
                                <li className="current"><span className="star1" title="очень плохо" vote="1"></span></li>
                                <li><span className="star2" title="плохо" vote="2"></span></li>
                                <li><span className="star3" title="нормально" vote="3"></span></li>
                                <li><span className="star4" title="хорошо" vote="4"></span></li>
                                <li><span className="star5" title="отлично" vote="5"></span></li>
                            </ul>
                            <p className="count-votes">голосов: {this.props.votes}</p>
                        </div>
                    </div>
                     <div className="mini-description-grid">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
		)
	}
}

export default BlockProductsGrid;