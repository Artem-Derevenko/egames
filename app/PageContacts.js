import React from 'react';

class PageContacts extends React.Component {
	render() {
		return (
			<div className="blok-feedback"> 
                <h3 className="title-h3-style">Контактная информация</h3>
                <div className="basket-line"></div>
                <h4>Call-центр интернет-магазина</h4>
                <p>(044) 461-88-88</p>
                <p>(093) 478-85-99</p>
                <p>(050) 523-88-74</p>
                <h4>График работы</h4>
                <p>
                    Пн.-Пт. 08:00-21:00 <br />
                    Суббота 09:00-20:00 <br />
                    Воскресенье 10:00-19:00
                </p>
                <div className="block-form-feedback">
                    <form method="post" className="form-feedback" >
                        <h4 className="title-h3-style">Написать сообщение</h4>
                        <p className="feedback-message"></p>
                        <div className="line-form-feedback">
                            <span className="title-input">Имя</span>
                            <span className="snowflake">*</span>
                            <div className="feedback-input-border feedback-input-border-name">
                                <input type="text" name="feedback_name" className="feedback-input feedback-name" />
                            </div>
                        </div>
                        <div className="line-form-feedback">
                            <span className="title-input">E-mail</span>
                            <span className="snowflake">*</span>
                            <div className="feedback-input-border feedback-input-border-email">
                                <input type="text" name="feedback_email" className="feedback-input feedback-email" />
                            </div>
                        </div>
                        <div className="line-form-feedback">
                            <span className="title-input">Тема сообщения</span>
                            <span className="snowflake">*</span>
                            <div className="feedback-input-border feedback-input-border-subject">
                                <input type="text" name="feedback_subject" className="feedback-input feedback-subject" />
                            </div>
                        </div>
                        <div className="block-feedback-message">
                            <span className="title-input">Ваше сообщение</span>
                            <span className="snowflake">*</span>
                            <div className="input-feedback-message-border">
                                <textarea name="feedback-message" className="input-feedback-message"></textarea>
                            </div>
                        </div>
                        <div className="feedback-form-submit-border">
                            <input type="submit" name="feedback_submit" className="feedback-form-submit" value="Отправить" />
                        </div>
                    </form> 
                </div>
            </div>
		)
	}
}

export default PageContacts;