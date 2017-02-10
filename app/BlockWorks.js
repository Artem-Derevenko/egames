import React from 'react';
import BlockWorksItem from './BlockWorksItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockWorks extends React.Component {
    constructor() {
        super();
        this.state = {
            works: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("works"), "works");
    }

	render() {
        const worksList = this.state.works;
		return (
            <div>
    		    <div className="latest">
                    <h6>LATEST WORKS</h6>
                    <ul>
                        <li>&#10094;</li>
                        <li>&#10095;</li>
                    </ul>
                </div>

                <hr className="line" />
                <div className="latest pic">
                    {
                        worksList.map((item, i) => 
                            <BlockWorksItem key={i} src={item.src} link1={item.link1} link2={item.link2} />)
                    }
                </div>
            </div>
		)
	}
}

ReactMixin(BlockWorks.prototype, ReactFire);

export default BlockWorks;