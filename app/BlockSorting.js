import React from 'react';

class BlockSorting extends React.Component {
	render() {
		return (
            <div className="block-sorting">
                <ul className="option-list">
                    <li>Вид:</li>
                    <li><img className="style-list" src="img/list.png" /></li>
                    <li><img className="style-grid" src="img/grid.png" /></li>
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