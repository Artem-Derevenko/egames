import React from 'react';
import firebase from 'firebase';
import HeaderNav from './HeaderNav';
import HeaderCarucel from './HeaderCarucel';


const config = {
    apiKey: "AIzaSyBUnRxSmHuHCpX48JnI34KiokYo1cMARWI",
    authDomain: "egames-f3cee.firebaseapp.com",
    databaseURL: "https://egames-f3cee.firebaseio.com",
    storageBucket: "egames-f3cee.appspot.com",
    messagingSenderId: "656442622705"
};

firebase.initializeApp(config);


class Header extends React.Component {
	render() {
		return (
            <div className="block-header">
				<div className="conteniar-image">
					<div className="header-image">
						<div className="spacer"></div>
						<HeaderNav />
			      	</div>
				</div>
				<HeaderCarucel />
			</div>
		)
	}
}

export default Header;