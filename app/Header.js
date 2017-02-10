import React from 'react';
import HeaderNav from './HeaderNav';

class Header extends React.Component {
	render() {
		return (
			<header>
                <div className="Bwrappers"> 
                    <HeaderNav />
                    <div className="logotype"><a href="index.html">Bis<span>Lite</span></a></div>
                </div>
            </header>
		)
	}
}

export default Header;