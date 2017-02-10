import React from 'react';
import BlockAboutUs from './BlockAboutUs';
import BlockExplore from './BlockExplore';
import BlockBrowse from './BlockBrowse';
import BlockContact from './BlockContact';
import BlockSocIcons from './BlockSocIcons';
import BlockFinish from './BlockFinish';


class Footer extends React.Component {
	render() {
		return (
            <div>
                <footer className="Bwrappers">
                    <BlockAboutUs />
                    <BlockExplore />
                    <BlockBrowse />
                    <BlockContact />
                    <BlockSocIcons />
                </footer>
                <BlockFinish />
            </div>
		)
	}
}

export default Footer;