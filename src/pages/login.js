import React from 'react';

// Sass
import './scss/form.scss';

class newAccount extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: undefined
		};
	}

	componentWillMount() {
		const cookie = document.cookie.split(';').filter(item => item.indexOf('user64=') >= 0).map(s => s.trim())[0];

		if (cookie !== undefined) {
			const user = JSON.parse(window.atob(cookie.split('=')[1].split('.')[1]))
			this.setState({ user });
		}
	}

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
		e.preventDefault();

		if (!this.form.checkValidity()) {
			[].forEach.call(this.form.querySelectorAll(':invalid'), function(e) {
				e.parentElement.classList.add('show');
			});
		} else {
			fetch('/login', {
				method: 'POST',
				body: `userName=${this.login.value}&password=${this.password.value}`,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
				.then(res => res.json())
				.then(data => document.cookie = `user64=${data}`)
				.catch(err => {
					console.log(err)
				});
		}
	}

	invalidHandler = e => {
		e.preventDefault();
	}

	render() {
		return this.state.user ? (
			<h1>Hello</h1>
		) : (
			<div className="Form">
				<h1>Login</h1>

				<form className="form" onInvalid={this.invalidHandler} ref={form => this.form = form}>
					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="userName">Username</label>
						<input ref={login => this.login = login} id="userName" onFocus={this.focusHandler} onBlur={this.blurHandler} className="required form__field" type="text" name="userName" required />
						<small className="requirements">This field is required</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="password">Password</label>
						<input ref={password => this.password = password} id="password" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="password" name="password" autoComplete="current-password" required />
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
