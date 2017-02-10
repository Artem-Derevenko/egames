import React from 'react';
import HeaderCarucelItem from './HeaderCarucelItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class HeaderCarucel extends React.Component {
    constructor() {
        super();
        this.state = {
            head_slider: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("head_slider"), "head_slider");
    }

	render() {
        const head_slider_List = this.state.head_slider;
		return (
            <div className="carousel"> 
                <div className="carousel-button-left"><img src="img/last.png" /></div> 
                <div className="carousel-wrapper"> 
                    <div className="carousel-items"> 
                        {
                            head_slider_List.map((item, i) => 
                                <HeaderCarucelItem key={i} img={item.img} text={item.text} link={item.link} />)
                        }
                    </div>
                </div>
                <div className="carousel-button-right"><img src="img/next.png" /></div>
            </div>
		)
	}
}

export default HeaderCarucel;

