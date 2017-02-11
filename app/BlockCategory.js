import React from 'react';
import { Link } from 'react-router';

class BlockCategory extends React.Component {
	render() {
		return (
            <div className="category">
				<div className="block-title">
					<p>Поиск по жанрам</p>
				</div>
				<ul>
					<li><Link to="/" activeClassName="active">Все товары</Link></li>
					<li><Link to="view_cat/mmog" activeClassName="active">MMOG</Link></li>
					<li><Link to="view_cat/action" activeClassName="active">Шутеры / Action</Link></li>
					<li><Link to="view_cat/strategy" activeClassName="active">Стратегии</Link></li>
					<li><Link to="view_cat/simulators" activeClassName="active">Симуляторы</Link></li>
					<li><Link to="view_cat/rpg" activeClassName="active">Ролевые (RPG)</Link></li>
					<li><Link to="view_cat/sport" activeClassName="active">Спортивные</Link></li>
					<li><Link to="view_cat/quests" activeClassName="active">Квесты</Link></li>
				</ul>
			</div>
		)
	}
}

export default BlockCategory;