import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';

class BlockProducts extends React.Component {

    _addBasket(id, title, price, img) {
        const idProd = id;
        const titleProd = title;
        const priceProd = price;
        const imgProd = img;

        //проверяем на наличие сессии
        if (sessionStorage["basket"] === undefined)  {

            var product_item = {
               id: idProd, 
               info: {
                   title: titleProd,
                   count: 1,
                   img: imgProd,
                   price: priceProd
                }
            };

            var prod_list = [];
            prod_list.push(product_item);

            sessionStorage["basket"] = JSON.stringify(prod_list);
        }
        //если сессия уже есть
        else {
            var arr_basket = JSON.parse(sessionStorage["basket"]);
            var j = 0;

            //проверяем на налицие такого же товара в корзине
            for (var i = 0; i < arr_basket.length; i++) {
                
                //если товар уже есть
                if ( arr_basket[i].id == idProd ) { 

                    arr_basket[i].info.count++;
                    j++
                }
            };

            //если товара такого еще нет
            if ( j == 0) {

                var product_item = {
                   id: idProd, 
                   info: {
                       title: titleProd,
                       count: 1,
                       img: imgProd,
                       price: priceProd
                    }
                };

                arr_basket.push(product_item);
            }
            
            sessionStorage["basket"] = JSON.stringify(arr_basket);
        }
    }

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
                            <div className="add-basket-grid" onClick={this._addBasket.bind(this, this.props.id, this.props.title, this.props.price, this.props.img)}><p>В корзину</p></div>
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
                            <div className="add-basket-list" onClick={this._addBasket.bind(this, this.props.id, this.props.title, this.props.price, this.props.img)}><p>В корзину</p></div>
                        </div> 
                    </div>
                    <p className="mini-description-list">{this.props.description}</p> 
                </div>
            )
        }
	}
}

export default BlockProducts;

