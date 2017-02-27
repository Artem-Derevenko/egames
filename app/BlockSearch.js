import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            product: [],
            str_search: "",
            result_notfound: true
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("productList"), "product");
    }

    //получение значения строки поиска
    _stringSearch(event) {
        const stringSearch = event.target.value; 
        this.setState({
            str_search: stringSearch
        });
    }

    _showResult(arg) {
        this.setState({
            show_result_search: arg
        });
    }

	render() {
        var product_List = this.state.product;

        //формируем массив с названиями игр из базы
        var arr_title = [];

        product_List.map((item, i) => arr_title.push(
            {
                "id": item.id,
                "title": item.title
            }) 
        );

        //проверяем на совпадение поисковой строки и формируем массив совпадений
        var arr_rezult_search = [];
        var reg = this.state.str_search.toLowerCase();

        if (document.getElementById("result-list") !== null) {document.getElementById("result-list").innerHTML = ""}
        var resultList = document.getElementById("result-list");
        this.state.result_notfound = true;

        //выводим товар, соответствующий поиску
        for (var i = 0; i < arr_title.length; i++) {
            if (arr_title[i].title.toLowerCase().search(reg) !== -1) { 

                var newLink = document.createElement('a');
                newLink.setAttribute("href", "#/product/" + arr_title[i].id );
                newLink.innerHTML = arr_title[i].title;
                resultList.appendChild(newLink);
                this.state.result_notfound = false;
            }
        };

		return (
            <div className="block-search-conteniar">
                <div className="block-search">
                    <form>
                        <div className="input-search-border">
                            <span></span> 
                            <input type="text" className="input-search" placeholder="Поиск по названию игры" autocomplete="off" onChange={this._stringSearch.bind(this)} />
                        </div>
                    </form>
                    <div id="result-search" className={(this.state.str_search !== "") ? "visible" : "invisible"}>
                        <div id="result-list"></div>
                        <span className={ (this.state.result_notfound === true) ? "result-notfound" : "result-notfound invisible"}>По данному запросу игры не найдены</span>
                    </div>
                </div>
            </div>
		)
	}
}

ReactMixin(BlockSearch.prototype, ReactFire);

export default BlockSearch;