import React from 'react';
import Page404 from './Page404';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageBasket extends React.Component {
	constructor() {
        super();
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

   
   	render() {
        return (

                <div id="basket-wrap">
                    <div id="block-step">
                        <ul>
                            <li><a className="active-step">Шаг 1. Корзина товаров</a></li>
                            <li><img  src="../img/strelka.png" /></li>
                            <li><a>Шаг 2. Контактная информация</a></li>
                            <li><img  src="../img/strelka.png" /></li>
                            <li><a>Шаг 3. Завершение</a></li>
                        </ul>
                    </div>

                    <div className="basket-line" id="line-margin-top"></div>
                    <div id="header-basket">
                        <div id="header-title">Наименование товара</div>
                        <div id="header-number">Количество</div>
                        <div id="header-price">Цена</div>                                     
                    </div>
                    <div className="basket-line"></div>

                    <div className="basket-products">
                        <div className="basket-products-img">
                            <img  src="" />
                        </div>
                        <div className="basket-products-title">
                            <p><a href="view_products">ddgd</a></p>
                        </div>
                        <div className="basket-products-count">
                            <div className="count-minus"><span>&#8211;</span></div>
                            <div className="count-input">
                                <input maxlength="3" type="text"  id="input-id" className="input-count-products" value=""  />
                            </div>
                            <div className="count-plus"><span>+</span></div>
                        </div>
                        <div className="basket-products-price" id="tovar">
                            <p><span className="basket-products-price-count">utuu</span> &#215; <span>555 грн.</span></p>
                            <p className="basket-products-sum">222 грн.</p>
                        </div>
                        <div className="delete-products">
                            <a href="basket.php"></a>
                        </div>
                    </div>
                    <div className="basket-line"></div>

                    <div className="all-price">К оплате: <span>jjvjvjv </span> грн.</div>
                    <div className="basket-button-container">
                        <a href="basket.php" className="button-basket-delete"><span>Очистить</span></a>
                        <a href="basket.php" className="button-basket-next"><span>Далее</span></a>
                    </div> 
                </div> 



        )
	}
}

ReactMixin(PageBasket.prototype, ReactFire);

export default PageBasket;