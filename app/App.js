import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Page from './Page';
import PageListProducts from './PageListProducts';
import PageAbout from './PageAbout';

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
			<Route path="/(:category)" component={PageListProducts} />
			<Route path="about" component={PageAbout} />
			<Route path="news" component={PageAbout} />
			<Route path="pay" component={PageAbout} />
			<Route path="delivery" component={PageAbout} />
			<Route path="contacts" component={PageAbout} /> 
		</Route> 
	</Router>,
	document.getElementById('app')	 
);