import React from 'react';
import firebase from 'firebase';
import BlockMain from './BlockMain';

const config = {
    apiKey: "AIzaSyCxVx_RuZ3Xi0jEi9PtkIVrJhpGLQ8gF6Q",
    authDomain: "react-project-2edb1.firebaseapp.com",
    databaseURL: "https://react-project-2edb1.firebaseio.com",
    storageBucket: "react-project-2edb1.appspot.com",
    messagingSenderId: "930017480586"
  };
  
firebase.initializeApp(config);

class PageHome extends React.Component {
	render() {
		return (
			<div>
				<BlockMain />
			</div>
		)
	}
}

export default PageHome;