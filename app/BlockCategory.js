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
		const category_List = [];
		var count_category = 0;

		product_List.map((item, i) => {

			count_category = 0;

			if (category_List.length == 0) {
				category_List.push(item.category);
				count_category++;
			}

			else {

				category_List.map((item_cat, i) => (item_cat == item.category) ? count_category++ : false )

			}

			(count_category == 0) ? category_List.push(item.category) : false;

		})

		return (
            <div className="category">
				<div className="block-title">
					<p>Поиск по жанрам</p>
				</div>
				<ul>
					<li><Link to="/" activeClassName="active">Все жанры</Link></li>
					{	
                        category_List.map((item, i) => 
 							<BlockCategoryItem key={i} category={item} />)
	                }
				</ul>
			</div>
		)
	}
}

ReactMixin(BlockCategory.prototype, ReactFire);

export default BlockCategory;