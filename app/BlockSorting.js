import React from 'react';

class BlockSorting extends React.Component {
	render() {
		return (
            <div className="block-sorting">
                <ul className="option-list">
                    <li>Вид:</li>
                    <li><img className={(this.props.productShow == "grid") ? "style-list" : "style-list active" } src="img/list.png" onClick={this.props.listShow} /></li>
                    <li><img className={(this.props.productShow == "grid") ? "style-grid active" : "style-list" } src="img/grid.png" onClick={this.props.gridShow} /></li>
                    <li>Сортировка:</li>
                    <li><a className="select-sort" >От А до Я</a>
                        <ul className="sorting-list">
                            <li><a href="index.php?sort=price-asc">От дешевых к дорогим</a></li>
                            <li><a href="index.php?sort=price-desc">От дорогих к дешевым</a></li>
                            <li><a href="index.php?sort=popular">Популярное</a></li>
                            <li><a href="index.php?sort=news">Новинки</a></li>
                            <li><a href="index.php?sort=title">От А до Я</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
		)
	}
}

export default BlockSorting;