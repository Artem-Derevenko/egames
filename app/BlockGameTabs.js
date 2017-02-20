import React from 'react';
import BlockComments from './BlockComments';

class BlockGameTabs extends React.Component {
	render() {
		return (
			<div> 
                <ul className="tabs">  
                    <li className={(this.props.showTabsItem == 1) ? "active" : "" } data-id="1" onClick={this.props.showTabs}><span>Характеристики</span></li>
                    <li className={(this.props.showTabsItem == 2) ? "active" : "" } data-id="2" onClick={this.props.showTabs}><span>Минимальные требования</span></li>
                    <li className={(this.props.showTabsItem == 3) ? "active" : "" } data-id="3" onClick={this.props.showTabs}><span>Отзывы ({this.props.reviews.length})</span></li>
                </ul>  
                <div className="clear"></div>
                <div className="tabs_content">
                    <div className={(this.props.showTabsItem == 1) ? "active" : "" }>{this.props.characteristics}</div>
                    <div className={(this.props.showTabsItem == 2) ? "active" : "" }>{this.props.requirements}</div>
                    <div className={(this.props.showTabsItem == 3) ? "active" : "" }>
                        <BlockComments comments={this.props.reviews} id={this.props.id} />
                    </div>
                </div>
            </div>
		)
	}
}

export default BlockGameTabs;