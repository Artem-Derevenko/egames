import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import Page from './Page';
import PageHome from './PageHome';
import PageAbout from './PageAbout';
import PageServices from './PageServices';
import PageBlog from './PageBlog';
import PageContacts from './PageContacts';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route component={Page}>
			<Route path="/" component={PageHome} />
			<Route path="about" component={PageAbout} /> 
			<Route path="services" component={PageServices} /> 
			<Route path="contacts" component={PageContacts} /> 
			<Route path="blog" component={PageBlog} />
		</Route> 
	</Router>,
	document.getElementById('app')	 
);