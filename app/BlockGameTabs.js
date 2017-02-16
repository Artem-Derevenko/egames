import React from 'react';

class BlockGameTabs extends React.Component {
	render() {
		return (
			<div> 
                <ul className="tabs">  
                    <li className={(this.props.showTabsItem === 1) ? "active" : "" } data-id="1" onClick={this.props.showTabs}><span>Характеристики</span></li>
                    <li className={(this.props.showTabsItem === 2) ? "active" : "" } data-id="2" onClick={this.props.showTabs}><span>Минимальные требования</span></li>
                    <li className={(this.props.showTabsItem === 3) ? "active" : "" } data-id="3" onClick={this.props.showTabs}><span>Отзывы ({this.props.reviews.length})</span></li>
                </ul>  
                <div className="clear"></div>
                <div className="tabs_content">
                    <div className={(this.props.showTabsItem == 1) ? "active" : "" }>{this.props.characteristics}</div>
                    <div className={(this.props.showTabsItem == 2) ? "active" : "" }>{this.props.requirements}</div>
                    <div className={(this.props.showTabsItem == 3) ? "active" : "" }>
                        <p className="info-comment-ok"></p>
                        <span className="my-comment">Оставить свой отзыв</span>
                        <div className="block-my-comment">
                            <p><img className="my-comment-close" src="../img/reg-close.png" /></p>
                            <div className="comment-name-wrapper">
                                <span>Имя*</span>
                                <div className="comment-name-border">
                                    <input type="text" name="comment_name" className="comment-input-name" />
                                </div>
                            </div>
                            <div className="comment-text-wrapper">
                                <span>Комментарий</span>
                                <textarea name="comment-text" className="comment-text"></textarea>
                            </div>
                            <p className="coment-info">Публикация отзывов происходит после предварительной модерации</p>
                            <div className="my-comment-button"><p>Отправить</p></div>
                        </div>
                        <div className="comments">
                            <p className="author-date"><span>Вася </span>25/25/1222</p>
                            <p className="text-comment">ыссысиоиолиоиоиои оиолиои иоиоли иоиол</p>
                            <div className="basket-line-medium"></div>
                        </div>
                        <p className="comment-not-found">Отзывы для данного товара отсутствуют</p>
                    </div>
                </div>
            </div>
		)
	}
}

export default BlockGameTabs;