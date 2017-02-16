import React from 'react';
import BlockCommentsItem from './BlockCommentsItem';
import CommentsForm from './CommentsForm';

class BlockComments extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowComments: false
        }
    }

    _toggleComments() {
        this.setState({
            isShowComments: !this.state.isShowComments
        });
    }

	render() {
        //получаем массив с комментариями
        const commentList = this.props.comments;

		return (
            <div>
                <p className="info-comment-ok"></p>
                <span className="my-comment" onClick={this._toggleComments.bind(this)}>{this.state.isShowComments ? 'Скрыть форму отправки отзыва' : 'Оставить свой отзыв'}</span>
                <div className={this.state.isShowComments ? 'block-my-comment hide' : 'block-my-comment'}>
                    <CommentsForm />
                </div>

                {   
                   (commentList !== '') ? ( commentList.map((item, i) => <BlockCommentsItem key={i} name={item.name} text={item.text} />)) : false
                }
                <p className={ (commentList !== '') ? "comment-not-found hide" : "comment-not-found" }>Отзывы для данного товара отсутствуют</p>
            </div>
		)
	}
}

export default BlockComments;