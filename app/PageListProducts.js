import React from 'react';
import BlockSearch from './BlockSearch';
import BlockSorting from './BlockSorting';
import BlockProductsGrid from './BlockProductsGrid';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageListProducts extends React.Component {
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
		const product_List = this.state.product;
        const game_category = this.props.params.category; 

        if (game_category == undefined) {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => <BlockProductsGrid key={i} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} />)
                        }
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => (item.category == game_category) ? <BlockProductsGrid key={i} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} /> : false)
                        }
                    </div>
                </div>
            )
        }
		
	}
}

ReactMixin(PageListProducts.prototype, ReactFire);

export default PageListProducts;