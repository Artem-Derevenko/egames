import React from 'react';
import { Link } from 'react-router';
import BlockParameterDeveloper from './BlockParameterDeveloper';
import BlockParameterPlatform from './BlockParameterPlatform';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockParameter extends React.Component {
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

    _submitForm(event) {
        event.preventDefault();
        document.location.href ='#/parameter';
        console.log(this.state.start_price + "//" + this.state.end_price);
    }

    _startPriceChange(event) {
        this.setState({
            start_price: event.target.value
        });
    }

     _endPriceChange(event) {
        this.setState({
            end_price: event.target.value
        });
    }

	render() {
		const product_List = this.state.product;
		const developer_List = [];
		const platform_List = [];
		var count_dev = 0;
		var count_platform = 0;

		//создаем массив с уникальными разработчиками и платформами (проверяем на повторение категорий)
		product_List.map((item, i) => {

			count_dev = 0;
			count_platform = 0;

			if (developer_List.length == 0) {
				developer_List.push(item.developer);
				count_dev++;
			}

			else {

				developer_List.map((item_dev, i) => (item_dev == item.developer) ? count_dev++ : false )

			}

			if (platform_List.length == 0) {
				platform_List.push(item.platform);
				count_platform++;
			}

			else {

				platform_List.map((item_platform, i) => (item_platform == item.platform) ? count_platform++ : false )

			}

			(count_dev == 0) ? developer_List.push(item.developer) : false;
			(count_platform == 0) ? platform_List.push(item.platform) : false;

		})

		return (
            <div className="block-wrapper">
				<div className="block-title">
					<p>Поиск по параметрам</p>
				</div>
				<div className="conteniar-wrapper">
					<p className="filter-title">Стоимость:</p>
					<form onSubmit={this._submitForm.bind(this)}>
						<div className="block-input-price">
							<div>
								<p>От</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="start-price" ref="start_price" onChange={this._startPriceChange} />
							</div>
							<div>
								<p>До</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="end-price" ref="end_price" onChange={this._endPriceChange} />
							</div>
							<div>
								<p>грн.</p>
							</div>
						</div>
						<p className="filter-title">Разработчики:</p>
						<ul className="checkbox-parameter">
							{	
		                        developer_List.map((item, i) => 
		 							<BlockParameterDeveloper key={i} id={i} developer={item} />)
			                }
						</ul> 
						<p className="filter-title">Платформа:</p>						
						<ul className="checkbox-parameter">
							{	
		                        platform_List.map((item, i) => 
		 							<BlockParameterPlatform key={i} id={i} platform={item} />)
			                }
						</ul> 
						<div className="button-param-search-border">
							<input type="submit" value="Найти" className="button-param-search" />
						</div>
					</form>
				</div>
			</div>
		)
	}
}

ReactMixin(BlockParameter.prototype, ReactFire);

export default BlockParameter;