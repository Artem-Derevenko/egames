import React from 'react';
import BlockCommentsItem from './BlockCommentsItem';

class BlockComments extends React.Component {
	render() {
        //получаем массив с комментариями
        const commentList = this.props.comments;

		return (
            <div>
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

                {   
                   (commentList !== '') ? ( commentList.map((item, i) => <BlockCommentsItem key={i} name={item.name} date={item.date} text={item.text} />)) : false
                }
                <p className={ (commentList !== '') ? "comment-not-found hide" : "comment-not-found" }>Отзывы для данного товара отсутствуют</p>
            </div>
		)
	}
}

export default BlockComments;