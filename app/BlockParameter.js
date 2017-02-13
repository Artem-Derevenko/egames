import React from 'react';
import BlockParameterDeveloper from './BlockParameterDeveloper';
import BlockParameterPlatform from './BlockParameterPlatform';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockParameter extends React.Component {
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
            <div className="block-wrapper">
				<div className="block-title">
					<p>Поиск по параметрам</p>
				</div>
				<div className="conteniar-wrapper">
					<p className="filter-title">Стоимость:</p>
					<form method="GET" action="search_filter.php">
						<div className="block-input-price">
							<div>
								<p>От</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="start-price" name="start_price" value="50" />
							</div>
							<div>
								<p>До</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="end-price" name="end_price" value="5000" />
							</div>
							<div>
								<p>грн.</p>
							</div>
						</div>
						<p className="filter-title">Разработчики:</p>
						<ul className="checkbox-parameter">
							{	
		                        product_List.map((item, i) => 
		 							<BlockParameterDeveloper key={i} developer={item.developer} />)
			                }
						</ul> 
						<p className="filter-title">Платформа:</p>						
						<ul className="checkbox-parameter">
							{	
		                        product_List.map((item, i) => 
		 							<BlockParameterPlatform key={i} platform={item.platform} />)
			                }
						</ul> 
						<div className="button-param-search-border">
							<input type="submit" name="submit" id="button-param-search" value="Найти" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

ReactMixin(BlockParameter.prototype, ReactFire);

export default BlockParameter;