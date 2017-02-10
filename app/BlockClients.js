import React from 'react';

class BlockClients extends React.Component {
	render() {
        const ClientsList = [
            {
                src: "img/cox.png"
            },
            {
                src: "img/deer.png"
            },
            {
                src: "img/cw.png"
            },
            {
                src: "img/banana.png"
            },
            {
                src: "img/finder.png"
            },
            {
                src: "img/film.png"
            }
        ];
		return (
            <div className="person clientsicon">
                <h6 className="">OUR CLIENTS</h6>
                <div>
                    {
                        ClientsList.map((item, i) => 
                            <img src={item.src} />)
                    }
                </div>
            </div>
		)
	}
}

export default BlockClients;