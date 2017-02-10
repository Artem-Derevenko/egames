import React from 'react';

class HeaderNav extends React.Component {
	render() {
		return (
			<ul className="nav">
                <li><a className="transition" href="/">HOME</a></li>
                <li><a className="transition" href="/#/about">ABOUT US</a></li>
                <li><a className="downarrow transition">SERVICES</a> 
                    <ul className="subnav transition">
                        <li><a className="transition" href="/#/services">Web design</a></li>
                        <li><a className="transition" href="/#/services">Wordpress Design</a></li>
                        <li><a className="transition" href="/#/services">Mobile App Develoment</a></li>
                        <li><a className="transition" href="/#/services">Internet marketing</a></li>
                        <li><a className="transition" href="/#/services">Socila media Management</a></li>
                    </ul>
                </li>
                <li><a className="transition" href="/#/blog">BLOG</a></li>
                <li><a className="transition" href="/#/contacts">CONTACT US</a></li>
            </ul>
		)
	}
}

export default HeaderNav;