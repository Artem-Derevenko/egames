import React from 'react';

class BlockAuthorization extends React.Component {
	render() {
		return (
            <div className="block-basket">
				<div className="block-title">
					<p>Вход в систему</p>
				</div>
				<div className="conteniar-wrapper">
		            <form method="post" className="form-block-authorization">
		                <p className="message-auth">Неверный Логин или Пароль</p>
		                <div className="auth-input-border auth-login-border">
		                    <input type="text" name="auth_login" className="auth-input auth-login" placeholder="Логин или E-mail" />
		                </div>
		                <div className="auth-input-border auth-pass-border">
		                    <input type="password" name="auth_pass" className="auth-input auth-pass" placeholder="Пароль" />
		                </div>
		                <input type="checkbox" name="rememberme" id="rememberme" /><label for="rememberme">Запомнить на сайте</label>
		                <div className="auth-submit">
		                    <span>Ok</span>
		                </div>
		                <span className="registration">Регистрация</span><span className="slash">|</span><span className="remind-me">Забыли пароль?</span>
		            </form>
				</div>
			</div>
		)
	}
}

export default BlockAuthorization;