import React from 'react';

class PagePay extends React.Component {
	render() {
		return (
			<div className="blok-pay"> 
                <h3 className="title-h3-style">Способы оплаты</h3>
                <div className="basket-line"></div>
                <ul>Наличными:
                    <li>
                        при самовывозе из пункта выдачи интернет-магазина;
                    </li>
                    <li>
                        курьеру при получении товара. Курьер примет от вас оплату, передаст товар и необходимый пакет документов (товарный чек, гарантия).
                    </li>
                </ul>
                 <ul>Оплата при заказе товара с доставкой по Украине:
                    <li>
                         По Украине мы доставляем заказы курьерской службой Новая почта, Вы можете оплатить заказ при получении (оплатив комиссию Новой Почты за пересылку денег) либо оплатить заказ через кассу любого банка на наш счет.
                    </li>
                </ul>
                 <ul> По безналичному расчету на юридическое лицо:
                    <li>
                        Вам необходимо выбрать в корзине вид оплаты "Безналичный", после этого наш менеджер выставит Вам счет на оплату. После получения оплаты мы доставим товар в назначенный срок или Вы сможете забрать заказ самовывозом из пунктов выдачи интернет-магазина City.com. При безналичной оплате товар продается по полной стоимости *
                    </li>
                </ul>
                 <ul>Оплата платежной карточкой при самовывозе из магазина:
                    <li>
                        Оплата картой возможна при покупке или самовывозе товара из нашего магазина в Одессе или Киеве.
                    </li>
                </ul>
                <p className="foot-note">
                    * Оплата принимается только в национальной валюте Украины. Цены на сайте не всегда являются окончательными, для уточнения цены и наличия товара свяжитесь с менеджером интернет-магазина. Цена товара, заказанного на сайте www.city.com.ua, не фиксируется до момента оплаты или отправки курьерской службой "Новая почта".
                </p>
            </div>

		)
	}
}

export default PagePay;