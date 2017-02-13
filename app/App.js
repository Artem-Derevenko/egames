import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Page from './Page';
import PageListProducts from './PageListProducts';
import PageAbout from './PageAbout';

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