import React from 'react';
import BlockAdvantagesItem from './BlockAdvantagesItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockAdvantages extends React.Component {
    constructor() {
        super();
        this.state = {
            advantages: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("advantages"), "advantages");
    }

	render() {
		const advantagesList = this.state.advantages; 
		return (
		    <div className="Bwrappers next">
                {
                    advantagesList.map((item, i) => 
                        <BlockAdvantagesItem key={i} title={item.title} text={item.text} />)
                }
            </div>
		)
	}
}

ReactMixin(BlockAdvantages.prototype, ReactFire);

export default BlockAdvantages;