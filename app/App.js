import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Page from './Page';
import PageListProducts from './PageListProducts';
import PageAbout from './PageAbout';
import PageNews from './PageNews';
import PagePay from './PagePay';
import PageDelivery from './PageDelivery';
import PageContacts from './PageContacts';
import PageProduct from './PageProduct';

const config = {
    apiKey: "AIzaSyBUnRxSmHuHCpX48JnI34KiokYo1cMARWI",
    authDomain: "egames-f3cee.firebaseapp.com",
    databaseURL: "https://egames-f3cee.firebaseio.com",
    storageBucket: "egames-f3cee.appspot.com",
    messagingSenderId: "656442622705"
};

firebase.initializeApp(config);

ReactDOM.render(
	<Router history={hashHistory}>
		<Route component={Page}>
			<Route path="about" component={PageAbout} />
			<Route path="news" component={PageNews} />
			<Route path="pay" component={PagePay} />
			<Route path="delivery" component={PageDelivery} />
			<Route path="contacts" component={PageContacts} />
			<Route path="product/:id" component={PageProduct} />
			<Route path="/(:category)" component={PageListProducts} /> 
		</Route> 
	</Router>,
	document.getElementById('app')	 
);