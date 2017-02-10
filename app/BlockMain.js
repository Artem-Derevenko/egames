import React from 'react';
import HeaderSlider from './HeaderSlider';
import BlockAdvantages from './BlockAdvantages';
import BlockWorks from './BlockWorks';
import BlockReviews from './BlockReviews';
import BlockClients from './BlockClients';
import BlockDownload from './BlockDownload';

class BlockMain extends React.Component {
	render() {
		return (
            <div>
                <HeaderSlider />
                <BlockAdvantages />
                <div className="main">
                    <div className="Bwrappers">
                        <BlockWorks />
                        <hr className="line" />
                        <div className="latest">
                            <BlockReviews />
                            <BlockClients />
                        </div>
                        <BlockDownload />
                    </div>
                </div>
            </div>
		)
	}
}

export default BlockMain;