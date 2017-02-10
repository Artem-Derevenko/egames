import React from 'react';
// import HeaderSubnav from './HeaderSubnav';

class HeaderNav extends React.Component {
	render() {
		return (
			<ul className="nav">
                <li><a className="transition" href="#">HOME</a></li>
                <li><a className="transition" href="#">ABOUT US</a></li>
                <li><a className="downarrow transition">SERVICES</a> 
                    <ul className="subnav transition">
                        <li><a className="transition" href="">Web design</a></li>
                        <li><a className="transition" href="">Wordpress Design</a></li>
                        <li><a className="transition" href="">Mobile App Develoment</a></li>
                        <li><a className="transition" href="">Internet marketing</a></li>
                        <li><a className="transition" href="">Socila media Management</a></li>
                    </ul>
                </li>
                <li><a href="#" className="downarrow transition">PORTFOLIO</a>
                    <ul className="subnav transition">
                        <li><a className="transition" href="">Your profil <div className="smiley"></div></a></li>
                        <li><a className="transition" href="">Another profil <div className="smiley"></div></a></li>
                    </ul>
                </li>
                <li><a className="transition" href="#">BLOG</a></li>
                <li><a className="transition" href="#">CONTACT US</a></li>
            </ul>
		)
	}
}

export default HeaderNav;