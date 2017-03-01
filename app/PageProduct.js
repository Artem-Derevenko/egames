import React from 'react';
import Page404 from './Page404';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import BlockGameTabs from './BlockGameTabs';
import BlockSearch from './BlockSearch';

class PageProduct extends React.Component {
	constructor() {
        super();
        this.state = {
            show_tabs_item: 1,
            product: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    //получение значения атрибуда дата елемента, который вызывает эту функцию (event.currentTarget - элемент на котором сработал обработчик)
    _showTabs(event) {
        this.setState({
            show_tabs_item: event.currentTarget.getAttribute('data-id')
        });
    }

    _addVotes(event) {
        const id_product = event.target.getAttribute("data-id");
        const countVotes = event.target.getAttribute("data-count-vote");
        const vote = event.target.getAttribute("data-vote");
        const rating = event.target.getAttribute("data-rating");

        if (!(id_product.length && countVotes.length && vote.length && rating.length)) {
            return;
        }

        firebase.database().ref("productList/"+ id_product).child('rating').set(( (Number(rating)*Number(countVotes)) + Number(vote)) / (Number(countVotes) + 1) );
        firebase.database().ref("productList/"+ id_product).child('votes').set( Number(countVotes) + 1 );
    }

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
        //получаем id продукта, ка который перешли
        const product_id = this.props.params.id;
        const product_List = this.state.product;
        var productItem = [];

        //получаем продукт с данным id из базы
        product_List.map((item) => {
            if (item.id == product_id) {
                productItem.push(item)
            }
        });

        //выводил продукт либо страницу 404, если массив с продуктом productItem пустой
        if (productItem.length !== 0) {

            return (
                <div className="blok-products"> 
                    <h3 className="view-product-title">{productItem[0].title}</h3>
                    <div className="view-product-img"><img src={productItem[0].img} /></div>
                    <div className="view-product-price-button">
                        <div className="rating-wrapper">
                            <ul className="rating">
                                <li className="current" style={{width: productItem[0].rating * 20 + '%'}}><span className="star1" title="очень плохо" data-vote="1" data-id={productItem[0].id} data-count-vote={productItem[0].votes} data-rating={productItem[0].rating} onClick={this._addVotes.bind(this)}></span></li>
                                <li><span className="star2" title="плохо" data-vote="2" data-id={productItem[0].id} data-count-vote={productItem[0].votes} data-rating={productItem[0].rating} onClick={this._addVotes.bind(this)}></span></li>
                                <li><span className="star3" title="нормально" data-vote="3" data-id={productItem[0].id} data-count-vote={productItem[0].votes} data-rating={productItem[0].rating} onClick={this._addVotes.bind(this)}></span></li>
                                <li><span className="star4" title="хорошо" data-vote="4" data-id={productItem[0].id} data-count-vote={productItem[0].votes} data-rating={productItem[0].rating} onClick={this._addVotes.bind(this)}></span></li>
                                <li><span className="star5" title="отлично" data-vote="5" data-id={productItem[0].id} data-count-vote={productItem[0].votes} data-rating={productItem[0].rating} onClick={this._addVotes.bind(this)}></span></li>
                            </ul>
                            <span className="count-votes">голосов: {productItem[0].votes}</span>
                        </div>    
                        <div className="view-product-price"><p>Цена: <span>{productItem[0].price}</span> грн.</p></div>
                        <div className="view-product-button-container-wrapper">
                            <div className="view-product-button-container">
                                <div className="buy-basket-list"><p>Купить</p></div>
                                <div className="add-basket-list" onClick={this._addBasket.bind(this, productItem[0].id, productItem[0].title, productItem[0].price, productItem[0].img) }><p>В корзину</p></div>
                            </div>
                        </div> 
                    </div>
                    <p className="view-product-description">{productItem[0].text}</p>
                    <BlockGameTabs showTabs={this._showTabs.bind(this)} showTabsItem={this.state.show_tabs_item} id={productItem[0].id} title={productItem[0].title} img={productItem[0].img} price={productItem[0].price} votes={productItem[0].votes} rating={productItem[0].rating} text={productItem[0].text} characteristics={productItem[0].characteristics} requirements={productItem[0].requirements} reviews={(productItem[0].reviews === undefined) ? "" : productItem[0].reviews } />
                </div>
            )
        }

        else {

            return (
                <div>
                    <Page404 />
                </div>
            )
        }
	}
}

ReactMixin(PageProduct.prototype, ReactFire);

export default PageProduct;