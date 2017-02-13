import React from 'react';
import Header from './Header';
import BlockCategory from './BlockCategory';
import BlockBasket from './BlockBasket';
import BlockAuthorization from './BlockAuthorization';
import BlockNews from './BlockNews';
import BlockParameter from './BlockParameter';
import Footer from './Footer';

class Page extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container"> 
	                <div className="block-left">
	                	<BlockCategory />
	                	<BlockParameter />
		            </div> 
	                <div className="block-center">
	                	{this.props.children}
	                </div> 
	                <div className="block-right">
	                	<BlockBasket />
	                	<BlockAuthorization />
	                	<BlockNews />
	                </div>  
	            </div>  
				<Footer />
			</div>
		)
	}
}

export default Page;