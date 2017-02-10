import React from 'react';
import { Link } from 'react-router';

class HeaderNav extends React.Component {
	render() {
		return (
            <div className="menu"> 
                <ul>
                    <li><Link to="about" activeClassName="active">О нас</Link></li>
                    <li><Link to="news" activeClassName="active">Новости</Link></li>
                    <li><Link to="pay" activeClassName="active">Способы оплаты</Link></li>
                    <li><Link to="delivery" activeClassName="active">Доставка</Link></li>
                    <li><Link to="contacts" activeClassName="active">Контакты</Link></li>
                </ul>
            </div>
		)
	}
}

export default HeaderNav;