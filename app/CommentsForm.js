import React from 'react';
import firebase from 'firebase';

class CommentsForm extends React.Component {
    _submitForm(event) {
        event.preventDefault();

        const id_product = event.target.getAttribute("data-id");
        const countComments = event.target.getAttribute("data-comments");
        const author = this._author.value;
        const comment = this.refs.comment.value;

        if (!(author.length && comment.length)) {
            return;
        }

        const commentObj = {
            'name': author,
            'text': comment
        };

        firebase.database().ref("productList/"+ id_product +"/reviews").child(countComments).set(commentObj);
    }

	render() {
		return (
			<form className="comments-form" data-id={this.props.id} data-comments={this.props.comments} onSubmit={this._submitForm.bind(this)}>
                <div className="comment-name-wrapper">
                    <span>Имя*</span>
                    <div className="comment-name-border">
                        <input type="text" id="name" className="comment-input-name" ref={(input) => this._author = input} name="name" />
                    </div>
                </div>
                <div className="comment-text-wrapper">
                    <span>Комментарий*</span>
                    <textarea name="text" ref="comment" id="text" className="comment-text"></textarea>
                </div>
                <input type="submit" value="Отправить" className="my-comment-button" />
            </form>
		)
	}
}

export default CommentsForm;