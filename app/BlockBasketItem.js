import React from 'react';
import { Link } from 'react-router';

class BlockBasketItem extends React.Component {
	render() {
		var prod_info = this.props.product_info;
		return (
			<div>
				<div className="basket-products">
                    <div className="basket-products-img">
                        <img  src={prod_info.info.img} />
                    </div>
                    <div className="basket-products-title">
                        <p><Link to={"product/" + prod_info.id}>{prod_info.info.title}</Link></p>
                    </div>
                    <div className="basket-products-count">
                        <div className="count-minus"><span>&#8211;</span></div>
                        <div className="count-input">
                            <input type="text" id="input-id" className="input-count-products" value={prod_info.info.count}  />
                        </div>
                        <div className="count-plus"><span>+</span></div>
                    </div>
                    <div className="basket-products-price" id="tovar">
                        <p><span className="basket-products-price-count">{prod_info.info.count}</span> &#215; <span>{prod_info.info.price} грн.</span></p>
                        <p className="basket-products-sum">{prod_info.info.count * prod_info.info.price} грн.</p>
                    </div>
                    <div className="delete-products">
                        <a href="#"></a>
                    </div>
                </div>
                <div className="basket-line"></div>
			</div>
		)
	}
}

export default BlockBasketItem;