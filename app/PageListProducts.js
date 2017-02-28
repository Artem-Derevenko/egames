import React from 'react';
import BlockSearch from './BlockSearch';
import BlockSorting from './BlockSorting';
import BlockProducts from './BlockProducts';
import Page404 from './Page404';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageListProducts extends React.Component {
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
        const game_category = this.props.params.category; 

        if (this.state.sorting_prod == "От А до Я") {

            product_List = this._sortArr_1(product_List)

        }

        else if (this.state.sorting_prod == "Популярное") {

            product_List = this._sortArr_2(product_List)

        }

        else if (this.state.sorting_prod == "От дешевых к дорогим") {

            product_List = this._sortArr_3(product_List)

        }

        else if (this.state.sorting_prod == "От дорогих к дешевым") {

            product_List = this._sortArr_4(product_List)

        }

        //проверка правильности указания категории
        var count_cat = 0;
        product_List.map((item, i) => (item.category == game_category) ? count_cat ++ : count_cat);

        if (game_category === undefined) {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting  productShow={this.state.productShow} sortState={this.state.sorting_prod} sortingChange={this._sortingChange.bind(this)} listShow={this._listShowProduct.bind(this)} gridShow={this._gridShowProduct.bind(this)} />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => <BlockProducts key={i} productShow={this.state.productShow} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} />)
                        }
                    </div>
                </div>
            )
        }

        else if (count_cat > 0) {
            return (
                <div>
                    <BlockSearch />
                    <BlockSorting  productShow={this.state.productShow} sortState={this.state.sorting_prod} sortingChange={this._sortingChange.bind(this)} listShow={this._listShowProduct.bind(this)} gridShow={this._gridShowProduct.bind(this)} />
                    <div className="blok-center-contents">
                        {   
                            product_List.map((item, i) => (item.category == game_category) ? <BlockProducts key={i} productShow={this.state.productShow} id={item.id} title={item.title} img={item.img} price={item.price} votes={item.votes} rating={item.rating} description={item.description} /> : false)
                        }
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <Page404 />
                </div>
            )
        }
		
	}
}

ReactMixin(PageListProducts.prototype, ReactFire);

export default PageListProducts;