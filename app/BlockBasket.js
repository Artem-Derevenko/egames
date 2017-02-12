import React from 'react';

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
						<a href="basket.php?action=oneclick">
							Ваша корзина пуста
						</a>
					</p>
				</div>
			</div>
		)
	}
}

export default BlockBasket;