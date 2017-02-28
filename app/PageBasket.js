import React from 'react';
import Page404 from './Page404';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageBasket extends React.Component {
	constructor() {
        super();
        this.state = {
            product: [],
            step: 1
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    _step1(event) {
        event.preventDefault();
        this.setState({
            step: 1
        });
    }

    _step2(event) {
        event.preventDefault();
        this.setState({
            step: 2
        });
    }

    _step3(event) {
        event.preventDefault();
        this.setState({
            step: 3
        });
    }

   	render() {
        return (

            <div className="basket-wrap">
                <div className="block-step">
                    <ul>
                        <li><span className={ (this.state.step == 1 ) ? "active-step" : "" }>Шаг 1. Корзина товаров</span></li>
                        <li><img  src="../img/strelka.png" /></li>
                        <li><span className={ (this.state.step == 2 ) ? "active-step" : "" }>Шаг 2. Контактная информация</span></li>
                        <li><img  src="../img/strelka.png" /></li>
                        <li><span className={ (this.state.step == 3 ) ? "active-step" : "" }>Шаг 3. Завершение</span></li>
                    </ul>
                </div>
                <div className={ (this.state.step == 1 ) ? "step1 active" : "step1 inactive" }>
                    <div className="basket-line line-margin-top"></div>
                    <div className="header-basket">
                        <div className="header-title">Наименование товара</div>
                        <div className="header-number">Количество</div>
                        <div className="header-price">Цена</div>                                     
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
                        <a href="#" className="button-basket-delete"><span>Очистить</span></a>
                        <a href="#" className="button-basket-next" onClick={this._step2.bind(this)}><span>Далее</span></a>
                    </div>
                </div>
                <div className={ (this.state.step == 2 ) ? "step2 active" : "step2 inactive" }>
                     <div className="block-order-info">
                        <div className="basket-line basket-line-step2-top"></div>
                        <h3 className="title-h3">Укажите способ доставки:</h3>
                        <div className="basket-line basket-line-step2-bottom"></div>
                        <form>
                            <ul className="info-radio">
                                <li>
                                    <input type="radio" name="order_delivery" className="order-delivery" id="order-delivery1" />
                                    <label className="label-delivery" htmlFor="order-delivery1">По почте</label>
                                </li>
                                <li>
                                    <input type="radio" name="order_delivery" className="order-delivery" id="order-delivery2" />
                                    <label className="label-delivery" htmlFor="order-delivery2">Курьером по городу (Одесса или Киев)</label>
                                </li>
                                <li>
                                    <input type="radio" name="order_delivery" className="order-delivery" id="order-delivery3" />
                                    <label className="label-delivery" htmlFor="order-delivery3">Самовывоз (Одесса или Киев)</label>
                                </li>
                            </ul>
                            <div className="basket-line basket-line-step2-top"></div>
                            <h3 className="title-h3">Укажите информацию для доставки:</h3>
                            <div className="basket-line basket-line-step2-bottom"></div>
                            <div className="info-order">
                                <div className="line-form-order">
                                    <span className="title-input">ФИО</span>
                                    <span className="snowflake">*</span>
                                    <div className="step2-input-border info-order-fio-border">
                                        <input type="text" name="order_fio" id="info-order-fio" className="big" />
                                    </div>
                                </div>
                                <div className="line-form-order">
                                    <span className="title-input">E-mail</span>
                                    <span className="snowflake">*</span>
                                    <div className="step2-input-border info-order-email-border">
                                        <input type="text" name="order_email" id="info-order-email" className="big" />
                                    </div>
                                </div>
                                <div className="line-form-order">
                                    <span className="title-input">Мобильный телефон</span>
                                    <span className="snowflake">*</span>
                                    <div className="step2-input-border info-order-phone-border">
                                    <input type="text" name="order_phone" id="info-order-phone" className="big" />
                                    </div>
                                </div>
                                <div className="line-form-order-address">
                                    <span className="title-input">Адрес доставки</span>
                                    <span className="snowflake">*</span>
                                    <textarea name="order_address" id="info-order-address"></textarea>
                                </div>
                                <div className="line-form-order-note">
                                    <span className="title-input">Примечание</span>
                                    <textarea name="order_note" id="info-order-note"></textarea>
                                </div>
                            </div>
                            <div className="basket-button-container">
                                <a href="#" className="button-basket-delete" onClick={this._step1.bind(this)}><span>Назад</span></a>
                                <a href="#" className="button-basket-next" onClick={this._step3.bind(this)}><span>Далее</span></a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={ (this.state.step == 3 ) ? "step3 active" : "step3 inactive" }>
                    <div className="basket-line basket-line-step2-top"></div>
                    <p className="step3-title">Итоговая информация по заказу</p>
                    <div className="basket-line basket-line-step2-bottom"></div>
                    <div className="block-step3-info">
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Способ доставки</div><div className="step3-info-value">ddd</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Ваш E-mail</div><div className="step3-info-value">ddddd</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Ваше ФИО</div><div className="step3-info-value">fsfsfsfs</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Адрес доставки</div><div className="step3-info-value">fsfsfsf</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Ваш телефон</div><div className="step3-info-value">sfsfsfsfs</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Примечание</div><div className="step3-info-value">sfsfsfsfsfs</div>
                        </div>
                        <div className="step3-info-wrap">
                            <div className="step3-info-name">Сумма к оплате</div><div className="step3-info-value"><span className="step3-all-price">4544 грн.</span></div>
                        </div>
                        <div className="basket-button-container">
                            <a href="#" className="button-basket-delete" onClick={this._step2.bind(this)}><span>Назад</span></a>
                            <a href="#" className="button-basket-next"><span>Оплатить</span></a>
                        </div>
                    </div>
                </div>
            </div> 
        )
	}
}

ReactMixin(PageBasket.prototype, ReactFire);

export default PageBasket;