import React from 'react';
import { Link } from 'react-router';

class BlockBasket extends React.Component {
	constructor() {
        super();
        this.state = {
            basket: 0
        }
    }

    _countProductBasket() {
    	if ( sessionStorage["basket"] !== undefined ) {

    		var arr_basket = JSON.parse(sessionStorage["basket"]);
    		var count = 0;

    		for (var i = 0; i < arr_basket.length; i++) {
    		 	count = count + arr_basket[i].info.count;
    		};

    		this.setState({
	            basket: count
	        });
        }
    }

	render() {
		console.log(this.state.basket);
		return (
            <div className="block-basket">
				<div className="block-title">
					<p>Заказы</p>
				</div>
				<div className="basket-conteniar-wrapper">
					<img className="basket-img" src="../img/basket.png" />
					<p className="conteniar-link">
						<Link to="basket">{ (this.state.basket == 0) ? "Ваша корзина пуста" : this.state.basket }</Link>
					</p>
				</div>
			</div>
		)
	}
}

export default BlockBasket;