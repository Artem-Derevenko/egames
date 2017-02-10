import React from 'react';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockClients extends React.Component {
    constructor() {
        super();
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("clients"), "clients");
    }

	render() {
        const clientsList = this.state.clients;
		return (
            <div className="person clientsicon">
                <h6 className="">OUR CLIENTS</h6>
                <div>
                    {
                        clientsList.map((item, i) => 
                            <img src={item.src} />)
                    }
                </div>
            </div>
		)
	}
}

ReactMixin(BlockClients.prototype, ReactFire);

export default BlockClients;