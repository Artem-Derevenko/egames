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
                    <li>
                        <select className="sorting-list" value={this.props.sortState} onChange={this.props.sortingChange}>
                            <option>От А до Я</option>
                            <option>От дешевых к дорогим</option>
                            <option>От дорогих к дешевым</option>
                            <option>Популярное</option>
                            <option>Новинки</option>
                        </select>
                    </li>
                </ul>
            </div>
		)
	}
}

export default BlockSorting;