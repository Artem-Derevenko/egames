import React from 'react';
import firebase from 'firebase';
import HeaderNav from './HeaderNav';
import HeaderCarucel from './HeaderCarucel';

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