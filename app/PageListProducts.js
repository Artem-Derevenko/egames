import React from 'react';
import BlockSearch from './BlockSearch';
import BlockSorting from './BlockSorting';
import BlockProducts from './BlockProducts';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageListProducts extends React.Component {
	constructor() {
        super();
        this.state = {
            productShow: "grid",
            product: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    _listShowProduct() {
        this.setState({
            productShow: "list"
        });
    }

    _gridShowProduct() {
        this.setState({
            productShow: "grid"
        });
    }

	render() {
		const product_List = this.state.product;
        const game_category = this.props.params.category; 

        if (game_category == undefined) {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting productShow={this.state.productShow} listShow={this._listShowProduct.bind(this)} gridShow={this._gridShowProduct.bind(this)} />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => <BlockProducts key={i} productShow={this.state.productShow} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} />)
                        }
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting productShow={this.state.productShow} listShow={this._listShowProduct.bind(this)} gridShow={this._gridShowProduct.bind(this)} />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => (item.category == game_category) ? <BlockProducts key={i} productShow={this.state.productShow} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} /> : false)
                        }
                    </div>
                </div>
            )
        }
		
	}
}

ReactMixin(PageListProducts.prototype, ReactFire);

export default PageListProducts;