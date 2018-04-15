import React from 'react';

// Sass
import './scss/form.scss';

class newAccount extends React.Component {
	focusHandler = e => {
		e.target.parentElement.classList.add('hidden');
		e.target.parentElement.classList.remove('show');
	}

	blurHandler = e => {
		if (e.target.value === "") {
			e.target.parentElement.classList.remove('hidden');
		}
	}

	submitHandler = e => {
		if (!this.form.checkValidity()) {
			[].forEach.call(this.form.querySelectorAll(':invalid'), function(e) {
				e.parentElement.classList.add('show');
			});
		}
	}

	invalidHandler = e => {
		e.preventDefault();
	}

	render() {
		return (
			<div className="Form">
				<h1>Login</h1>

				<form className="form" action="/login" method="POST" onInvalid={this.invalidHandler} ref={form => this.form = form}>
					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="userName">Username</label>
						<input id="userName" onFocus={this.focusHandler} onBlur={this.blurHandler} className="required form__field" type="text" name="userName" required />
						<small className="requirements">This field is required</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="password">Password</label>
						<input id="password" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="password" name="password" autoComplete="current-password" required />
						<small className="requirements">Password must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number</small>
					</div>

					<div className="form__submit">
						<button className="cta primary" onClick={this.submitHandler} id="submitButton" type="submit">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default newAccount;
