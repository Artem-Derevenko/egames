import React from 'react';
import BlockWorksItem from './BlockWorksItem';

class BlockWorks extends React.Component {
	render() {
        const WorksList = [
            {
                src: "img/notes.png",
                link1: "https://www.google.com.ua/",
                link2: "http://www.iwebs.site/"
            },
            {
                src: "img/lemon.png",
                link1: "https://www.google.com.ua/",
                link2: "http://www.iwebs.site/"
            },
            {
                src: "img/set.png",
                link1: "https://www.google.com.ua/",
                link2: "http://www.iwebs.site/"
            },
            {
                src: "img/darts.png",
                link1: "https://www.google.com.ua/",
                link2: "http://www.iwebs.site/"
            }
        ];
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
                        WorksList.map((item, i) => 
                            <BlockWorksItem key={i} src={item.src} link1={item.link1} link2={item.link2} />)
                    }
                </div>
            </div>
		)
	}
}

export default BlockWorks;