import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import BlockMain from './BlockMain';
import Footer from './Footer';


class IndexPage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<BlockMain />
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(
	<IndexPage/>,
	document.getElementById('app')	 
);
