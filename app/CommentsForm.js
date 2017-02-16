import React from 'react';
import firebase from 'firebase';

class CommentsForm extends React.Component {
    _submitForm(event) {
        event.preventDefault();

        const author = this._author.value;
        const comment = this.refs.comment.value;

        if (!(author.length && comment.length)) {
            return;
        }

        const commentObj = {
            'name': author,
            'text': comment
        };

        firebase.database().ref().child("productList").child("id").push(commentObj).then(() => {
            this._author.value = '';
            this.refs.comment.value = '';
        });
    }

	render() {
		return (
			<form className="comments-form" onSubmit={this._submitForm.bind(this)}>
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