import React from 'react';
import BlockCategoryItem from './BlockCategoryItem';
import { Link } from 'react-router';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockCategory extends React.Component {
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
		return (
            <div className="category">
				<div className="block-title">
					<p>Поиск по жанрам</p>
				</div>
				<ul>
					<li><Link to="/" activeClassName="active">Все жанры</Link></li>
					{	
                        product_List.map((item, i) => 
 							<BlockCategoryItem key={i} category={item.category} />)
	                }
				</ul>
			</div>
		)
	}
}

ReactMixin(BlockCategory.prototype, ReactFire);

export default BlockCategory;