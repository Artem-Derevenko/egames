import React from 'react';
import { Link } from 'react-router';

class BlockBasket extends React.Component {
	render() {
		return (
            <div className="block-basket">
				<div className="block-title">
					<p>Заказы</p>
				</div>
				<div className="basket-conteniar-wrapper">
					<img className="basket-img" src="../img/basket.png" />
					<p className="conteniar-link">
						<Link to="basket">
							Ваша корзина пуста
						</Link>
					</p>
				</div>
			</div>
		)
	}
}

export default BlockBasket;