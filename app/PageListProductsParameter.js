import React from 'react';
import BlockSearch from './BlockSearch';
import BlockSorting from './BlockSorting';
import BlockProducts from './BlockProducts';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageListProductsParameter extends React.Component {
	constructor() {
        super();
        this.state = {
            productShow: "grid",
            sorting_prod: "От А до Я",
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
    
    _sortingChange(event) {
        this.setState({
            sorting_prod: event.target.value
        });
    }

    //сортировка "от А до Я"
    _sortArr_1(arr) { 
        var n = arr.length;
        for (var i = 0; i < n-1; i++)
         { for (var j = 0; j < n-1-i; j++)
            { if (arr[j+1].title.charAt(0).toLowerCase() < arr[j].title.charAt(0).toLowerCase())
               { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
            }
         }                     
        return arr;
    }

    //сортировка "Популярное"
    _sortArr_2(arr) { 
        var n = arr.length;
        for (var i = 0; i < n-1; i++)
         { for (var j = 0; j < n-1-i; j++)
            { if (Number(arr[j+1].rating) > Number(arr[j].rating))
               { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
            }
         }                     
        return arr;
    }

    //сортировка "От дешевых к дорогим"
    _sortArr_3(arr) { 
        var n = arr.length;
        for (var i = 0; i < n-1; i++)
         { for (var j = 0; j < n-1-i; j++)
            { if (Number(arr[j+1].price) < Number(arr[j].price))
               { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
            }
         }                     
        return arr;
    }

    //сортировка "От дорогих к дешевым"
    _sortArr_4(arr) { 
        var n = arr.length;
        for (var i = 0; i < n-1; i++)
         { for (var j = 0; j < n-1-i; j++)
            { if (Number(arr[j+1].price) > Number(arr[j].price))
               { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
            }
         }                     
        return arr;
    }

   	render() {

        var product_List = this.state.product;

        //сортировка по параметрам, полученый из адресной строки
        const parameter_start_price = this.props.params.parameter; 
        const arr_parameter = parameter_start_price.split("&");
        const start_price = arr_parameter[0].substring(11);
        const end_price = arr_parameter[1].substring(9);
        const developer = arr_parameter[2].substring(10).split(";");
        const platform = arr_parameter[3].substring(9).split(";");  
        var product_List_price = [];
        var product_List_developer = [];
        var product_all_parameter = [];

        //фильтруем по цене
        if ((start_price !== "") || (end_price !== "") ) {
            product_List.map((item, i) => ( (Number(item.price) >= Number(start_price)) && (Number(item.price) <= Number(end_price)) ) ? product_List_price.push(item) : false);
        }

        else { product_List_price = product_List }
        

        //фильтруем по производителям
        if (developer == "" ) {
            product_List_developer = product_List_price;
        }
        else {
            for (var j = 0; j < developer.length; j++) {
                product_List_price.map((item, i) => (item.developer.toLowerCase() == developer[j].toLowerCase()) ? product_List_developer.push(item) : false); 
            };
        }

        //фильтруем по платформам
        if (platform == "" ) {
            product_all_parameter = product_List_developer;
        }
        else {
            for (var j = 0; j < platform.length; j++) {
                product_List_developer.map((item, i) => (item.platform.toLowerCase() == platform[j].toLowerCase()) ? product_all_parameter.push(item) : false); 
            };
        }
       

        //сортировка списка товара
        if (this.state.sorting_prod == "От А до Я") {

            product_all_parameter = this._sortArr_1(product_all_parameter)

        }

        else if (this.state.sorting_prod == "Популярное") {

            product_all_parameter = this._sortArr_2(product_all_parameter)

        }

        else if (this.state.sorting_prod == "От дешевых к дорогим") {

            product_all_parameter = this._sortArr_3(product_all_parameter)

        }

        else if (this.state.sorting_prod == "От дорогих к дешевым") {

            product_all_parameter = this._sortArr_4(product_all_parameter)

        }  

        if (product_all_parameter.length) {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting  productShow={this.state.productShow} sortState={this.state.sorting_prod} sortingChange={this._sortingChange.bind(this)} listShow={this._listShowProduct.bind(this)} gridShow={this._gridShowProduct.bind(this)} />
                    <div className="blok-center-contents">
                        {   
                            product_all_parameter.map((item, i) => <BlockProducts key={i} productShow={this.state.productShow} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} />)
                        }
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <BlockSearch />
                    <div className="blok-center-contents">
                        <p className="parameter_not">По данному запросу игры не найдены! Проверьте правильность выбора параметров поиска</p>
                    </div>
                </div>
            )
        }
	}
}

ReactMixin(PageListProductsParameter.prototype, ReactFire);

export default PageListProductsParameter;