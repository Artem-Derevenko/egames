import React from 'react';
import BlockSearch from './BlockSearch';

class Page404 extends React.Component {
	render() {
		return (
			<div className="blok-center-contents">
				<BlockSearch />
				<p className="parameter_not404">
				 	ошибка 404
				</p>
				<p className="parameter_not">
				 	Страница не найдена
				</p>
			</div>
		)
	}
}

export default Page404;