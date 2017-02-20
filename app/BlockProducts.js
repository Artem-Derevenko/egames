import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

class BlockProducts extends React.Component {
	render() {
        // вывод товара в виде таблицы
        if ( this.props.productShow == "grid") {

    		return (
                <div className="products-grid">
                    <div className="products-grid-content">
                        <div className="products-title-grid">
                            <p><Link to={"product/" + this.props.id}>{this.props.title}</Link></p>
                        </div>
                        <div className="images-grid">
                            <img src={this.props.img} />
                        </div>
                        <div className="price-and-button">
                            <p className="price-grid">Цена: <span>{this.props.price}</span> грн.</p>
                            <div className="buy-basket-grid"><p>Купить</p></div>
                            <div className="add-basket-grid"><p>В корзину</p></div>
                        </div>
                         <div className="mini-description-grid">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
    		)
        }
        // вывод товара в виде списка
        if ( this.props.productShow == "list") {

            return (
                <div className="products-list">
                    <p className="images-list">
                        <img src={this.props.img}  />
                    </p>
                    <div className="products-title-list">
                        <p><Link to={"product/" + this.props.id}>{this.props.title}</Link></p>
                    </div>
                    <div className="list-container-price-button">    
                        <div className="price-list"><p>Цена: <span>{this.props.price}</span> грн.</p></div>
                        <div className="products-list-button-container">
                            <div className="buy-basket-list"><p>Купить</p></div>
                            <div className="add-basket-list"><p>В корзину</p></div>
                        </div> 
                    </div>
                    <p className="mini-description-list">{this.props.description}</p> 
                </div>
            )
        }
	}
}

export default BlockProducts;

