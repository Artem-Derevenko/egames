import React from 'react';
import BlockNewsItem from './BlockNewsItem';
import ReactMixin from 'react-mixin';
import ReactFire from 'reactfire';
import firebase from 'firebase';

class BlockNews extends React.Component {
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
            <div className="block-wrapper">
				<div className="block-title">
					<p>Новости и Акции</p>
				</div>
				<div className="news-wrapper">
			        <img className="news-last" src="img/last-news.png" />
			        <div className="basket-line-mini"></div>
			        <div className="newsticker">
			            <ul>
				            {
	                            newsList.map((item, i) => 
	                                <BlockNewsItem key={i} date={item.date} title={item.title} link={item.link} description={item.description} />)
	                        }
			            </ul>
			        </div>
			        <img className="news-next" src="img/next-news.png" />
				</div>
			</div>
		)
	}
}

ReactMixin(BlockNews.prototype, ReactFire);

export default BlockNews;