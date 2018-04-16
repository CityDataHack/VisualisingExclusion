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

	passwordHandler = e => {
		this.pass.pattern = e.target.value;
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
				<form className="form" action="/signup" method="POST" onInvalid={this.invalidHandler} ref={form => this.form = form}>
					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="userName">Username</label>
						<input id="userName" onFocus={this.focusHandler} onBlur={this.blurHandler} className="required form__field" type="text" name="userName" required />
						<small className="requirements">This field is required</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="email">Email</label>
						<input id="email" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="email" name="email" required />
						<small className="requirements">Please enter a valid email</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="password">Password</label>
						<input id="password" onFocus={this.focusHandler} onBlur={this.blurHandler} onChange={this.passwordHandler} className="form__field" type="password" name="password" autoComplete="current-password" minLength="8" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$" required />
						<small className="requirements">Password must be at least 8 characters and contain at least one uppercase, one lowercase letter and one number</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="confirmPassword">Confirm Password</label>
						<input id="confirmPassword" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="password" name="confirmPassword" ref={pass => this.pass = pass} minLength="8" required />
						<small className="requirements">Password must match</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="firstName">First Name</label>
						<input id="firstName" onFocus={this.focusHandler} onBlur={this.blurHandler} className="required form__field" type="text" name="firstName" required />
						<small className="requirements">This field is required</small>
					</div>

					<div className="form__element">
						<label className="form__element__placeholder required" htmlFor="lastName">Last Name</label>
						<input id="lastName" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="text" name="lastName" required />
						<small className="requirements">This field is required</small>
					</div>

					<div className="form__element form__element--right">
						<span className="form__label required">Date of Birth</span>

						<div className="form__field--small">
							<label className="form__element__placeholder" htmlFor="day">Day</label>
							<input id="day" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="number" name="day" min="1" max="31" required />
							<small className="requirements">This field is required</small>
						</div>
						<div className="form__field--small">
							<label className="form__element__placeholder" htmlFor="month">Month</label>
							<input id="month" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="number" name="month" min="1" max="12" required />
							<small className="requirements">This field is required</small>
						</div>
						<div className="form__field--small">
							<label className="form__element__placeholder" htmlFor="year">Year</label>
							<input id="year" onFocus={this.focusHandler} onBlur={this.blurHandler} className="form__field" type="number" name="year" min="1900" max="2018" required />
							<small className="requirements">This field is required</small>
						</div>
					</div>

					<small className="form__caption">Fields marked * are required.</small>
					<div className="form__submit">
						<button className="cta secondary" type="cancel">Cancel</button>
						<button className="cta primary" onClick={this.submitHandler} id="submitButton" type="submit">Submit</button>
					</div>
				</form>
			</div>
		)
	}
}

export default newAccount;
