import React from 'react';
import Header from './Header';
import BlockCategory from './BlockCategory';
import BlockBasket from './BlockBasket';
import BlockAuthorization from './BlockAuthorization';
import BlockNews from './BlockNews';
import BlockParameter from './BlockParameter';
import Footer from './Footer';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class Page extends React.Component {
	constructor() {
        super();
        this.state = {
            product: [],
            start_price: 0,
            end_price: 10000,
            platform_parameter: [],
            developer_parameter: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    _editStateStartPrice(price) {
        this.setState({
            start_price: price
        });
    }

    _editStateEndPrice(price) {
        this.setState({
            end_price: price
        });
    }


	render() {
		console.log(this.state.start_price +" " + this.state.end_price);
		return (
			<div>
				<Header />
				<div className="container"> 
	                <div className="block-left">
	                	<BlockCategory />
	                	<BlockParameter submitForm={this._submitForm} editStartPrice={this._editStateStartPrice.bind(this)} editEndPrice={this._editStateEndPrice.bind(this)} />
		            </div> 
	                <div className="block-center">
	                	{this.props.children}
	                </div> 
	                <div className="block-right">
	                	<BlockBasket />
	                	<BlockAuthorization />
	                	<BlockNews />
	                </div>  
	            </div>  
				<Footer />
			</div>
		)
	}
}

ReactMixin(Page.prototype, ReactFire);

export default Page;