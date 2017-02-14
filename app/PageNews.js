import React from 'react';
import BlockNewsList from './BlockNewsList';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class PageNews extends React.Component {
	constructor() {
        super();
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.bindAsArray(firebase.database().ref().child("newsList"), "news");
    }

	render() {
		const newsList = this.state.news;
		return (
			<div className="blok-page-news"> 
                <h3 className="title-h3-style">НОВОСТИ</h3>
                <div className="basket-line"></div>
                	{
                        newsList.map((item, i) => 
                            <BlockNewsList key={i} date={item.date} title={item.title} link={item.link} text={item.text} />)
                    }
            </div>
		)
	}
}

ReactMixin(PageNews.prototype, ReactFire);

export default PageNews;