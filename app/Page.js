import React from 'react';
import firebase from 'firebase';
import Header from './Header';
import BlockCategory from './BlockCategory';
import BlockParameter from './BlockParameter';
import Footer from './Footer';

const config = {
    apiKey: "AIzaSyBUnRxSmHuHCpX48JnI34KiokYo1cMARWI",
    authDomain: "egames-f3cee.firebaseapp.com",
    databaseURL: "https://egames-f3cee.firebaseio.com",
    storageBucket: "egames-f3cee.appspot.com",
    messagingSenderId: "656442622705"
};

firebase.initializeApp(config);


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
	                </div>  
	            </div>  
				<Footer />
			</div>
		)
	}
}

export default Page;