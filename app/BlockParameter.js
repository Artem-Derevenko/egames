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
            product: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    //формируем строку с параметрами выбора товара
    _submitForm(event) {
        event.preventDefault();
        const startPrice = event.target.querySelector("#start-price").value;
        const endPrice = event.target.querySelector("#end-price").value;

        //получаем массив с выбранными разработчиками
        var arr_developer = [];
        var developer_activ = event.target.querySelectorAll('.checkdevelopers');

        for (var i = 0; i < developer_activ.length; i++) {
        	if (developer_activ[i].checked == true) { 

        		var idDev = developer_activ[i].getAttribute("id");
        		var titleDev = event.target.querySelector("label[for=" + idDev + "]").innerHTML;
        		arr_developer.push(titleDev);
  			}
        };

        //получаем массив с выбранными платформами
        var arr_platform = [];
        var platform_activ = event.target.querySelectorAll('.checkplatforms');

        for (var i = 0; i < platform_activ.length; i++) {
        	if (platform_activ[i].checked == true) { 

        		var idDev = platform_activ[i].getAttribute("id");
        		var titleDev = event.target.querySelector("label[for=" + idDev + "]").innerHTML;
        		arr_platform.push(titleDev);
  			}
        };
 
        // console.log(arr_developer);


        document.location.href = "/#/parameter/" + "startPrice=" + ((startPrice > 0) ? startPrice : 0 ) + "&endPrice=" + ((endPrice > 0) ? endPrice : 0 ) + "&developer=" + arr_developer.join(';') + "&platform=" + arr_platform.join(';');
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
								<input type="text" id="start-price" />
							</div>
							<div>
								<p>До</p>
							</div>
							<div className="border-input-price">
								<input type="text" id="end-price" />
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