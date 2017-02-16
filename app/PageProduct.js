import React from 'react';
import Page404 from './Page404';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';
import BlockGameTabs from './BlockGameTabs';

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
    
   	render() {
        console.log(this.state.show_tabs_item);
        const product_id = this.props.params.id;
        const product_List = this.state.product;
        var productItem = [];

        product_List.map((item) => {
            if (item.id == product_id) {
                productItem.push(item)
            }
        });

        if (productItem.length !== 0) {

            return (
                <div className="blok-products"> 
                    <h3 className="view-product-title">{productItem[0].title}</h3>
                    <div className="view-product-img"><img src={productItem[0].img} /></div>
                    <div className="view-product-price-button">
                        <div className="rating-wrapper">
                            <ul className="rating">
                                <li className="current" style={{width: productItem[0].rating * 20 + '%'}}><span className="star1" title="очень плохо" data-vote="1"></span></li>
                                <li><span className="star2" title="плохо" data-vote="2"></span></li>
                                <li><span className="star3" title="нормально" data-vote="3"></span></li>
                                <li><span className="star4" title="хорошо" data-vote="4"></span></li>
                                <li><span className="star5" title="отлично" data-vote="5"></span></li>
                            </ul>
                            <span className="count-votes">голосов: {productItem[0].votes}</span>
                        </div>    
                        <div className="view-product-price"><p>Цена: <span>{productItem[0].price}</span> грн.</p></div>
                        <div className="view-product-button-container-wrapper">
                            <div className="view-product-button-container">
                                <div className="buy-basket-list"><p>Купить</p></div>
                                <div className="add-basket-list"><p>В корзину</p></div>
                            </div>
                        </div> 
                    </div>
                    <p className="view-product-description">{productItem[0].text}</p>
                    <BlockGameTabs showTabs={this._showTabs.bind(this)} showTabsItem={this.state.show_tabs_item} id={productItem[0].id} title={productItem[0].title} img={productItem[0].img} price={productItem[0].price} votes={productItem[0].votes} rating={productItem[0].rating} text={productItem[0].text} characteristics={productItem[0].characteristics} requirements={productItem[0].requirements} reviews={productItem[0].reviews} />
                </div>
            )
        }

        else {

            return (
                <Page404 />
            )
        }
	}
}

ReactMixin(PageProduct.prototype, ReactFire);

export default PageProduct;