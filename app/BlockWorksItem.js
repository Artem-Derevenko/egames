import React from 'react';

class BlockWorksItem extends React.Component {
	render() {
		return (

            <div className="gallery">
                <img src={this.props.src} />
                    <div className="other">
                        <a href={this.props.link1}></a>
                        <a href={this.props.link2}></a>
                    </div>
            </div>
                    
		)
	}
}

export default BlockWorksItem;